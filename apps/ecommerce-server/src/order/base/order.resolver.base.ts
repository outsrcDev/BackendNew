/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Order } from "./Order";
import { OrderCountArgs } from "./OrderCountArgs";
import { OrderFindManyArgs } from "./OrderFindManyArgs";
import { OrderFindUniqueArgs } from "./OrderFindUniqueArgs";
import { CreateOrderArgs } from "./CreateOrderArgs";
import { UpdateOrderArgs } from "./UpdateOrderArgs";
import { DeleteOrderArgs } from "./DeleteOrderArgs";
import { OrderDetailFindManyArgs } from "../../orderDetail/base/OrderDetailFindManyArgs";
import { OrderDetail } from "../../orderDetail/base/OrderDetail";
import { User } from "../../user/base/User";
import { OrderService } from "../order.service";
@graphql.Resolver(() => Order)
export class OrderResolverBase {
  constructor(protected readonly service: OrderService) {}

  async _ordersMeta(
    @graphql.Args() args: OrderCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Order])
  async orders(@graphql.Args() args: OrderFindManyArgs): Promise<Order[]> {
    return this.service.orders(args);
  }

  @graphql.Query(() => Order, { nullable: true })
  async order(
    @graphql.Args() args: OrderFindUniqueArgs
  ): Promise<Order | null> {
    const result = await this.service.order(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Order)
  async createOrder(@graphql.Args() args: CreateOrderArgs): Promise<Order> {
    return await this.service.createOrder({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Order)
  async updateOrder(
    @graphql.Args() args: UpdateOrderArgs
  ): Promise<Order | null> {
    try {
      return await this.service.updateOrder({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Order)
  async deleteOrder(
    @graphql.Args() args: DeleteOrderArgs
  ): Promise<Order | null> {
    try {
      return await this.service.deleteOrder(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [OrderDetail], { name: "orderDetails" })
  async findOrderDetails(
    @graphql.Parent() parent: Order,
    @graphql.Args() args: OrderDetailFindManyArgs
  ): Promise<OrderDetail[]> {
    const results = await this.service.findOrderDetails(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Order): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
