import { Injectable } from '@angular/core';
import { FilterService } from './helpers/filter.service';
import { SortService } from './helpers/sort.service';
import { AddTaskReturnType, CreateTask, Task, TaskFilterQuery, TaskSortQuery, TasksQuery } from '../types';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { RequestResponse } from '../../../../shared/api';

@Injectable({
  providedIn: 'root'
})
export class TaskLocalStorageService {
  private baseKey = 'taskana-tasks-list';

  constructor(
    private filter: FilterService, 
    private sort: SortService
  ) {}

  getTasksList(params?: TasksQuery): Observable<Task[]> {
    let tasksList = this.getTasksLocalStorage();

    if (params) {
      tasksList = this.filter.filterTasks(params as TaskFilterQuery, tasksList);
      tasksList = this.sort.sortTasks(params as TaskSortQuery, tasksList);
    }

    return of(tasksList);
  }

  getTaskById(id: string): Observable<Task | null> {
    const tasksList = this.getTasksLocalStorage();
    const result = tasksList.find(task => task.id === id);

    if (!result) {
      return of(null);
    }

    return of(result);
  }

  updateTask(id: string, updatedTask: Task): Observable<RequestResponse> {
    const tasksList = this.getTasksLocalStorage();
    const taskIndex = tasksList.findIndex(task => task.id === id);

    tasksList[taskIndex] = updatedTask;
    localStorage.setItem(this.baseKey, JSON.stringify(tasksList));
    return of('success');
  }

  addTask(task: CreateTask): Observable<AddTaskReturnType> {
    let newTask = JSON.parse(JSON.stringify(task));
    newTask.id = uuidv4();
    
    let tasksList = this.getTasksLocalStorage();
    tasksList.push(newTask);
    
    localStorage.setItem(this.baseKey, JSON.stringify(tasksList));
    return of({id: newTask.id});
  }

  private getTasksLocalStorage(): Task[] {
    const tasksJson = localStorage.getItem(this.baseKey);
    
    if (!tasksJson) {
      return []
    }

    return JSON.parse(tasksJson);
  }
}
