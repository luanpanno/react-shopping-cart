import React, { createContext, useContext, useState } from 'react';

import { Product } from '../models/domain/Product';

export interface Context {
  products: Product[];
}

export const ProductContext = createContext<Context>({} as Context);

export const ProductProvider: React.FC = ({ children }) => {
  const [products] = useState<Product[]>([]);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
