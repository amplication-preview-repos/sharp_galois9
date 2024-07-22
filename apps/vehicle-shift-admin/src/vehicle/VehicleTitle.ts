import { Vehicle as TVehicle } from "../api/vehicle/Vehicle";

export const VEHICLE_TITLE_FIELD = "model";

export const VehicleTitle = (record: TVehicle): string => {
  return record.model?.toString() || String(record.id);
};
