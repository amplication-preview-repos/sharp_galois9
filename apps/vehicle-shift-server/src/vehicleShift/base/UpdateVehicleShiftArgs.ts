/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VehicleShiftWhereUniqueInput } from "./VehicleShiftWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { VehicleShiftUpdateInput } from "./VehicleShiftUpdateInput";

@ArgsType()
class UpdateVehicleShiftArgs {
  @ApiProperty({
    required: true,
    type: () => VehicleShiftWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VehicleShiftWhereUniqueInput)
  @Field(() => VehicleShiftWhereUniqueInput, { nullable: false })
  where!: VehicleShiftWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => VehicleShiftUpdateInput,
  })
  @ValidateNested()
  @Type(() => VehicleShiftUpdateInput)
  @Field(() => VehicleShiftUpdateInput, { nullable: false })
  data!: VehicleShiftUpdateInput;
}

export { UpdateVehicleShiftArgs as UpdateVehicleShiftArgs };