import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  active?: boolean | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  password: string;
  phone?: string | null;
  resetPwdExpire?: string | null;
  resetPwdToken?: string | null;
  roles: InputJsonValue;
  shippingAddress?: string | null;
  username: string;
};
