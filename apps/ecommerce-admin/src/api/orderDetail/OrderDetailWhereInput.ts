import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OrderDetailWhereInput = {
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  products?: ProductListRelationFilter;
  quantity?: IntNullableFilter;
};
