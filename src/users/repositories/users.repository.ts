import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.user.findMany();
  }
  async findOne(id: number) {
    return this.prismaService.user.findUnique({ where: { id } });
  }
  async create(createUserDto: any) {
    return this.prismaService.user.create({ data: createUserDto });
  }
  async update(id: number, updateUserDto: any) {
    return this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }
  async remove(id: number) {
    return this.prismaService.user.delete({ where: { id } });
  }
}
