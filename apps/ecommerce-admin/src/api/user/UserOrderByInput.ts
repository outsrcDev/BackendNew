import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  active?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  phone?: SortOrder;
  resetPwdExpire?: SortOrder;
  resetPwdToken?: SortOrder;
  roles?: SortOrder;
  shippingAddress?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
