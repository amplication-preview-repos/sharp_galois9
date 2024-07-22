import * as graphql from "@nestjs/graphql";
import { ShiftCycleResolverBase } from "./base/shiftCycle.resolver.base";
import { ShiftCycle } from "./base/ShiftCycle";
import { ShiftCycleService } from "./shiftCycle.service";

@graphql.Resolver(() => ShiftCycle)
export class ShiftCycleResolver extends ShiftCycleResolverBase {
  constructor(protected readonly service: ShiftCycleService) {
    super(service);
  }
}
