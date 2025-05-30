import { Category } from "../category/Category";
import { JsonValue } from "type-fest";
import { OrderDetail } from "../orderDetail/OrderDetail";
import { Tag } from "../tag/Tag";

export type Product = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  detail: string | null;
  discountPrecent: string | null;
  id: string;
  images: JsonValue;
  name: string | null;
  orderDetail?: OrderDetail | null;
  price: number | null;
  stock: string | null;
  tag?: Tag | null;
  updatedAt: Date;
};
