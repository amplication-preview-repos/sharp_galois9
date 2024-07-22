import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ShiftCycleListRelationFilter } from "../shiftCycle/ShiftCycleListRelationFilter";
import { ShiftCycleWhereUniqueInput } from "../shiftCycle/ShiftCycleWhereUniqueInput";

export type ShiftWhereInput = {
  id?: StringFilter;
  endTime?: DateTimeNullableFilter;
  startTime?: DateTimeNullableFilter;
  shiftCycles?: ShiftCycleListRelationFilter;
  shiftCycle?: ShiftCycleWhereUniqueInput;
};
