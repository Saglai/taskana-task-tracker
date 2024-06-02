import { Observable } from "rxjs";

export type Task = {
    id: string, 
    title: string, 
    description?: string, 
    deadline?: Date, 
    priority?: Priorities,
    status: Statuses, 
    assignTo?: string
}

export type CreateTask = Omit<Task, 'id'>;

export enum Statuses {
    todo = 1,
    progress = 2,
    complete = 3
}

export enum Priorities {
    low = 1, 
    medium = 2, 
    high = 3
}

export enum TasksSortBy {
    status = 1, 
    assignTo = 2, 
    deadline = 3
}

export type TasksQuery = {
    status?: Statuses, 
    assignTo?: string, 
    deadline?: Date,
    sortBy?: TasksSortBy, 
    isDesc?: boolean
}

export type TaskSortQuery = Pick<TasksQuery, 'sortBy' | 'isDesc'>;
export type TaskFilterQuery = Pick<TasksQuery, 'assignTo' | 'status' | 'deadline'>;

export type TaskFilterBy = 'assignTo' | 'status' | 'deadline';
export enum ParamsFilters {
    status = 'status', 
    assignTo = 'assignTo', 
    deadline = 'deadline'
}

export interface TasksRepository {
    getTasksList(params?: TasksQuery): Observable<Task[]>, 
    getTaskById(id: string): Observable<Task | null>,
    updateTask(id: string, updatedTask: Task): Observable<any>,
    addTask(task: CreateTask): Observable<AddTaskReturnType>
} 

export type AddTaskReturnType = {id: string};