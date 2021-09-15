import * as bcrypt from 'bcrypt';

import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '@v1/users/dto/login.dto';
import UserService from '@v1/users/user.service';

@Injectable()
export default class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<null | any> {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new NotFoundException('The item does not exist');
    }

    const passwordCompared = await bcrypt.compare(password, user.password);

    if (passwordCompared) {
      return {
        id: user.id,
        email: user.email,
        role: user.role,
      };
    }

    return null;
  }

  async login(data: LoginDto): Promise<any> {}
}
