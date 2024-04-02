import { MigrationInterface, QueryRunner } from 'typeorm'

export class VehiculeTable1712022795082 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    `CREATE TABLE "vehicules" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "plate" int NOT NULL, "model" varchar NOT NULL,
    "brand" varchar NOT NULL)`
  }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
