import { User } from '@prisma/client';
export class UserEntity implements User {
  id: number;
  email: string;
  nickname: string;
  password: string;
  jcoinCount: number;
}
