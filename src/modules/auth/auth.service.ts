import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MailerService } from 'src/mailer/mailer.service';
import { userMailer } from 'src/mailer/mailers/user.mailer';
import { LoginDto } from '../users/dto/login.dto';
import { User } from '../users/entity/user.entity';
import { UserService } from '../users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(authLoginDto: LoginDto) {
    const user = await this.validateUser(authLoginDto);

    const payload = {
      userId: user.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(authLoginDto: LoginDto): Promise<User> {
    const { email, password } = authLoginDto;
    const user = await this.usersService.findByEmail(email);
    if (!(await user?.validatePassword(password))) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async forgotPassword(email: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user) {
      const token = await this.jwtService.sign({ id: user.id });
      const updated_user = await this.usersService.updateTokens(user, {
        resetPasswordToken: token,
      });
      userMailer.forgotPassword(updated_user);
    }
    return { message: 'successfully sent an email' };
  }
}
