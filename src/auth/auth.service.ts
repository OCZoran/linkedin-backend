import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from 'src/users/schema/user.schema';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new NotFoundException('email', email);
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user._id, email: user.email };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  async registration(createUserDto: CreateUserDto): Promise<User> {
    const userToCreate = { ...createUserDto };
    const existingUser = await this.usersService.findByEmail(
      createUserDto.email,
    );

    if (existingUser) {
      throw new ConflictException();
    }

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(userToCreate.password, salt);

    userToCreate.password = hash;

    const user = await this.usersService.create(userToCreate);

    return user;
  }
}
