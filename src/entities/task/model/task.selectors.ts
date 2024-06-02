import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TasksState } from "./task.reducer";

const TASKS_KEY = 'tasks';

const tasksState = createFeatureSelector<TasksState>(TASKS_KEY);
const getTasks = (state: TasksState) => state.tasksList;
const getTasksQuery = (state: TasksState) => state.tasksQuery;

export const getTasksSelector = createSelector(
    tasksState,
    getTasks
)

export const getTasksQuerySelector = createSelector(
    tasksState,
    getTasksQuery
)

export const getNewTaskSelector = createSelector(
    tasksState, 
    (state) => state.addTaskQuery
)

export const getAddTaskSuccessSelector = createSelector(
    tasksState, 
    (state) => state.addTaskSuccessMessage
)

export const getAddTaskErrorSelector = createSelector(
    tasksState, 
    (state) => state.addTaskErrorMessage
)

export const getSelectedTaskId = createSelector(
    tasksState, 
    (state) => state.selectedTaskId
)

export const getSelectedTask = createSelector(
    tasksState, 
    (state) => state.selectedTask
)

