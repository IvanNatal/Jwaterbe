import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { JcoinsService } from './jcoins.service';

import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('jcoins')
export class JcoinsController {
  constructor(private readonly jcoinsService: JcoinsService) {}

  @IsPublic()
  @Post('redeem')
  async redeemJcoinByToken(@Body() body: { token: string; id: number }) {
    const result = await this.jcoinsService.redeemJcoinByToken(
      body.id,
      body.token,
    );
    return { message: result };
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
