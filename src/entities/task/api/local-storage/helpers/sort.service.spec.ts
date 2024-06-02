import { TestBed } from '@angular/core/testing';

import { SortService } from './sort.service';
import { Statuses, Task, TaskSortQuery, TasksSortBy } from '../../types';

describe('SortService', () => {
  let service: SortService;
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

  const tasksListByAsc: Task[] = [
    {id: '3', title: 'Test 3', status: Statuses.complete, 
    assignTo: 'Celin', deadline: new Date('3 June 2024')
    },
    {id: '2', title: 'Test 2', status: Statuses.progress, 
    assignTo: 'Boris', deadline: new Date('2 June 2024')
    },
    {id: '1', title: 'Test 1', status: Statuses.todo, 
    assignTo: 'Alina', deadline: new Date('1 June 2024')
    }, 
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the tasks list as it was with empty params', () => {
    const params: TaskSortQuery = {}
    expect(JSON.stringify(service.sortTasks(params, tasksListByDesc)))
    .toEqual(JSON.stringify(tasksListByDesc));
  });

  it('should return the tasks list as it was with partial params', () => {
    const params: TaskSortQuery = {sortBy: TasksSortBy.status}
    expect(JSON.stringify(service.sortTasks(params, tasksListByDesc)))
    .toEqual(JSON.stringify(tasksListByDesc));
  });

  it('should return the tasks list sorted by status descending', () => {
    const params: TaskSortQuery = {sortBy: TasksSortBy.status, isDesc: true};
    let tasksList = JSON.parse(JSON.stringify(tasksListByDesc));
    let resultTasks = JSON.parse(JSON.stringify(tasksListByAsc));

    expect(JSON.stringify(service.sortTasks(params, tasksList)))
      .toEqual(JSON.stringify(resultTasks));
  });

  it('should return the tasks list sorted by status ascending', () => {
    const params: TaskSortQuery = {sortBy: TasksSortBy.status, isDesc: false};
    let tasksList = JSON.parse(JSON.stringify(tasksListByAsc));
    let resultTasks = JSON.parse(JSON.stringify(tasksListByDesc));

    expect(JSON.stringify(service.sortTasks(params, tasksList)))
      .toEqual(JSON.stringify(resultTasks));
  });

  it('should return the tasks list sorted by assignTo descending', () => {
    const params: TaskSortQuery = {sortBy: TasksSortBy.assignTo, isDesc: true};
    let tasksList = JSON.parse(JSON.stringify(tasksListByDesc));
    let resultTasks = JSON.parse(JSON.stringify(tasksListByAsc));

    expect(JSON.stringify(service.sortTasks(params, tasksList)))
      .toEqual(JSON.stringify(resultTasks));
  });

  it('should return the tasks list sorted by assignTo ascending', () => {
    const params: TaskSortQuery = {sortBy: TasksSortBy.assignTo, isDesc: false};
    let tasksList = JSON.parse(JSON.stringify(tasksListByAsc));
    let resultTasks = JSON.parse(JSON.stringify(tasksListByDesc));

    expect(JSON.stringify(service.sortTasks(params, tasksList)))
      .toEqual(JSON.stringify(resultTasks));
  });

  it('should return the tasks list sorted by deadline descending', () => {
    const params: TaskSortQuery = {sortBy: TasksSortBy.deadline, isDesc: true};
    let tasksList = JSON.parse(JSON.stringify(tasksListByDesc));
    let resultTasks = JSON.parse(JSON.stringify(tasksListByAsc));

    expect(JSON.stringify(service.sortTasks(params, tasksList)))
      .toEqual(JSON.stringify(resultTasks));
  });

  it('should return the tasks list sorted by deadline ascending', () => {
    const params: TaskSortQuery = {sortBy: TasksSortBy.deadline, isDesc: false};
    let tasksList = JSON.parse(JSON.stringify(tasksListByAsc));
    let resultTasks = JSON.parse(JSON.stringify(tasksListByDesc));

    expect(JSON.stringify(service.sortTasks(params, tasksList)))
      .toEqual(JSON.stringify(resultTasks));
  });
});
