import { DriverShift } from "../driverShift/DriverShift";

export type Driver = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  licenseNumber: string | null;
  driverShifts?: Array<DriverShift>;
};
