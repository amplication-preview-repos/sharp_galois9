import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { VehicleShiftTitle } from "../vehicleShift/VehicleShiftTitle";

export const VehicleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="model" source="model" />
        <TextInput label="licensePlate" source="licensePlate" />
        <ReferenceArrayInput
          source="vehicleShifts"
          reference="VehicleShift"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VehicleShiftTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
