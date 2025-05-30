import { Order } from "../order/Order";
import { JsonValue } from "type-fest";

export type User = {
  active: boolean | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  phone: string | null;
  resetPwdExpire: string | null;
  resetPwdToken: string | null;
  roles: JsonValue;
  shippingAddress: string | null;
  updatedAt: Date;
  username: string;
};
