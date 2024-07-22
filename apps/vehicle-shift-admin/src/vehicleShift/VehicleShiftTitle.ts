import { VehicleShift as TVehicleShift } from "../api/vehicleShift/VehicleShift";

export const VEHICLESHIFT_TITLE_FIELD = "id";

export const VehicleShiftTitle = (record: TVehicleShift): string => {
  return record.id?.toString() || String(record.id);
};
