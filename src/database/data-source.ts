import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: '123456',
  database: 'vehicule_api',
  migrations: [`src/database/migrations/*.js`],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
// nueva configuración para migraciones
// migrations: [`${__dirname}/migrations/{*.ts,*.js}`],
// acceden a las migraciones tranpiladas a "js" y a las "ts"