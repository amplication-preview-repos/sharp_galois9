import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DriverShiftListRelationFilter } from "../driverShift/DriverShiftListRelationFilter";

export type DriverWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  licenseNumber?: StringNullableFilter;
  driverShifts?: DriverShiftListRelationFilter;
};
