import * as bcrypt from 'bcrypt';

import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '@v1/users/dto/login.dto';
import UserService from '@v1/users/user.service';
import { userMailer } from 'src/mailer/mailers/user.mailer';
import { resetPasswordDto } from '@v1/users/dto/resetPassword.dto';

@Injectable()
export default class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(@Body() body: LoginDto): Promise<any> {
    const user = await this.usersService.findByEmail(body.email);
    if (user && user.isActive) {
      await this.verifyPassword(body.password, user.password);
      delete user.password;
      return {
        user,
        token: await this.jwtService.sign({
          email: user.email,
          id: user.id,
        }),
        type: user.role,
      };
    } else {
      throw new HttpException(
        'Invalid email or password',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async forgotPassword(email: string) {
    const user = await this.usersService.findByEmail(email);
    if (user && user.isActive) {
      const resetPasswordToken = await this.jwtService.sign(user.id.toString());
      this.usersService.updateTokens(user, { resetPasswordToken });
      userMailer.forgotPassword(user);
    }
    return { message: 'Forgot password link sent successfully' };
  }

  async activateUser(body: any) {
    const user = await this.verifyToken(body.token);
    if (body.token == user.registrationToken) {
      delete body.token;
      return this.usersService.update(user.id, {
        isActive: true,
        registrationToken: null,
      });
    } else {
      throw new HttpException('invald token provided', HttpStatus.BAD_REQUEST);
    }
  }

  async resetPassword(data: resetPasswordDto) {
    const user = await this.verifyToken(data.token);
    await this.usersService.update(user.id, {
      password: await bcrypt.hash(data.password, 8),
    });
    return { message: 'Password Updated Successfully' };
  }

  private async verifyPassword(
    plainTextPassword: string,
    hashedPassword: string,
  ) {
    const isPasswordMatching = await bcrypt.compare(
      plainTextPassword,
      hashedPassword,
    );
    if (!isPasswordMatching) {
      throw new HttpException(
        'Invalid username or password ',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async verifyToken(token: string) {
    try {
      const res = await this.jwtService.verifyAsync(token);
      const user = await this.usersService.showById(res.id);
      return user;
    } catch (error) {
      throw new HttpException(
        { message: 'Invalid or expired token' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
