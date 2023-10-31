import { PartialType } from '@nestjs/mapped-types';
import { CreateJerkbotDto } from './create-jerkbot.dto';

export class UpdateJerkbotDto extends PartialType(CreateJerkbotDto) {}
