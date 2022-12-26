import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrimaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrimaService],
})
export class AppModule {}
