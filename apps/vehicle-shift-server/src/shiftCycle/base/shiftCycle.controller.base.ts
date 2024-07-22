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
import { ShiftCycleService } from "../shiftCycle.service";
import { ShiftCycleCreateInput } from "./ShiftCycleCreateInput";
import { ShiftCycle } from "./ShiftCycle";
import { ShiftCycleFindManyArgs } from "./ShiftCycleFindManyArgs";
import { ShiftCycleWhereUniqueInput } from "./ShiftCycleWhereUniqueInput";
import { ShiftCycleUpdateInput } from "./ShiftCycleUpdateInput";
import { ShiftFindManyArgs } from "../../shift/base/ShiftFindManyArgs";
import { Shift } from "../../shift/base/Shift";
import { ShiftWhereUniqueInput } from "../../shift/base/ShiftWhereUniqueInput";

export class ShiftCycleControllerBase {
  constructor(protected readonly service: ShiftCycleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ShiftCycle })
  async createShiftCycle(
    @common.Body() data: ShiftCycleCreateInput
  ): Promise<ShiftCycle> {
    return await this.service.createShiftCycle({
      data: {
        ...data,

        shift: data.shift
          ? {
              connect: data.shift,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,

        shift: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ShiftCycle] })
  @ApiNestedQuery(ShiftCycleFindManyArgs)
  async shiftCycles(@common.Req() request: Request): Promise<ShiftCycle[]> {
    const args = plainToClass(ShiftCycleFindManyArgs, request.query);
    return this.service.shiftCycles({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,

        shift: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ShiftCycle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async shiftCycle(
    @common.Param() params: ShiftCycleWhereUniqueInput
  ): Promise<ShiftCycle | null> {
    const result = await this.service.shiftCycle({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,

        shift: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: ShiftCycle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateShiftCycle(
    @common.Param() params: ShiftCycleWhereUniqueInput,
    @common.Body() data: ShiftCycleUpdateInput
  ): Promise<ShiftCycle | null> {
    try {
      return await this.service.updateShiftCycle({
        where: params,
        data: {
          ...data,

          shift: data.shift
            ? {
                connect: data.shift,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,

          shift: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: ShiftCycle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteShiftCycle(
    @common.Param() params: ShiftCycleWhereUniqueInput
  ): Promise<ShiftCycle | null> {
    try {
      return await this.service.deleteShiftCycle({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,

          shift: {
            select: {
              id: true,
            },
          },
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

  @common.Get("/:id/shifts")
  @ApiNestedQuery(ShiftFindManyArgs)
  async findShifts(
    @common.Req() request: Request,
    @common.Param() params: ShiftCycleWhereUniqueInput
  ): Promise<Shift[]> {
    const query = plainToClass(ShiftFindManyArgs, request.query);
    const results = await this.service.findShifts(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        endTime: true,
        startTime: true,

        shiftCycle: {
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

  @common.Post("/:id/shifts")
  async connectShifts(
    @common.Param() params: ShiftCycleWhereUniqueInput,
    @common.Body() body: ShiftWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      shifts: {
        connect: body,
      },
    };
    await this.service.updateShiftCycle({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/shifts")
  async updateShifts(
    @common.Param() params: ShiftCycleWhereUniqueInput,
    @common.Body() body: ShiftWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      shifts: {
        set: body,
      },
    };
    await this.service.updateShiftCycle({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/shifts")
  async disconnectShifts(
    @common.Param() params: ShiftCycleWhereUniqueInput,
    @common.Body() body: ShiftWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      shifts: {
        disconnect: body,
      },
    };
    await this.service.updateShiftCycle({
      where: params,
      data,
      select: { id: true },
    });
  }
}