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
  DriverShift as PrismaDriverShift,
  Driver as PrismaDriver,
} from "@prisma/client";

export class DriverShiftServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DriverShiftCountArgs, "select">
  ): Promise<number> {
    return this.prisma.driverShift.count(args);
  }

  async driverShifts(
    args: Prisma.DriverShiftFindManyArgs
  ): Promise<PrismaDriverShift[]> {
    return this.prisma.driverShift.findMany(args);
  }
  async driverShift(
    args: Prisma.DriverShiftFindUniqueArgs
  ): Promise<PrismaDriverShift | null> {
    return this.prisma.driverShift.findUnique(args);
  }
  async createDriverShift(
    args: Prisma.DriverShiftCreateArgs
  ): Promise<PrismaDriverShift> {
    return this.prisma.driverShift.create(args);
  }
  async updateDriverShift(
    args: Prisma.DriverShiftUpdateArgs
  ): Promise<PrismaDriverShift> {
    return this.prisma.driverShift.update(args);
  }
  async deleteDriverShift(
    args: Prisma.DriverShiftDeleteArgs
  ): Promise<PrismaDriverShift> {
    return this.prisma.driverShift.delete(args);
  }

  async getDriver(parentId: string): Promise<PrismaDriver | null> {
    return this.prisma.driverShift
      .findUnique({
        where: { id: parentId },
      })
      .driver();
  }
}
