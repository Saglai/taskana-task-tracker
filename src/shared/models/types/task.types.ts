import { Priorities, Statuses, TasksSortBy } from "../enums/task.enums";

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
export type AddTaskReturnType = {id: string};