import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrderDetailServiceBase } from "./base/orderDetail.service.base";

@Injectable()
export class OrderDetailService extends OrderDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
