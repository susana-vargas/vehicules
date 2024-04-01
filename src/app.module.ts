import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { AppService } from './app.service';
import { VehiculeModule } from './vehicules/vehicule.module';

@Module({
  imports: [VehiculeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
