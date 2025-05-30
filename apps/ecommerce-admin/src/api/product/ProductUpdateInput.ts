import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OrderDetailWhereUniqueInput } from "../orderDetail/OrderDetailWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type ProductUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  detail?: string | null;
  discountPrecent?: string | null;
  images?: InputJsonValue;
  name?: string | null;
  orderDetail?: OrderDetailWhereUniqueInput | null;
  price?: number | null;
  stock?: string | null;
  tag?: TagWhereUniqueInput | null;
};
