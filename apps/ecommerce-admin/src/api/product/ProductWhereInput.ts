import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { OrderDetailWhereUniqueInput } from "../orderDetail/OrderDetailWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type ProductWhereInput = {
  category?: CategoryWhereUniqueInput;
  description?: StringNullableFilter;
  detail?: StringNullableFilter;
  discountPrecent?: StringNullableFilter;
  id?: StringFilter;
  images?: JsonFilter;
  name?: StringNullableFilter;
  orderDetail?: OrderDetailWhereUniqueInput;
  price?: FloatNullableFilter;
  stock?: StringNullableFilter;
  tag?: TagWhereUniqueInput;
};
