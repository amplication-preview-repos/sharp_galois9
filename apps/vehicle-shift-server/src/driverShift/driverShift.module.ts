import { Module } from "@nestjs/common";
import { DriverShiftModuleBase } from "./base/driverShift.module.base";
import { DriverShiftService } from "./driverShift.service";
import { DriverShiftController } from "./driverShift.controller";
import { DriverShiftResolver } from "./driverShift.resolver";

@Module({
  imports: [DriverShiftModuleBase],
  controllers: [DriverShiftController],
  providers: [DriverShiftService, DriverShiftResolver],
  exports: [DriverShiftService],
})
export class DriverShiftModule {}
