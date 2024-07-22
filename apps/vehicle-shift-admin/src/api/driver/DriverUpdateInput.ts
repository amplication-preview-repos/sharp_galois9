import { DriverShiftUpdateManyWithoutDriversInput } from "./DriverShiftUpdateManyWithoutDriversInput";

export type DriverUpdateInput = {
  name?: string | null;
  licenseNumber?: string | null;
  driverShifts?: DriverShiftUpdateManyWithoutDriversInput;
};
