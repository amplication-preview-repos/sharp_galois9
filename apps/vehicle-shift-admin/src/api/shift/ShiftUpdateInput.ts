import { ShiftCycleUpdateManyWithoutShiftsInput } from "./ShiftCycleUpdateManyWithoutShiftsInput";
import { ShiftCycleWhereUniqueInput } from "../shiftCycle/ShiftCycleWhereUniqueInput";

export type ShiftUpdateInput = {
  endTime?: Date | null;
  startTime?: Date | null;
  shiftCycles?: ShiftCycleUpdateManyWithoutShiftsInput;
  shiftCycle?: ShiftCycleWhereUniqueInput | null;
};
