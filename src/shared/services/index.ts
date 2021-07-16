import { api } from './api';
import { ProductService } from './ProductService';

export const productService = new ProductService(api);
