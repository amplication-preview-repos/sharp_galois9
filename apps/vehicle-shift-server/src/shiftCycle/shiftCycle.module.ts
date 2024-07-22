import { Module } from "@nestjs/common";
import { ShiftCycleModuleBase } from "./base/shiftCycle.module.base";
import { ShiftCycleService } from "./shiftCycle.service";
import { ShiftCycleController } from "./shiftCycle.controller";
import { ShiftCycleResolver } from "./shiftCycle.resolver";

@Module({
  imports: [ShiftCycleModuleBase],
  controllers: [ShiftCycleController],
  providers: [ShiftCycleService, ShiftCycleResolver],
  exports: [ShiftCycleService],
})
export class ShiftCycleModule {}
