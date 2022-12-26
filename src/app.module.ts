import { Module } from '@nestjs/common';

import { AppController } from './infra/app.controller';
import { PrimaService } from './infra/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrimaService],
})
export class AppModule {}
