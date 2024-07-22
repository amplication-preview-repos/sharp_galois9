import * as graphql from "@nestjs/graphql";
import { VehicleShiftResolverBase } from "./base/vehicleShift.resolver.base";
import { VehicleShift } from "./base/VehicleShift";
import { VehicleShiftService } from "./vehicleShift.service";

@graphql.Resolver(() => VehicleShift)
export class VehicleShiftResolver extends VehicleShiftResolverBase {
  constructor(protected readonly service: VehicleShiftService) {
    super(service);
  }
}
