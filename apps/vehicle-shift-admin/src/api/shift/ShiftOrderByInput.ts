import { SortOrder } from "../../util/SortOrder";

export type ShiftOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  endTime?: SortOrder;
  startTime?: SortOrder;
  shiftCycleId?: SortOrder;
};
