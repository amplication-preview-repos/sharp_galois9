import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SHIFTCYCLE_TITLE_FIELD } from "./ShiftCycleTitle";
import { SHIFT_TITLE_FIELD } from "../shift/ShiftTitle";

export const ShiftCycleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <ReferenceField label="Shift" source="shift.id" reference="Shift">
          <TextField source={SHIFT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Shift"
          target="shiftCycleId"
          label="Shifts"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="endTime" source="endTime" />
            <TextField label="startTime" source="startTime" />
            <ReferenceField
              label="ShiftCycle"
              source="shiftcycle.id"
              reference="ShiftCycle"
            >
              <TextField source={SHIFTCYCLE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
