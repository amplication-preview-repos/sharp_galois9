import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { VehicleShiftTitle } from "../vehicleShift/VehicleShiftTitle";

export const VehicleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
