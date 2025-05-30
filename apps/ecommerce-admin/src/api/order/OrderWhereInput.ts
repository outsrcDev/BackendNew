import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderDetailListRelationFilter } from "../orderDetail/OrderDetailListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  city?: StringNullableFilter;
  deliveryDate?: DateTimeNullableFilter;
  deliveryType?: "StorePickup" | "Others";
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  orderDetails?: OrderDetailListRelationFilter;
  paymentType?: "CashOnDelivery" | "BankTransfer";
  shippingAddress?: StringNullableFilter;
  state?: StringNullableFilter;
  totalPrice?: FloatNullableFilter;
  township?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  zipCode?: StringNullableFilter;
};
