import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShiftCycleService } from "./shiftCycle.service";
import { ShiftCycleControllerBase } from "./base/shiftCycle.controller.base";

@swagger.ApiTags("shiftCycles")
@common.Controller("shiftCycles")
export class ShiftCycleController extends ShiftCycleControllerBase {
  constructor(protected readonly service: ShiftCycleService) {
    super(service);
  }
}
