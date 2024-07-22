import { StringFilter } from "../../util/StringFilter";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";

export type DriverShiftWhereInput = {
  id?: StringFilter;
  driver?: DriverWhereUniqueInput;
};
