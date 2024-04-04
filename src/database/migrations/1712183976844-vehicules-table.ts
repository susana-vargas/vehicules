import { MigrationInterface, QueryRunner } from "typeorm";

export class VehiculesTable1712183976844 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "vehicules" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "plate" int NOT NULL,
        "model" varchar NOT NULL,
        "brand" varchar NOT NULL,
        PRIMARY KEY ("id")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE "vehicules"
    `);
  }

}
