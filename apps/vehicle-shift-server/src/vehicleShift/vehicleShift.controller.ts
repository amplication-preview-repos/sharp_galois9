import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VehicleShiftService } from "./vehicleShift.service";
import { VehicleShiftControllerBase } from "./base/vehicleShift.controller.base";

@swagger.ApiTags("vehicleShifts")
@common.Controller("vehicleShifts")
export class VehicleShiftController extends VehicleShiftControllerBase {
  constructor(protected readonly service: VehicleShiftService) {
    super(service);
  }
}
