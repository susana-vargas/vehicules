import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { DatabaseModule } from '../database/database.module';
import { VehiculeController } from "./vehicule.controller";
import { VehiculeEntity } from "./typeorm/entites/vehicule.entity";
import { VehiculeService } from "./vehicule.service";
import { VehiculeTypeOrmRepository } from "./typeorm/repositories/vehicle.typeorm.repository";

@Module({
  controllers: [VehiculeController],
  providers: [
    VehiculeService,
    { provide: VehiculeTypeOrmRepository,  useClass: VehiculeTypeOrmRepository},
  ],
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([VehiculeEntity])
  ],
})
export class VehiculeModule {}
