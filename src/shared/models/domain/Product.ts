export interface Product {
  id: string;
  createdAt: Date;
  name: string;
  price: string;
  image: string;
  stock: number;
}

export interface CartProduct {
  id: string;
  quantity: number;
  total: number;
  price: number;
}
