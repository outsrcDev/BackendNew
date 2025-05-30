import { OrderDetailWhereInput } from "./OrderDetailWhereInput";
import { OrderDetailOrderByInput } from "./OrderDetailOrderByInput";

export type OrderDetailFindManyArgs = {
  where?: OrderDetailWhereInput;
  orderBy?: Array<OrderDetailOrderByInput>;
  skip?: number;
  take?: number;
};
