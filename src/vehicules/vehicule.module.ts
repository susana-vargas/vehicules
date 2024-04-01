import { Module } from "@nestjs/common";

import { VehiculeController } from "./vehicule.controller";
import { VehiculeService } from "./vehicule.service";

@Module({
  controllers: [VehiculeController],
  providers: [VehiculeService],
})
export class VehiculeModule {}