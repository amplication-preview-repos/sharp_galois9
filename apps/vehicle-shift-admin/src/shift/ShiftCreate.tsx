import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ShiftCycleTitle } from "../shiftCycle/ShiftCycleTitle";

export const ShiftCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="endTime" source="endTime" />
        <DateTimeInput label="startTime" source="startTime" />
        <ReferenceArrayInput
          source="shiftCycles"
          reference="ShiftCycle"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ShiftCycleTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="shiftCycle.id"
          reference="ShiftCycle"
          label="ShiftCycle"
        >
          <SelectInput optionText={ShiftCycleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
