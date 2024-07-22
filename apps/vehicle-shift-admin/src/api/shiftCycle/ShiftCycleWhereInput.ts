import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ShiftWhereUniqueInput } from "../shift/ShiftWhereUniqueInput";
import { ShiftListRelationFilter } from "../shift/ShiftListRelationFilter";

export type ShiftCycleWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  shift?: ShiftWhereUniqueInput;
  shifts?: ShiftListRelationFilter;
};
