import { ShiftWhereUniqueInput } from "../shift/ShiftWhereUniqueInput";
import { ShiftUpdateManyWithoutShiftCyclesInput } from "./ShiftUpdateManyWithoutShiftCyclesInput";

export type ShiftCycleUpdateInput = {
  name?: string | null;
  shift?: ShiftWhereUniqueInput | null;
  shifts?: ShiftUpdateManyWithoutShiftCyclesInput;
};
