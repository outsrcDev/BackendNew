import { OrderDetailUpdateManyWithoutOrdersInput } from "./OrderDetailUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  city?: string | null;
  deliveryDate?: Date | null;
  deliveryType?: "StorePickup" | "Others" | null;
  orderDate?: Date | null;
  orderDetails?: OrderDetailUpdateManyWithoutOrdersInput;
  paymentType?: "CashOnDelivery" | "BankTransfer" | null;
  shippingAddress?: string | null;
  state?: string | null;
  totalPrice?: number | null;
  township?: string | null;
  user?: UserWhereUniqueInput | null;
  zipCode?: string | null;
};
