import { Injectable } from '@angular/core';
import { AddTaskReturnType, CreateTask, Task, TasksQuery } from './types';
import { Observable } from 'rxjs';
import {TaskLocalStorageService} from './local-storage/task-local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private repo: TaskLocalStorageService) {}

  getTasksList(params?: TasksQuery): Observable<Task[]> {
    return this.repo.getTasksList(params);
  }

  getTaskById(id: string): Observable<Task | null> {
    return this.repo.getTaskById(id);
  }

  updateTask(id: string, updatedTask: Task): Observable<any> {
    return this.repo.updateTask(id, updatedTask);
  }

  addTask(task: CreateTask): Observable<AddTaskReturnType> {
    return this.repo.addTask(task);
  }
}
