import { ShiftCycleCreateNestedManyWithoutShiftsInput } from "./ShiftCycleCreateNestedManyWithoutShiftsInput";
import { ShiftCycleWhereUniqueInput } from "../shiftCycle/ShiftCycleWhereUniqueInput";

export type ShiftCreateInput = {
  endTime?: Date | null;
  startTime?: Date | null;
  shiftCycles?: ShiftCycleCreateNestedManyWithoutShiftsInput;
  shiftCycle?: ShiftCycleWhereUniqueInput | null;
};
