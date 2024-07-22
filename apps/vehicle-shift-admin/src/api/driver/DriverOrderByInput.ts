import { SortOrder } from "../../util/SortOrder";

export type DriverOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  licenseNumber?: SortOrder;
};
