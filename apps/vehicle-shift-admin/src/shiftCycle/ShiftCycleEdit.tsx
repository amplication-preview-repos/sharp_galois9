import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ShiftTitle } from "../shift/ShiftTitle";

export const ShiftCycleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <ReferenceInput source="shift.id" reference="Shift" label="Shift">
          <SelectInput optionText={ShiftTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="shifts"
          reference="Shift"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ShiftTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
