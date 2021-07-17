import React, { createContext, useCallback, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import { Product } from '@models/domain/Product';
import { productService } from '@services/index';

export interface Context {
  products: Product[];
  loadingProducts: boolean;
  listProducts: () => Promise<void>;
}

export const ProductContext = createContext<Context>({} as Context);

export const ProductProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);

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

  return (
    <ProductContext.Provider
      value={{ products, loadingProducts, listProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
