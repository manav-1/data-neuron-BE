import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/**
 * Service class that extends the PrismaClient and implements the OnModuleInit interface.
 * Provides methods to connect to the Prisma database and enable shutdown hooks for the Nest application.
 */
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  /**
   * Lifecycle hook method that is called when the module is initialized.
   * Connects to the Prisma database.
   */
  async onModuleInit() {
    await this.$connect();
  }

  /**
   * Enables shutdown hooks for the Nest application.
   * Closes the application when the 'beforeExit' event is triggered.
   * @param app - The Nest application instance.
   */
  async enableShutdownHooks(app: INestApplication) {
    process.on('beforeExit', async () => {
      await app.close();
    });
  }
}
