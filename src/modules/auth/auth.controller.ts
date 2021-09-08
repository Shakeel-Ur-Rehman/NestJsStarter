import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { LoginDto } from '../users/dto/login.dto';
import { AuthService } from './auth.service';
import { NoAuth } from './guards/no-auth.guard';

@ApiBearerAuth()
@ApiTags('Authentication')
@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @NoAuth()
  @ApiOperation({ summary: 'login user' })
  @Post('login')
  async login(@Body() authLoginDto: LoginDto) {
    return this.authService.login(authLoginDto);
  }

  @NoAuth()
  @ApiOperation({ summary: 'Forgot password' })
  @ApiResponse({ status: 200 })
  @Post('/forgotPassword/:email')
  public async create(@Param('email') email: string) {
    return this.authService.forgotPassword(email);
  }
}
