import { VehicleShift } from "../vehicleShift/VehicleShift";

export type Vehicle = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  model: string | null;
  licensePlate: string | null;
  vehicleShifts?: Array<VehicleShift>;
};
