import { Injectable } from '@nestjs/common';
import { PrismaService } from './infra/prisma/prisma.service';
import type { InputData } from './dto/app.dto';

/**
 * Service responsible for handling application logic.
 */
@Injectable()
export class AppService {
  /**
   * Creates an instance of `AppService`.
   * @param prisma - The Prisma service.
   */
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Retrieves the count of operations for a given instance ID.
   * If the count does not exist, it creates a new count with initial values.
   * @param id - The instance ID.
   * @returns The operation count.
   */
  async getCount(id: string) {
    let count = await this.prisma.operationCount.findUnique({
      where: {
        instanceId: id,
      },
    });
    if (!count) {
      count = await this.prisma.operationCount.create({
        data: { addCount: 0, updateCount: 0, instanceId: id },
      });
    }
    return count;
  }

  /**
   * Creates a new input entry.
   * Increments the addCount in the operation count for the corresponding instance ID.
   * @param data - The input data.
   * @returns A success message.
   * @throws An error if the entry creation fails.
   */
  async createInput(data: InputData) {
    try {
      await this.prisma.entry.create({
        data,
      });
      await this.prisma.operationCount.updateMany({
        where: {
          instanceId: data.instanceId,
        },
        data: { addCount: { increment: 1 } },
      });
      return { message: 'Entry added successfully' };
    } catch (error) {
      console.log(error);
      throw { error: 'Failed to add entry' };
    }
  }

  /**
   * Updates an existing input entry.
   * Increments the updateCount in the operation count for the corresponding instance ID.
   * @param id - The ID of the entry to update.
   * @param data - The updated input data.
   * @returns A success message.
   * @throws An error if the entry update fails or no entry is found.
   */
  async updateInput(id: string, data: InputData) {
    try {
      const latestEntry = await this.prisma.entry.findFirst({
        where: { instanceId: id },
        orderBy: {
          createdAt: 'desc',
        },
      });
      if (!latestEntry) {
        throw { error: 'No entry found' };
      }
      await this.prisma.entry.update({
        where: { id: latestEntry.id },
        data,
      });
      await this.prisma.operationCount.updateMany({
        where: {
          instanceId: data.instanceId,
        },
        data: { updateCount: { increment: 1 } },
      });
      return { message: 'Entry updated successfully' };
    } catch (error) {
      console.log(error);
      throw { error: 'Failed to update entry' };
    }
  }
}
