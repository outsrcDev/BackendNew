import { OrderDetail } from "../orderDetail/OrderDetail";
import { User } from "../user/User";

export type Order = {
  city: string | null;
  createdAt: Date;
  deliveryDate: Date | null;
  deliveryType?: "StorePickup" | "Others" | null;
  id: string;
  orderDate: Date | null;
  orderDetails?: Array<OrderDetail>;
  paymentType?: "CashOnDelivery" | "BankTransfer" | null;
  shippingAddress: string | null;
  state: string | null;
  totalPrice: number | null;
  township: string | null;
  updatedAt: Date;
  user?: User | null;
  zipCode: string | null;
};
