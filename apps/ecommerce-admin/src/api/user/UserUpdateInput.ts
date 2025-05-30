import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  active?: boolean | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutUsersInput;
  password?: string;
  phone?: string | null;
  resetPwdExpire?: string | null;
  resetPwdToken?: string | null;
  roles?: InputJsonValue;
  shippingAddress?: string | null;
  username?: string;
};
