import { Injectable } from "@nestjs/common";
import { type } from "os";
import { VehiculeTypeOrmRepository } from "./typeorm/repositories/vehicle.typeorm.repository";
import { Vehicle } from "./vehicle";

export type CreateParams = {
  id: string;
  plate: number;
  model: string;
  brand: string;
}

@Injectable()
export class VehiculeService {
  constructor(private readonly vahiculeRepository: VehiculeTypeOrmRepository) {}

  getAll() {
    return this.vahiculeRepository.findAll();
  }

  create({id, plate, model, brand}: CreateParams): Promise<void> {
    const vehicule = new Vehicle(id, plate, model, brand);
    console.log('Vehículo creado correctamente');    
    return this.vahiculeRepository.save(vehicule);
  }

}
