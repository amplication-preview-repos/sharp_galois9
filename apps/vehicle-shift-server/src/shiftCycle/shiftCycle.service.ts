import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShiftCycleServiceBase } from "./base/shiftCycle.service.base";

@Injectable()
export class ShiftCycleService extends ShiftCycleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
