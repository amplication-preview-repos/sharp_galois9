import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DriverShiftServiceBase } from "./base/driverShift.service.base";

@Injectable()
export class DriverShiftService extends DriverShiftServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
