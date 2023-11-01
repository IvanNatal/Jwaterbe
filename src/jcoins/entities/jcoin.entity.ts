import { Jcoin } from '@prisma/client';
export class JcoinEntity implements Jcoin {
  id: number;
  token: string;
  value: number;
  redeemed: boolean;
  redeemedById: number;
  redeenedAt: Date;
}
