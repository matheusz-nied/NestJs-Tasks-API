import { Test } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { TaskRepository } from './tasks.repository';
import { TaskStatus } from './task-status.enum';
import { NotFoundException } from '@nestjs/common';

const mockTasksRepository = () => ({
    getTasks: jest.fn(),
    findOne: jest.fn(),
});

const mockUser = {
    username: 'Viserion',
    id: 'someid',
    password: 'senha',
    tasks: [],
};
describe('TaskService', () => {
    let tasksService: TasksService;
    let tasksRepository;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                TasksService,
                { provide: TaskRepository, useFactory: mockTasksRepository },
            ],
        }).compile();
        tasksService = module.get<TasksService>(TasksService);
        tasksRepository = module.get<TaskRepository>(TaskRepository);
    });

    describe('getTasks', () => {
        it('calls TaskRepository,getTasts and returns the result', async () => {
            expect(tasksRepository.getTasks).not.toHaveBeenCalled();
            tasksRepository.getTasks.mockResolvedValue('somevalue');
            const result = await tasksService.getTasks(null, mockUser);
            expect(tasksRepository.getTasks).toHaveBeenCalled();
            expect(result).toEqual('somevalue');
        });
    });

    describe('getTaskById', () => {
        it('calls TaskRepository,findOne and returns the result', async () => {
            const mockTask = {
                title: 'Test title',
                description: 'Test desc',
                id: 'someId',
                status: TaskStatus.OPEN,
            };
            tasksRepository.findOne.mockResolvedValue(mockTask);
            const result = await tasksService.getTaskById('someid', mockUser);
            expect(result).toEqual(mockTask);
        });
        it('calls TaskRepository,findOne and handle the error', async () => {
            tasksRepository.findOne.mockResolvedValue(null);
            expect(tasksService.getTaskById('someId', mockUser)).rejects.toThrow(NotFoundException);
           
        });
    });
});
