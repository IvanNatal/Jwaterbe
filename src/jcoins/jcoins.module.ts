import { Module } from '@nestjs/common';
import { JcoinsService } from './jcoins.service';
import { JcoinsController } from './jcoins.controller';
import { JcoinsRepository } from './repositories/jcoins.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [JcoinsController],
  providers: [JcoinsRepository, JcoinsService, PrismaService],
})
export class JcoinsModule {}
