import { Injectable } from '@nestjs/common';

import { JcoinsRepository } from './repositories/jcoins.repository';

@Injectable()
export class JcoinsService {
  constructor(private readonly jcoinsRepository: JcoinsRepository) {}

  async redeemJcoin() {
    const token = await this.jcoinsRepository.createAndSaveToken();
    return token;
  }
  async getJcoinById(id: number) {
    const jcoin = await this.jcoinsRepository.getTokenById(id);
    return jcoin;
  }
  async getAllTokens() {
    const jcoin = await this.jcoinsRepository.getAllTokens();
    return jcoin;
  }
}
