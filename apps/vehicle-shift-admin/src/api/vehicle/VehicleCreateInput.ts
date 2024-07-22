import { VehicleShiftCreateNestedManyWithoutVehiclesInput } from "./VehicleShiftCreateNestedManyWithoutVehiclesInput";

export type VehicleCreateInput = {
  model?: string | null;
  licensePlate?: string | null;
  vehicleShifts?: VehicleShiftCreateNestedManyWithoutVehiclesInput;
};
