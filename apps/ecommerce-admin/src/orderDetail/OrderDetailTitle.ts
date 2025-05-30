import { OrderDetail as TOrderDetail } from "../api/orderDetail/OrderDetail";

export const ORDERDETAIL_TITLE_FIELD = "id";

export const OrderDetailTitle = (record: TOrderDetail): string => {
  return record.id?.toString() || String(record.id);
};
