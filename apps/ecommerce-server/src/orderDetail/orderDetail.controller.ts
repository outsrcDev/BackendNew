import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrderDetailService } from "./orderDetail.service";
import { OrderDetailControllerBase } from "./base/orderDetail.controller.base";

@swagger.ApiTags("orderDetails")
@common.Controller("orderDetails")
export class OrderDetailController extends OrderDetailControllerBase {
  constructor(protected readonly service: OrderDetailService) {
    super(service);
  }
}
