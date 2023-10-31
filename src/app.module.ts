import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { ConfigModule } from '@nestjs/config';
import { JerkbotModule } from './jerkbot/jerkbot.module';
import { JcoinsModule } from './jcoins/jcoins.module';

@Module({
  imports: [UsersModule, AuthModule, ConfigModule.forRoot({ isGlobal: true }), JerkbotModule, JcoinsModule],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AppModule {}
