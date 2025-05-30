import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  city?: SortOrder;
  createdAt?: SortOrder;
  deliveryDate?: SortOrder;
  deliveryType?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  paymentType?: SortOrder;
  shippingAddress?: SortOrder;
  state?: SortOrder;
  totalPrice?: SortOrder;
  township?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  zipCode?: SortOrder;
};
