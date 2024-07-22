import { Vehicle } from "../vehicle/Vehicle";

export type VehicleShift = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  vehicle?: Vehicle | null;
};
