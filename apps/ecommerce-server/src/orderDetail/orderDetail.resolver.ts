import * as graphql from "@nestjs/graphql";
import { OrderDetailResolverBase } from "./base/orderDetail.resolver.base";
import { OrderDetail } from "./base/OrderDetail";
import { OrderDetailService } from "./orderDetail.service";

@graphql.Resolver(() => OrderDetail)
export class OrderDetailResolver extends OrderDetailResolverBase {
  constructor(protected readonly service: OrderDetailService) {
    super(service);
  }
}
