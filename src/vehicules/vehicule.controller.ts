import { Body, Controller, Get, Param, Post } from "@nestjs/common";

import { CreateParams, VehiculeService } from "./vehicule.service";

@Controller('vehicule')
export class VehiculeController {
  constructor(private readonly vehiculeService: VehiculeService) {}

  @Get()
  getAll() {
    return this.vehiculeService.getAll();
  }

  @Get(':id')
  getId(@Param('id') id: string) {
    return this.vehiculeService.getId(id);
  }

  @Post()
  createVehicule(@Body() createParams: CreateParams) {
   this.vehiculeService.create(createParams);
  }
}
