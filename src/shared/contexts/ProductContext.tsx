import React, { createContext, useCallback, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import { Product } from '@models/domain/Product';
import { productService } from '@services/index';

export interface Context {
  products: Product[];
  setProducts: (products: Product[]) => void;
  listProducts: () => Promise<Product[]>;
}

export const ProductContext = createContext<Context>({} as Context);

export const ProductProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const listProducts = useCallback(async () => {
    try {
      const response = await productService.list();

      return response;
    } catch (error) {
      toast.error(
        'Oops! Um erro inesperado aconteceu. Tente novamente mais tarde'
      );

      return [];
    }
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts, listProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
