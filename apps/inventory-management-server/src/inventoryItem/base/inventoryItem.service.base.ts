/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, InventoryItem as PrismaInventoryItem } from "@prisma/client";
import { InventoryItemCreateInput } from "./InventoryItemCreateInput";
import { InventoryItem } from "./InventoryItem";
import { DeleteRemovalRequestArgs } from "../../removalRequest/base/DeleteRemovalRequestArgs";
import { InventoryItemCountArgs } from "./InventoryItemCountArgs";

export class InventoryItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.InventoryItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.inventoryItem.count(args);
  }

  async inventoryItems<T extends Prisma.InventoryItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InventoryItemFindManyArgs>
  ): Promise<PrismaInventoryItem[]> {
    return this.prisma.inventoryItem.findMany<Prisma.InventoryItemFindManyArgs>(
      args
    );
  }
  async inventoryItem<T extends Prisma.InventoryItemFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.InventoryItemFindUniqueArgs>
  ): Promise<PrismaInventoryItem | null> {
    return this.prisma.inventoryItem.findUnique(args);
  }
  async createInventoryItem<T extends Prisma.InventoryItemCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InventoryItemCreateArgs>
  ): Promise<PrismaInventoryItem> {
    return this.prisma.inventoryItem.create<T>(args);
  }
  async updateInventoryItem<T extends Prisma.InventoryItemUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InventoryItemUpdateArgs>
  ): Promise<PrismaInventoryItem> {
    return this.prisma.inventoryItem.update<T>(args);
  }
  async deleteInventoryItem<T extends Prisma.InventoryItemDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.InventoryItemDeleteArgs>
  ): Promise<PrismaInventoryItem> {
    return this.prisma.inventoryItem.delete(args);
  }
  async AddInventoryItem(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateInventoryItem(
    args: InventoryItemCreateInput
  ): Promise<InventoryItem> {
    throw new Error("Not implemented");
  }
  async DeleteInventoryItem(
    args: DeleteRemovalRequestArgs
  ): Promise<InventoryItem> {
    throw new Error("Not implemented");
  }
  async GetInventoryStatistics(
    args: InventoryItemCountArgs
  ): Promise<InventoryItem[]> {
    throw new Error("Not implemented");
  }
  async GetInventoryStatistics(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetInventoryStats(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async RemoveInventoryItem(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}