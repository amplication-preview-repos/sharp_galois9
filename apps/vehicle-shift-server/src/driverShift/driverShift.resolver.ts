import * as graphql from "@nestjs/graphql";
import { DriverShiftResolverBase } from "./base/driverShift.resolver.base";
import { DriverShift } from "./base/DriverShift";
import { DriverShiftService } from "./driverShift.service";

@graphql.Resolver(() => DriverShift)
export class DriverShiftResolver extends DriverShiftResolverBase {
  constructor(protected readonly service: DriverShiftService) {
    super(service);
  }
}
