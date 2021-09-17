import AuthBearer from '@decorators/auth-bearer.decorator';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from '@v1/users/dto/createUser.dto';
import { resetPasswordDto } from '@v1/users/dto/resetPassword.dto';
import UserService from '@v1/users/user.service';
import { LoginDto } from '../users/dto/login.dto';
import AuthService from './auth.service';
import { NoAuth } from './guards/no-auth.guard';

@ApiBearerAuth()
@ApiTags('Authentication')
@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userSerivce: UserService,
  ) {}

  @NoAuth()
  @ApiOperation({ summary: 'login user' })
  @Post('login')
  async login(@Body() authLoginDto: LoginDto) {
    return this.authService.login(authLoginDto);
  }

  @NoAuth()
  @ApiOperation({ summary: 'signup user' })
  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    return this.userSerivce.create(createUserDto);
  }

  @NoAuth()
  @ApiOperation({ summary: 'Forgot password' })
  @ApiResponse({ status: 200 })
  @Post('/forgotPassword/:email')
  public async create(@Param('email') email: string) {
    return this.authService.forgotPassword(email);
  }

  @NoAuth()
  @Get('/activate-user/:token')
  async activateUser(@Param('token') token: string) {
    return this.authService.activateUser({ token });
  }

  @NoAuth()
  @Post('reset_password')
  async resetPassword(@Body() body: resetPasswordDto) {
    return this.authService.resetPassword(body);
  }
}
