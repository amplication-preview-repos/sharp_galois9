import { ShiftCycle } from "../shiftCycle/ShiftCycle";

export type Shift = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  endTime: Date | null;
  startTime: Date | null;
  shiftCycles?: Array<ShiftCycle>;
  shiftCycle?: ShiftCycle | null;
};
