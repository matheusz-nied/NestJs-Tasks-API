import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UsersRepository)
        private usersRepository: UsersRepository,
    ) {}

    async signUp(authCredentialsDto: AuthCredentialsDto) {
        this.usersRepository.createUser(authCredentialsDto);
    }
}
