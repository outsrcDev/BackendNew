import { Module } from "@nestjs/common";
import { OrderDetailModuleBase } from "./base/orderDetail.module.base";
import { OrderDetailService } from "./orderDetail.service";
import { OrderDetailController } from "./orderDetail.controller";
import { OrderDetailResolver } from "./orderDetail.resolver";

@Module({
  imports: [OrderDetailModuleBase],
  controllers: [OrderDetailController],
  providers: [OrderDetailService, OrderDetailResolver],
  exports: [OrderDetailService],
})
export class OrderDetailModule {}
