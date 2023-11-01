import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JcoinsRepository } from './repositories/jcoins.repository';

@Injectable()
export class JcoinsService {
  constructor(private readonly jcoinsRepository: JcoinsRepository) {}

  async redeemJcoinByToken(userId: number, token: string) {
    try {
      const jcoin = await this.jcoinsRepository.getTokenByToken(token);

      if (jcoin && !jcoin.redeemed) {
        await this.jcoinsRepository.incrementJcoinCount(userId);
        await this.jcoinsRepository.updateTokenStatus(jcoin.id, true);
        return 'Token resgatado com sucesso';
      } else {
        throw new ConflictException('Token inválido ou já resgatado');
      }
    } catch (error) {
      throw new ConflictException(
        'Token inválido, não existente ou já resgatado',
      );
    }
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
