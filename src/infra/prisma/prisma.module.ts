/**
 * The `PrismaModule` class is responsible for providing and exporting the `PrismaService`.
 * It is used to configure the Prisma ORM service for the application.
 */
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
