import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DriverShiftTitle } from "../driverShift/DriverShiftTitle";

export const DriverCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
