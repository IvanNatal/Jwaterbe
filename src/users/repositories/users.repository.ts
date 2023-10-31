import {
  BadRequestException,
  ConflictException,
  HttpException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prismaService.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async create(createUserDto: CreateUserDto) {
    try {
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      return await this.prismaService.user.create({
        data: {
          nickname: createUserDto.nickname,
          email: createUserDto.email,
          password: hashedPassword,
        },
      });
    } catch (error) {
      throw new ConflictException();
    }
  }

  async update(id: number, updateUserDto: any) {
    try {
      return await this.prismaService.user.update({
        where: { id },
        data: updateUserDto,
      });
    } catch (error) {
      throw new BadRequestException('Erro ao atualizar usuário');
    }
  }

  async remove(id: number) {
    try {
      await this.prismaService.user.delete({ where: { id } });
      return 'usuário deletado!';
    } catch (error) {
      throw new InternalServerErrorException('Erro ao deletar usuário');
    }
  }
  async findByEmail(email: string) {
    return this.prismaService.user.findUnique({ where: { email } });
  }
}
