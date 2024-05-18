/**
 * The main module of the application.
 *
 * This module is responsible for importing and configuring other modules, controllers, and services.
 * It imports the `PrismaModule` to provide access to the Prisma ORM.
 * It also registers the `AppController` as the main controller for the application and the `AppService` as the main service.
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './infra/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
