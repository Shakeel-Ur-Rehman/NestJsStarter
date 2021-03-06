import { Roles } from '@decorators/roles.decorator';
import RolesGuard from '@guards/roles.guard';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/createUser.dto';
import { UserRolesEnum } from './roles/user.roles';
import UserService from './user.service';

@ApiBearerAuth()
@ApiTags('User')
@Controller('api/users')
class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get('/:skip/:take')
  index(@Param('skip') skip: number, @Param('take') take: number) {
    return this.usersService.findAll(skip, take);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Roles(UserRolesEnum.USER)
  @Get(':id')
  show(@Param('id') id: string) {
    return this.usersService.showById(+id);
  }
}

export default UserController;
