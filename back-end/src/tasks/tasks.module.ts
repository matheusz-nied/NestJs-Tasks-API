import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskRepository } from './tasks.repository';
import { AuthModule } from '../auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        TypeOrmModule.forFeature([Task]),
        AuthModule,
    ],
    controllers: [TasksController],
    providers: [TaskRepository, TasksService],
    exports: [TasksService, TypeOrmModule],
})
export class TasksModule {}
