import { IsNotEmpty, IsString } from 'class-validator';

export class ForgetPasswordDto {
  @IsNotEmpty()
  @IsString()
  email: string;

}
