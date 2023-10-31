import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { JerkbotService } from './jerkbot.service';
import { CreateJerkbotDto } from './dto/create-jerkbot.dto';
import { UpdateJerkbotDto } from './dto/update-jerkbot.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('jerkbot')
export class JerkbotController {
  constructor(private readonly jerkbotService: JerkbotService) {}
}
