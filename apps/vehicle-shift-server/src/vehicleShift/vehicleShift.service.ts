import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VehicleShiftServiceBase } from "./base/vehicleShift.service.base";

@Injectable()
export class VehicleShiftService extends VehicleShiftServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
