import { IsString, IsEmail, Matches, IsNotEmpty } from 'class-validator';
import { RegexHelper } from '../helpers/expression.helpers';
import { ErrorMessages } from '../helpers/errors.helpers';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  nickname: string;
  @Matches(RegexHelper.passwordRegex, {
    message: ErrorMessages.VALID_PASS_FORMAT,
  })
  @IsNotEmpty()
  password: string;
}
