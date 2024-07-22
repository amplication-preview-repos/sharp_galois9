import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DriverShiftService } from "./driverShift.service";
import { DriverShiftControllerBase } from "./base/driverShift.controller.base";

@swagger.ApiTags("driverShifts")
@common.Controller("driverShifts")
export class DriverShiftController extends DriverShiftControllerBase {
  constructor(protected readonly service: DriverShiftService) {
    super(service);
  }
}
