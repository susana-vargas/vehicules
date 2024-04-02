import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class VehiculeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({type: 'int'})
  plate: number;

  @Column({type: 'varchar'})
  model: string;

  @Column({type: 'varchar'})
  brand: string;
}
