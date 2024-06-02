import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { tasksReducer, TasksState } from '../../entities/task/model/task.reducer';

export interface State {
  tasks: TasksState
}

export const reducers: ActionReducerMap<State> = {
  tasks: tasksReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
