import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as cypto from 'crypto';

@Injectable()
export class JcoinsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createAndSaveToken() {
    const token = cypto.randomBytes(32).toString('hex');

    const jcoin = await this.prismaService.jcoin.create({
      data: {
        token,
        value: 1,
      },
    });
    return jcoin;
  }
  async getTokenById(id: number) {
    const jcoin = await this.prismaService.jcoin.findUnique({
      where: {
        id,
      },
    });
    return jcoin;
  }
  async getAllTokens() {
    const jcoin = await this.prismaService.jcoin.findMany();
    return jcoin;
  }
}
