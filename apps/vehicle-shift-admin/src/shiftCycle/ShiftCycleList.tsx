import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SHIFT_TITLE_FIELD } from "../shift/ShiftTitle";

export const ShiftCycleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ShiftCycles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <ReferenceField label="Shift" source="shift.id" reference="Shift">
          <TextField source={SHIFT_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
