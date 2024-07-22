import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DriverShiftTitle } from "../driverShift/DriverShiftTitle";

export const DriverEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="licenseNumber" source="licenseNumber" />
        <ReferenceArrayInput
          source="driverShifts"
          reference="DriverShift"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DriverShiftTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
