import { Module } from '@nestjs/common';
import { JerkbotService } from './jerkbot.service';
import { JerkbotController } from './jerkbot.controller';

@Module({
  controllers: [JerkbotController],
  providers: [JerkbotService],
})
export class JerkbotModule {}
