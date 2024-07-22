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
import { SHIFTCYCLE_TITLE_FIELD } from "../shiftCycle/ShiftCycleTitle";

export const ShiftList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Shifts"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
