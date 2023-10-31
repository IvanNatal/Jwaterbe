import { PartialType } from '@nestjs/mapped-types';
import { CreateJcoinDto } from './create-jcoin.dto';

export class UpdateJcoinDto extends PartialType(CreateJcoinDto) {}
