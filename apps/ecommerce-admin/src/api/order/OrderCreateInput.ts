import { OrderDetailCreateNestedManyWithoutOrdersInput } from "./OrderDetailCreateNestedManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  city?: string | null;
  deliveryDate?: Date | null;
  deliveryType?: "StorePickup" | "Others" | null;
  orderDate?: Date | null;
  orderDetails?: OrderDetailCreateNestedManyWithoutOrdersInput;
  paymentType?: "CashOnDelivery" | "BankTransfer" | null;
  shippingAddress?: string | null;
  state?: string | null;
  totalPrice?: number | null;
  township?: string | null;
  user?: UserWhereUniqueInput | null;
  zipCode?: string | null;
};
