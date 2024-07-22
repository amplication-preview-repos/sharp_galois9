import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VehicleShiftListRelationFilter } from "../vehicleShift/VehicleShiftListRelationFilter";

export type VehicleWhereInput = {
  id?: StringFilter;
  model?: StringNullableFilter;
  licensePlate?: StringNullableFilter;
  vehicleShifts?: VehicleShiftListRelationFilter;
};
