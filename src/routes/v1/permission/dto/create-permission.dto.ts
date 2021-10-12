import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { PermissionAction } from 'src/casl/casl-ability.factory';

export class CreatePermissionDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  action: PermissionAction;

  @ApiProperty()
  @IsNotEmpty()
  subject: string;
}
