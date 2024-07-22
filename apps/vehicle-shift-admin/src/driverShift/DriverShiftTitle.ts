import { DriverShift as TDriverShift } from "../api/driverShift/DriverShift";

export const DRIVERSHIFT_TITLE_FIELD = "id";

export const DriverShiftTitle = (record: TDriverShift): string => {
  return record.id?.toString() || String(record.id);
};
