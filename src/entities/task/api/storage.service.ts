import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {TaskLocalStorageService} from './local-storage/task-local-storage.service';
import { RequestResponse } from '../../../shared/api/types';
import { AddTaskReturnType, CreateTask, Task, TasksQuery } from '../../../shared/models/types/task.types';

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

  updateTask(id: string, updatedTask: Task): Observable<RequestResponse> {
    return this.repo.updateTask(id, updatedTask);
  }

  addTask(task: CreateTask): Observable<AddTaskReturnType> {
    return this.repo.addTask(task);
  }
}
