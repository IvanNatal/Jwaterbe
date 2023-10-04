import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.user.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  async create(createUserDto: CreateUserDto) {
    try {
      return await this.prismaService.user.create({ data: createUserDto });
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
      throw new InternalServerErrorException('Erro ao atualizar usuário');
    }
  }

  async remove(id: number) {
    try {
      return await this.prismaService.user.delete({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException('Erro ao deletar usuário');
    }
  }
  async findByEmail(email: string) {
    return this.prismaService.user.findUnique({ where: { email } });
  }
}
