/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Product as PrismaProduct,
  Category as PrismaCategory,
  OrderDetail as PrismaOrderDetail,
  Tag as PrismaTag,
} from "@prisma/client";

export class ProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ProductCountArgs, "select">): Promise<number> {
    return this.prisma.product.count(args);
  }

  async products(args: Prisma.ProductFindManyArgs): Promise<PrismaProduct[]> {
    return this.prisma.product.findMany(args);
  }
  async product(
    args: Prisma.ProductFindUniqueArgs
  ): Promise<PrismaProduct | null> {
    return this.prisma.product.findUnique(args);
  }
  async createProduct(args: Prisma.ProductCreateArgs): Promise<PrismaProduct> {
    return this.prisma.product.create(args);
  }
  async updateProduct(args: Prisma.ProductUpdateArgs): Promise<PrismaProduct> {
    return this.prisma.product.update(args);
  }
  async deleteProduct(args: Prisma.ProductDeleteArgs): Promise<PrismaProduct> {
    return this.prisma.product.delete(args);
  }

  async getCategory(parentId: string): Promise<PrismaCategory | null> {
    return this.prisma.product
      .findUnique({
        where: { id: parentId },
      })
      .category();
  }

  async getOrderDetail(parentId: string): Promise<PrismaOrderDetail | null> {
    return this.prisma.product
      .findUnique({
        where: { id: parentId },
      })
      .orderDetail();
  }

  async getTag(parentId: string): Promise<PrismaTag | null> {
    return this.prisma.product
      .findUnique({
        where: { id: parentId },
      })
      .tag();
  }
}
