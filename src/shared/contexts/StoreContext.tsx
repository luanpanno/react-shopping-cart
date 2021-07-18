import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { toast } from 'react-toastify';

import { CartProduct, Product } from '@models/domain/Product';
import { productService } from '@services/index';

import { masks } from '../utils/masks';

export interface Context {
  products: Product[];
  cartProducts: CartProduct[];
  loadingProducts: boolean;
  cartTotalPrice: number;
  cartProductsAmount: number;
  hasProductWithNoQuantity: boolean;
  likedProducts: string[];
  listProducts: () => Promise<void>;
  handleCartProducts: (product: Product) => void;
  handleLikedProducts: (id: string) => void;
  handleCartProductQuantity: (id: string, quantity: number) => void;
  handleCartProductInputQuantityChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
}

export const StoreContext = createContext<Context>({} as Context);

function getItemFromLocalStorage(name: string) {
  const items = window.localStorage.getItem(name);

  return JSON.parse(items);
}

export const StoreProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>(
    getItemFromLocalStorage('cartProducts') ?? []
  );
  const [likedProducts, setLikedProducts] = useState<string[]>(
    getItemFromLocalStorage('likedProducts') ?? []
  );
  const cartTotalPrice = useMemo(
    () =>
      cartProducts?.length > 0
        ? cartProducts
            ?.map((item) => item.total)
            ?.reduce((cur, acc) => {
              let amount = acc;
              amount += cur;

              return amount;
            })
        : 0,
    [cartProducts]
  );
  const cartProductsAmount = useMemo(
    () =>
      cartProducts?.length > 0 && products?.length > 0
        ? cartProducts
            ?.map((item) => item.quantity)
            ?.reduce((cur, acc) => {
              let amount = acc;
              amount += cur;

              return amount;
            })
        : 0,
    [cartProducts, products]
  );
  const hasProductWithNoQuantity = useMemo(
    () => cartProducts?.some((product) => product.quantity === 0),
    [cartProducts]
  );

  const listProducts = useCallback(async () => {
    setLoadingProducts(true);

    try {
      const response = await productService.list();

      setProducts(response);
    } catch (error) {
      toast.error(
        'Oops! Um erro inesperado aconteceu. Tente novamente mais tarde'
      );
    } finally {
      setLoadingProducts(false);
    }
  }, []);

  const handleCartProducts = useCallback((product: Product) => {
    setCartProducts((current) => {
      if (current.some((item) => item.id === product.id)) {
        return current.filter((item) => item.id !== product.id);
      }

      const item: CartProduct = {
        id: product.id,
        quantity: 1,
        total: +product.price,
        price: +product.price,
      };

      return [...current, item];
    });
  }, []);

  const handleLikedProducts = useCallback((id: string) => {
    setLikedProducts((current) => {
      if (current.some((item) => item === id)) {
        return current.filter((item) => item !== id);
      }

      return [...current, id];
    });
  }, []);

  const handleCartProductQuantity = useCallback(
    (id: string, quantity: number) => {
      const product = products?.find((item) => item.id === id);

      if (quantity < 0 || quantity > product.stock) return;

      const refreshedproduct: CartProduct = {
        id,
        quantity,
        price: +product.price,
        total: +product.price * quantity,
      };

      setCartProducts((current) =>
        current?.map((item) => (item.id === id ? refreshedproduct : item))
      );
    },
    [products]
  );

  const handleCartProductInputQuantityChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
      const { value } = e.target;
      const product = products?.find((item) => item.id === id);
      const quantity = masks.integers(value);

      if (quantity < 0 || quantity > product.stock) return;

      handleCartProductQuantity(id, quantity);
    },
    [handleCartProductQuantity, products]
  );

  const saveItemsOnLocalStorage = useCallback(
    (name: string, items: unknown) => {
      window.localStorage.setItem(name, JSON.stringify(items));
    },
    []
  );

  useEffect(() => {
    saveItemsOnLocalStorage('cartProducts', cartProducts);
  }, [saveItemsOnLocalStorage, cartProducts]);

  useEffect(() => {
    saveItemsOnLocalStorage('likedProducts', likedProducts);
  }, [saveItemsOnLocalStorage, likedProducts]);

  return (
    <StoreContext.Provider
      value={{
        products,
        loadingProducts,
        listProducts,
        handleCartProducts,
        cartProducts,
        handleCartProductQuantity,
        handleCartProductInputQuantityChange,
        cartTotalPrice,
        cartProductsAmount,
        hasProductWithNoQuantity,
        handleLikedProducts,
        likedProducts,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
