import { Module } from '@nestjs/common';
import { NotificationRepository } from '../../application/repositories/notification-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNoticationsRepository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaNoticationsRepository,
    },
  ],
  exports: [NotificationRepository],
})
export class DatabaseModule {}
