import { DriverShiftCreateNestedManyWithoutDriversInput } from "./DriverShiftCreateNestedManyWithoutDriversInput";

export type DriverCreateInput = {
  name?: string | null;
  licenseNumber?: string | null;
  driverShifts?: DriverShiftCreateNestedManyWithoutDriversInput;
};
