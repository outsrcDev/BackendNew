import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductCreateNestedManyWithoutOrderDetailsInput } from "./ProductCreateNestedManyWithoutOrderDetailsInput";

export type OrderDetailCreateInput = {
  order?: OrderWhereUniqueInput | null;
  products?: ProductCreateNestedManyWithoutOrderDetailsInput;
  quantity?: number | null;
};
