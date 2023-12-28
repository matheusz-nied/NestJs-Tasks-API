import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { TaskRepository } from './tasks.repository';
@Injectable()
export class TasksService {
    constructor(private tasksRepository: TaskRepository) {}
    // getAllTasks(): Task[] {
    //     return this.tasks;
    // }
    // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
    //     const { status, search } = filterDto;
    //     let tasks = this.getAllTasks();
    //     if (status) {
    //         tasks = tasks.filter((task) => task.status === status);
    //     }
    //     if (search) {
    //         tasks = tasks.filter((task) => {
    //             if (
    //                 task.title.includes(search) ||
    //                 task.description.includes(search)
    //             ) {
    //                 return true;
    //             }
    //             return false;
    //         });
    //     }
    //     return tasks;
    // }

    async getTaskById(id: string): Promise<Task> {
        const found = await this.tasksRepository.findOne({
            where: { id: id },
        });

        if (!found) {
            throw new NotFoundException(`Task with ID "${id} not found`);
        }

        return found;
    }
    // getTaskById(id: string): Task {
    //     const found = this.tasks.find((task) => task.id === id);
    //     if (!found) {
    //         throw new NotFoundException(`Task with ID "${id} not found`);
    //     }
    //     return found;
    // }

    createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        return this.tasksRepository.createTask(createTaskDto);
    }

    // deleteTask(id: string) {
    //     const found = this.getTaskById(id)
    //     let index = this.tasks.findIndex((task) => task.id === found.id);
    //     this.tasks.splice(index, 1);
    // }
    // updateTaskStatus(id: string, status: TaskStatus): Task {
    //     const task = this.getTaskById(id);
    //     task.status = status;
    //     return task;
    // }
}
