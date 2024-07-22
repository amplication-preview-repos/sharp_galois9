import { Shift } from "../shift/Shift";

export type ShiftCycle = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  shift?: Shift | null;
  shifts?: Array<Shift>;
};
