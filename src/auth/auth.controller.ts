import { Body, Controller, ValidationPipe } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { Post } from '@nestjs/common';
import { loginDto } from 'src/auth/dto/login.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body(new ValidationPipe()) loginDto: loginDto) {
    return this.authService.login(loginDto.email, loginDto.password);
  }

  @Post('registration')
  async registration(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return this.authService.registration(createUserDto);
  }
}
