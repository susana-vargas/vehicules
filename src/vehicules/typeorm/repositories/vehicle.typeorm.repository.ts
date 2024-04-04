import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Vehicle } from "src/vehicules/vehicle";
import { VehiculeEntity } from "../entites/vehicule.entity";

export class VehiculeTypeOrmRepository {
  constructor(
    @InjectRepository(VehiculeEntity)
    private readonly repository: Repository<VehiculeEntity>
  ) {}

  async save(vehicle: Vehicle): Promise<void> {
    const entity = new VehiculeEntity();
    entity.id = vehicle.getId();
    entity.plate = vehicle.getPlate();
    entity.model = vehicle.getModel();
    entity.brand = vehicle.getBrand();
    await this.repository.save(entity);
    return void 0;
  }

  async findAll() {
    return this.repository.query('select * from vehicules')
  }
}
