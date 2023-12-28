import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';

export class TaskRepository extends Repository<Task> {
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
    ) {
        super(
            taskRepository.target,
            taskRepository.manager,
            taskRepository.queryRunner,
        );
    }

    async createTask(createTaskDto: CreateTaskDto): Promise<Task>{
        const { title, description } = createTaskDto;

        const task = this.create({
            title,
            description,
            status: TaskStatus.OPEN,
        });
        await this.save(task);
        
        return task;
    }
}
