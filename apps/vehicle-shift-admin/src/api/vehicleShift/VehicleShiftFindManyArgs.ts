import { VehicleShiftWhereInput } from "./VehicleShiftWhereInput";
import { VehicleShiftOrderByInput } from "./VehicleShiftOrderByInput";

export type VehicleShiftFindManyArgs = {
  where?: VehicleShiftWhereInput;
  orderBy?: Array<VehicleShiftOrderByInput>;
  skip?: number;
  take?: number;
};
