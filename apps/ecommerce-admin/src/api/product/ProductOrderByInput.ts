import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  detail?: SortOrder;
  discountPrecent?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  name?: SortOrder;
  orderDetailId?: SortOrder;
  price?: SortOrder;
  stock?: SortOrder;
  tagId?: SortOrder;
  updatedAt?: SortOrder;
};
