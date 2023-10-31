import { Module } from '@nestjs/common';
import { JerkbotService } from './jerkbot.service';
import { JerkbotController } from './jerkbot.controller';
import { JcoinsRepository } from 'src/jcoins/repositories/jcoins.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [JerkbotController],
  providers: [JerkbotService, JcoinsRepository, PrismaService],
})
export class JerkbotModule {}
