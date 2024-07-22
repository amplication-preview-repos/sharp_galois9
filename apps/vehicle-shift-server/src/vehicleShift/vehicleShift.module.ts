import { Module } from "@nestjs/common";
import { VehicleShiftModuleBase } from "./base/vehicleShift.module.base";
import { VehicleShiftService } from "./vehicleShift.service";
import { VehicleShiftController } from "./vehicleShift.controller";
import { VehicleShiftResolver } from "./vehicleShift.resolver";

@Module({
  imports: [VehicleShiftModuleBase],
  controllers: [VehicleShiftController],
  providers: [VehicleShiftService, VehicleShiftResolver],
  exports: [VehicleShiftService],
})
export class VehicleShiftModule {}
