import { AxiosInstance } from 'axios';

import { Product } from '@models/domain/Product';

export class ProductService {
  constructor(private api: AxiosInstance) {}

  private ENDPOINT = '/api/v1/product';

  async list() {
    const { data } = await this.api.get<Product[]>(this.ENDPOINT);

    return data;
  }
}
