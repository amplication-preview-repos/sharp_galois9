import { StringFilter } from "../../util/StringFilter";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type VehicleShiftWhereInput = {
  id?: StringFilter;
  vehicle?: VehicleWhereUniqueInput;
};
