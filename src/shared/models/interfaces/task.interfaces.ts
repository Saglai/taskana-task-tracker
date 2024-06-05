import { Observable } from "rxjs";
import { AddTaskReturnType, CreateTask, Task, TasksQuery } from "../types/task.types";
import { RequestResponse } from "../../api/types";

export interface TasksRepository {
    getTasksList(params?: TasksQuery): Observable<Task[]>, 
    getTaskById(id: string): Observable<Task | null>,
    updateTask(id: string, updatedTask: Task): Observable<RequestResponse>,
    addTask(task: CreateTask): Observable<AddTaskReturnType>
} 