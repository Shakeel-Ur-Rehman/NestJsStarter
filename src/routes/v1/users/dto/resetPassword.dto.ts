import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class resetPasswordDto {
  @ApiProperty()
  @IsString()
  token: string;

  @ApiProperty()
  @IsString()
  password: string;
}
