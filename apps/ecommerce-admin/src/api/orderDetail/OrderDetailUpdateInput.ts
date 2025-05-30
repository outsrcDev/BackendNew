import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductUpdateManyWithoutOrderDetailsInput } from "./ProductUpdateManyWithoutOrderDetailsInput";

export type OrderDetailUpdateInput = {
  order?: OrderWhereUniqueInput | null;
  products?: ProductUpdateManyWithoutOrderDetailsInput;
  quantity?: number | null;
};
