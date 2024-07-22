import { ShiftWhereUniqueInput } from "../shift/ShiftWhereUniqueInput";
import { ShiftCreateNestedManyWithoutShiftCyclesInput } from "./ShiftCreateNestedManyWithoutShiftCyclesInput";

export type ShiftCycleCreateInput = {
  name?: string | null;
  shift?: ShiftWhereUniqueInput | null;
  shifts?: ShiftCreateNestedManyWithoutShiftCyclesInput;
};
