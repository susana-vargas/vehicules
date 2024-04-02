import { Module } from "@nestjs/common";

import { VehiculeController } from "./vehicule.controller";
import { VehiculeService } from "./vehicule.service";
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [VehiculeController],
  providers: [VehiculeService],
  imports: [DatabaseModule],
})
export class VehiculeModule {}