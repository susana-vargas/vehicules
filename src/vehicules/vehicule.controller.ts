import { Body, Controller, Get, Post } from "@nestjs/common";

import { CreateParams, VehiculeService } from "./vehicule.service";

@Controller('vehicule')
export class VehiculeController {
  constructor(private readonly vehiculeService: VehiculeService) {}

  @Get()
  getAll() {
    return this.vehiculeService.getAll();
  }

  @Post()
  createVehicule(@Body() createParams: CreateParams) {
   this.vehiculeService.create(createParams);
  }
}
