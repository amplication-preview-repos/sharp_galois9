import { Driver } from "../driver/Driver";

export type DriverShift = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  driver?: Driver | null;
};
