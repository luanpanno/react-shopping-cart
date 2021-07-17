import React, { createContext, useCallback, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import { CartProduct, Product } from '@models/domain/Product';
import { productService } from '@services/index';

export interface Context {
  products: Product[];
  cartProducts: CartProduct[];
  loadingProducts: boolean;
  listProducts: () => Promise<void>;
  handleCartProducts: (product: Product) => void;
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

      return [
        ...current,
        {
          id: product.id,
          quantity: 1,
        },
      ];
    });
  }, []);

  return (
    <StoreContext.Provider
      value={{
        products,
        loadingProducts,
        listProducts,
        handleCartProducts,
        cartProducts,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
