/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { VehicleShiftWhereUniqueInput } from "../../vehicleShift/base/VehicleShiftWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class VehicleShiftUpdateManyWithoutVehiclesInput {
  @Field(() => [VehicleShiftWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [VehicleShiftWhereUniqueInput],
  })
  connect?: Array<VehicleShiftWhereUniqueInput>;

  @Field(() => [VehicleShiftWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [VehicleShiftWhereUniqueInput],
  })
  disconnect?: Array<VehicleShiftWhereUniqueInput>;

  @Field(() => [VehicleShiftWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [VehicleShiftWhereUniqueInput],
  })
  set?: Array<VehicleShiftWhereUniqueInput>;
}

export { VehicleShiftUpdateManyWithoutVehiclesInput as VehicleShiftUpdateManyWithoutVehiclesInput };