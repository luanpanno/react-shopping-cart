import React, { createContext, useCallback, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import { CartProduct, Product } from '@models/domain/Product';
import { productService } from '@services/index';

import { masks } from '../utils/masks';

export interface Context {
  products: Product[];
  cartProducts: CartProduct[];
  loadingProducts: boolean;
  listProducts: () => Promise<void>;
  handleCartProducts: (product: Product) => void;
  handleCartProductQuantity: (id: string, newQuantity: number) => void;
  handleCartProductInputQuantityChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
}

export const StoreContext = createContext<Context>({} as Context);

export const StoreProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

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

  const handleCartProductQuantity = useCallback(
    (id: string, newQuantity: number) => {
      const product = products?.find((item) => item.id === id);

      if (newQuantity < 1 || newQuantity > product.stock) return;

      const refreshedproduct: CartProduct = {
        id,
        quantity: newQuantity,
        price: +product.price,
        total: +product.price * newQuantity,
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

      if (quantity < 1 || quantity > product.stock) return;

      handleCartProductQuantity(id, quantity);
    },
    [handleCartProductQuantity, products]
  );

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
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
