import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VehicleList } from "./vehicle/VehicleList";
import { VehicleCreate } from "./vehicle/VehicleCreate";
import { VehicleEdit } from "./vehicle/VehicleEdit";
import { VehicleShow } from "./vehicle/VehicleShow";
import { ShiftList } from "./shift/ShiftList";
import { ShiftCreate } from "./shift/ShiftCreate";
import { ShiftEdit } from "./shift/ShiftEdit";
import { ShiftShow } from "./shift/ShiftShow";
import { DriverList } from "./driver/DriverList";
import { DriverCreate } from "./driver/DriverCreate";
import { DriverEdit } from "./driver/DriverEdit";
import { DriverShow } from "./driver/DriverShow";
import { VehicleShiftList } from "./vehicleShift/VehicleShiftList";
import { VehicleShiftCreate } from "./vehicleShift/VehicleShiftCreate";
import { VehicleShiftEdit } from "./vehicleShift/VehicleShiftEdit";
import { VehicleShiftShow } from "./vehicleShift/VehicleShiftShow";
import { DriverShiftList } from "./driverShift/DriverShiftList";
import { DriverShiftCreate } from "./driverShift/DriverShiftCreate";
import { DriverShiftEdit } from "./driverShift/DriverShiftEdit";
import { DriverShiftShow } from "./driverShift/DriverShiftShow";
import { ShiftCycleList } from "./shiftCycle/ShiftCycleList";
import { ShiftCycleCreate } from "./shiftCycle/ShiftCycleCreate";
import { ShiftCycleEdit } from "./shiftCycle/ShiftCycleEdit";
import { ShiftCycleShow } from "./shiftCycle/ShiftCycleShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"VehicleShift"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Vehicle"
          list={VehicleList}
          edit={VehicleEdit}
          create={VehicleCreate}
          show={VehicleShow}
        />
        <Resource
          name="Shift"
          list={ShiftList}
          edit={ShiftEdit}
          create={ShiftCreate}
          show={ShiftShow}
        />
        <Resource
          name="Driver"
          list={DriverList}
          edit={DriverEdit}
          create={DriverCreate}
          show={DriverShow}
        />
        <Resource
          name="VehicleShift"
          list={VehicleShiftList}
          edit={VehicleShiftEdit}
          create={VehicleShiftCreate}
          show={VehicleShiftShow}
        />
        <Resource
          name="DriverShift"
          list={DriverShiftList}
          edit={DriverShiftEdit}
          create={DriverShiftCreate}
          show={DriverShiftShow}
        />
        <Resource
          name="ShiftCycle"
          list={ShiftCycleList}
          edit={ShiftCycleEdit}
          create={ShiftCycleCreate}
          show={ShiftCycleShow}
        />
      </Admin>
    </div>
  );
};

export default App;
