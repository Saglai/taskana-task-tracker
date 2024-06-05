import { createReducer, on } from "@ngrx/store";
import { tasksActions, filterActions } from "./task.actions";
import { CreateTask, Task, TasksQuery } from "../../../shared/models/types/task.types";

export interface TasksState {
    tasksList: Task[], 
    tasksQuery?: TasksQuery, 
    loadTasksErrorMessage?: string, 
    addTaskQuery?: CreateTask, 
    addTaskSuccessMessage?: string,
    addTaskErrorMessage?: string, 
    selectedTaskId?: string | null, 
    selectedTask?: Task | null,
    loadTaskErrorMessage?: string, 
    updateTaskErrorMessage?: string
}

export const initialState: TasksState = {
    tasksList: []
};

export const tasksReducer = createReducer(
    initialState, 
    on(tasksActions.loadTasksSuccess, (state, {tasks}) => ({
        ...state, 
        tasksList: tasks
    })), 
    on(tasksActions.loadTasksError, (state, {errorMessage}) => ({
        ...state,
        loadTasksErrorMessage: errorMessage
    })),
    on(filterActions.tasksQueryChanged, (state, {query}) => ({
        ...state, 
        tasksQuery: query
    })), 
    on(tasksActions.addTaskQueryChanged, (state, {task}) => ({
        ...state,
        addTaskQuery: task
    })), 
    on(tasksActions.addTaskSuccess, (state, {taskId}) => ({
        ...state, 
        addTaskSuccessMessage: taskId
    })), 
    on(tasksActions.addTaskError, (state, {errorMessage}) => ({
        ...state,
        addTaskErrorMessage: errorMessage
    })),
    on(tasksActions.setSelectedTaskId, (state, {id}) => ({
        ...state, 
        selectedTaskId: id
    })), 
    on(tasksActions.getSelectedTaskSuccess, (state, {task}) => ({
        ...state, 
        selectedTask: task
    })), 
    on(tasksActions.getSelectedTaskError, (state, {errorMessage}) => ({
        ...state, 
        loadTaskErrorMessage: errorMessage
    })), 
    on(tasksActions.updateTaskError, (state, {errorMessage}) => ({
        ...state, 
        updateTaskErrorMessage: errorMessage
    }))
)