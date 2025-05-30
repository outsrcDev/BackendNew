/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { OrderService } from "../order.service";
import { OrderCreateInput } from "./OrderCreateInput";
import { Order } from "./Order";
import { OrderFindManyArgs } from "./OrderFindManyArgs";
import { OrderWhereUniqueInput } from "./OrderWhereUniqueInput";
import { OrderUpdateInput } from "./OrderUpdateInput";
import { OrderDetailFindManyArgs } from "../../orderDetail/base/OrderDetailFindManyArgs";
import { OrderDetail } from "../../orderDetail/base/OrderDetail";
import { OrderDetailWhereUniqueInput } from "../../orderDetail/base/OrderDetailWhereUniqueInput";

export class OrderControllerBase {
  constructor(protected readonly service: OrderService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Order })
  async createOrder(@common.Body() data: OrderCreateInput): Promise<Order> {
    return await this.service.createOrder({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        city: true,
        createdAt: true,
        deliveryDate: true,
        deliveryType: true,
        id: true,
        orderDate: true,
        paymentType: true,
        shippingAddress: true,
        state: true,
        totalPrice: true,
        township: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        zipCode: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Order] })
  @ApiNestedQuery(OrderFindManyArgs)
  async orders(@common.Req() request: Request): Promise<Order[]> {
    const args = plainToClass(OrderFindManyArgs, request.query);
    return this.service.orders({
      ...args,
      select: {
        city: true,
        createdAt: true,
        deliveryDate: true,
        deliveryType: true,
        id: true,
        orderDate: true,
        paymentType: true,
        shippingAddress: true,
        state: true,
        totalPrice: true,
        township: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        zipCode: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async order(
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<Order | null> {
    const result = await this.service.order({
      where: params,
      select: {
        city: true,
        createdAt: true,
        deliveryDate: true,
        deliveryType: true,
        id: true,
        orderDate: true,
        paymentType: true,
        shippingAddress: true,
        state: true,
        totalPrice: true,
        township: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        zipCode: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateOrder(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() data: OrderUpdateInput
  ): Promise<Order | null> {
    try {
      return await this.service.updateOrder({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          city: true,
          createdAt: true,
          deliveryDate: true,
          deliveryType: true,
          id: true,
          orderDate: true,
          paymentType: true,
          shippingAddress: true,
          state: true,
          totalPrice: true,
          township: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          zipCode: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteOrder(
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<Order | null> {
    try {
      return await this.service.deleteOrder({
        where: params,
        select: {
          city: true,
          createdAt: true,
          deliveryDate: true,
          deliveryType: true,
          id: true,
          orderDate: true,
          paymentType: true,
          shippingAddress: true,
          state: true,
          totalPrice: true,
          township: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          zipCode: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/orderDetails")
  @ApiNestedQuery(OrderDetailFindManyArgs)
  async findOrderDetails(
    @common.Req() request: Request,
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<OrderDetail[]> {
    const query = plainToClass(OrderDetailFindManyArgs, request.query);
    const results = await this.service.findOrderDetails(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        order: {
          select: {
            id: true,
          },
        },

        quantity: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/orderDetails")
  async connectOrderDetails(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: OrderDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orderDetails: {
        connect: body,
      },
    };
    await this.service.updateOrder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/orderDetails")
  async updateOrderDetails(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: OrderDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orderDetails: {
        set: body,
      },
    };
    await this.service.updateOrder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/orderDetails")
  async disconnectOrderDetails(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: OrderDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orderDetails: {
        disconnect: body,
      },
    };
    await this.service.updateOrder({
      where: params,
      data,
      select: { id: true },
    });
  }
}
