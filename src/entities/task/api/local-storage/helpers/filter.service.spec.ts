import { TestBed } from '@angular/core/testing';

import { FilterService } from './filter.service';
import { Statuses, Task, TaskFilterQuery } from '../../types';

describe('FilterService', () => {
  let service: FilterService;
  const tasksListByDesc: Task[] = [
    {id: '1', title: 'Test 1', status: Statuses.todo, 
    assignTo: 'Alina', deadline: new Date('1 June 2024')
    }, 
    {id: '2', title: 'Test 2', status: Statuses.progress, 
    assignTo: 'Boris', deadline: new Date('2 June 2024')
    },
    {id: '3', title: 'Test 3', status: Statuses.complete, 
    assignTo: 'Celin', deadline: new Date('3 June 2024')
    },
  ];

  const resultList = [ {id: '1', title: 'Test 1', status: Statuses.todo, 
    assignTo: 'Alina', deadline: new Date('1 June 2024')
  }];
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the tasks list as it was with empty params', () => {
    const params: TaskFilterQuery = {}
    expect(JSON.stringify(service.filterTasks(params, tasksListByDesc)))
    .toEqual(JSON.stringify(tasksListByDesc));
  });

  it('should return the tasks list as it was with undefined status params', () => {
    const params: TaskFilterQuery = { status: undefined}
    expect(JSON.stringify(service.filterTasks(params, tasksListByDesc)))
    .toEqual(JSON.stringify(tasksListByDesc));
  });

  it('should return the tasks list as it was with undefined assignTo params', () => {
    const params: TaskFilterQuery = { assignTo: undefined}
    expect(JSON.stringify(service.filterTasks(params, tasksListByDesc)))
    .toEqual(JSON.stringify(tasksListByDesc));
  });

  it('should return the tasks list as it was with deadline assignTo params', () => {
    const params: TaskFilterQuery = { deadline: undefined}
    expect(JSON.stringify(service.filterTasks(params, tasksListByDesc)))
    .toEqual(JSON.stringify(tasksListByDesc));
  });

  it('should return the tasks list filtered by status params', () => {
    const params: TaskFilterQuery = { status: Statuses.todo};
    const resultTasksList = JSON.parse(JSON.stringify(resultList));

    expect(JSON.stringify(service.filterTasks(params, tasksListByDesc)))
    .toEqual(JSON.stringify(resultTasksList));
  });

  it('should return the tasks list filtered by assignTo params', () => {
    const params: TaskFilterQuery = { assignTo: 'Alina'};
    const resultTasksList = JSON.parse(JSON.stringify(resultList));
    
    expect(JSON.stringify(service.filterTasks(params, tasksListByDesc)))
    .toEqual(JSON.stringify(resultTasksList));
  });

  it('should return the tasks list filtered by deadline params', () => {
    const params: TaskFilterQuery = { deadline: new Date('1 June 2024')};
    const resultTasksList = JSON.parse(JSON.stringify(resultList));
    
    expect(JSON.stringify(service.filterTasks(params, tasksListByDesc)))
    .toEqual(JSON.stringify(resultTasksList));
  });
});
