/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DriverService } from "../driver.service";
import { DriverCreateInput } from "./DriverCreateInput";
import { Driver } from "./Driver";
import { DriverFindManyArgs } from "./DriverFindManyArgs";
import { DriverWhereUniqueInput } from "./DriverWhereUniqueInput";
import { DriverUpdateInput } from "./DriverUpdateInput";
import { DriverShiftFindManyArgs } from "../../driverShift/base/DriverShiftFindManyArgs";
import { DriverShift } from "../../driverShift/base/DriverShift";
import { DriverShiftWhereUniqueInput } from "../../driverShift/base/DriverShiftWhereUniqueInput";

export class DriverControllerBase {
  constructor(protected readonly service: DriverService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Driver })
  async createDriver(@common.Body() data: DriverCreateInput): Promise<Driver> {
    return await this.service.createDriver({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        licenseNumber: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Driver] })
  @ApiNestedQuery(DriverFindManyArgs)
  async drivers(@common.Req() request: Request): Promise<Driver[]> {
    const args = plainToClass(DriverFindManyArgs, request.query);
    return this.service.drivers({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        licenseNumber: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Driver })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async driver(
    @common.Param() params: DriverWhereUniqueInput
  ): Promise<Driver | null> {
    const result = await this.service.driver({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        licenseNumber: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Driver })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDriver(
    @common.Param() params: DriverWhereUniqueInput,
    @common.Body() data: DriverUpdateInput
  ): Promise<Driver | null> {
    try {
      return await this.service.updateDriver({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          licenseNumber: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Driver })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDriver(
    @common.Param() params: DriverWhereUniqueInput
  ): Promise<Driver | null> {
    try {
      return await this.service.deleteDriver({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          licenseNumber: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/driverShifts")
  @ApiNestedQuery(DriverShiftFindManyArgs)
  async findDriverShifts(
    @common.Req() request: Request,
    @common.Param() params: DriverWhereUniqueInput
  ): Promise<DriverShift[]> {
    const query = plainToClass(DriverShiftFindManyArgs, request.query);
    const results = await this.service.findDriverShifts(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        driver: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/driverShifts")
  async connectDriverShifts(
    @common.Param() params: DriverWhereUniqueInput,
    @common.Body() body: DriverShiftWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      driverShifts: {
        connect: body,
      },
    };
    await this.service.updateDriver({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/driverShifts")
  async updateDriverShifts(
    @common.Param() params: DriverWhereUniqueInput,
    @common.Body() body: DriverShiftWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      driverShifts: {
        set: body,
      },
    };
    await this.service.updateDriver({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/driverShifts")
  async disconnectDriverShifts(
    @common.Param() params: DriverWhereUniqueInput,
    @common.Body() body: DriverShiftWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      driverShifts: {
        disconnect: body,
      },
    };
    await this.service.updateDriver({
      where: params,
      data,
      select: { id: true },
    });
  }
}