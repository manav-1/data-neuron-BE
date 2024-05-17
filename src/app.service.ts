import { Injectable } from '@nestjs/common';
import { PrismaService } from './infra/prisma/prisma.service';
import type { InputData } from './dto/app.dto';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

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
