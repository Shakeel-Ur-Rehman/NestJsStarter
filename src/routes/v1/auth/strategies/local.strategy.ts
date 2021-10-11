import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-local';
import AuthService from '../auth.service';
import User from '@v1/users/entity/user.entity';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authenticationService: AuthService) {
    super({
      usernameField: 'email',
    });
  }
  async validate(userName: string, password: string): Promise<User> {
    return this.authenticationService.login({
      email: userName,
      password,
    });
  }
}
