import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UnauthorizedError } from 'src/common/errors/types/unauthorized.error';
import { UserEntity } from 'src/users/entities/user.entity';
import { UserPayload } from './models/UserPayload';
import { UserToken } from './models/UserToken';
import { UsersRepository } from 'src/users/repositories/users.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UsersRepository,
  ) {}

  async login(user: UserEntity): Promise<UserToken> {
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.nickname,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<UserEntity> {
    const user = await this.userRepository.findByEmail(email);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new UnauthorizedError(
      'O endereço de email ou a senha fornecidos estão incorretos.',
    );
  }
}
