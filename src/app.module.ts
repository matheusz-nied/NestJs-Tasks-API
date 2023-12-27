import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '1234',
            database: 'task-management',
            autoLoadEntities: true,
            synchronize: true,
        }),
        TasksModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
