import { Controller, Get, Post, Param } from '@nestjs/common';
import { JcoinsService } from './jcoins.service';
import { CreateJcoinDto } from './dto/create-jcoin.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('jcoins')
export class JcoinsController {
  constructor(private readonly jcoinsService: JcoinsService) {}
  @IsPublic()
  @Post()
  async generateToken() {
    return this.jcoinsService.redeemJcoin();
  }
  @IsPublic()
  @Get(':id')
  async getJcoinById(@Param('id') id: number) {
    return this.jcoinsService.getJcoinById(id);
  }
  @IsPublic()
  @Get()
  async getAllTokens() {
    return this.jcoinsService.getAllTokens();
  }
}
