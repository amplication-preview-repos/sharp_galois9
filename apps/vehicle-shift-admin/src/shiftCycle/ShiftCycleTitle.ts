import { ShiftCycle as TShiftCycle } from "../api/shiftCycle/ShiftCycle";

export const SHIFTCYCLE_TITLE_FIELD = "name";

export const ShiftCycleTitle = (record: TShiftCycle): string => {
  return record.name?.toString() || String(record.id);
};
