import { VehicleShiftUpdateManyWithoutVehiclesInput } from "./VehicleShiftUpdateManyWithoutVehiclesInput";

export type VehicleUpdateInput = {
  model?: string | null;
  licensePlate?: string | null;
  vehicleShifts?: VehicleShiftUpdateManyWithoutVehiclesInput;
};
