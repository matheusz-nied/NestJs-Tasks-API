import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { TaskRepository } from './tasks.repository';
import { GetTasksFilterDto } from './dto/get-tasks.dto';
import { User } from '../auth/user.entity';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: TaskRepository);
    getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]>;
    getTaskById(id: string, user: User): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
    deleteTask(id: string, user: User): Promise<void>;
    updateTaskStatus(id: string, status: TaskStatus, user: User): Promise<Task>;
}
