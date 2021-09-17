import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { userMailer } from 'src/mailer/mailers/user.mailer';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import User from './entity/user.entity';

@Injectable()
class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepo.find();
  }
  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const userObject = User.create(createUserDto);
      const user = await userObject.save();
      user.registrationToken = await this.jwtService.sign({
        email: user.email,
        id: user.id,
      });
      await this.userRepo.save(user);
      userMailer.registerRequest(user);
      return user;
    } catch (error: any) {
      let message = error.message.includes('duplicate')
        ? 'Email Already Registred'
        : 'There is some error creating user';
      throw new HttpException(message, HttpStatus.BAD_REQUEST);
    }
  }

  async showById(id: number): Promise<User> {
    const user = await this.userRepo.findOne(id);
    if (!user) {
      throw new HttpException('user not found', HttpStatus.BAD_REQUEST);
    }

    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    return user;
  }

  async update(id: number, data: any): Promise<User> {
    const user: any = await this.showById(id);
    Object.keys(data).forEach((key) => {
      user[`${key}`] = data[`${key}`];
    });
    return this.userRepo.save(user);
  }

  async updateTokens(user: any, data: any): Promise<User> {
    Object.keys(data).forEach((key) => {
      user[`${key}`] = data[`${key}`];
    });
    return this.userRepo.save(user);
  }
}

export default UserService;
