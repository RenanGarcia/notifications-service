import { Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrimaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrimaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create() {
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: 'Você tem uma nova notificação',
        category: 'social',
        recipientId: randomUUID(),
      },
    });
  }
}
