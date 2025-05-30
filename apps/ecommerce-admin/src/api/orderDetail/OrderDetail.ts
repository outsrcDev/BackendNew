import { Order } from "../order/Order";
import { Product } from "../product/Product";

export type OrderDetail = {
  createdAt: Date;
  id: string;
  order?: Order | null;
  products?: Array<Product>;
  quantity: number | null;
  updatedAt: Date;
};
