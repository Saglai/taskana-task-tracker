import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StorageService } from "../api";
import { Store } from "@ngrx/store";
import { filterActions, tasksActions } from "./task.actions";
import { catchError, concatMap, debounceTime, map, of, switchMap, withLatestFrom } from "rxjs";
import { getNewTaskSelector, getSelectedTaskId, getTasksQuerySelector } from "./task.selectors";
import { Task } from "../api/types";

@Injectable()
export class TaskEffects {
    loadTasks$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(tasksActions.loadTasks), 
                withLatestFrom(this.store.select(getTasksQuerySelector)),
                switchMap(([_, query]) => this.taskService.getTasksList(query) 
                    .pipe(
                        map((tasks: Task[]) => (tasksActions.loadTasksSuccess({ tasks }))),
                        catchError(error => of(tasksActions.loadTasksError({ errorMessage: error })))
                    )
                )
            )     
    })

    addTask$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(tasksActions.addTask), 
                debounceTime(500),
                withLatestFrom(this.store.select(getNewTaskSelector)),
                concatMap(([_, newTask]) => {
                    if (!newTask) {
                        return of(tasksActions.addTaskError({ errorMessage: 'The new task is undefined' }));
                    }

                    return this.taskService.addTask(newTask).pipe(
                        map(task => (tasksActions.addTaskSuccess({taskId: task.id}))), 
                        catchError(error => of(tasksActions.addTaskError({ errorMessage: error })))
                    )}
                )
            )
    })

    getTaskById$ = createEffect(() => {
        return this.actions$
        .pipe(
            ofType(tasksActions.getSelectedTask), 
            withLatestFrom(this.store.select(getSelectedTaskId)), 
            concatMap( ([_, id]) => {
                if (!id) {
                    return of(tasksActions.getSelectedTaskError({errorMessage: 'The task id is undefined or null'}));
                }

                return this.taskService.getTaskById(id).pipe(
                    map(task => (tasksActions.getSelectedTaskSuccess({task}))), 
                    catchError(error => of(tasksActions.getSelectedTaskError({errorMessage: error})))
                )
            })
        )
    })

    filterTasksTable$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(filterActions.filterTasksTable),
                map(() => (tasksActions.loadTasks()))
            )
    })

    updateTask$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(tasksActions.updateTask), 
                concatMap(payload => this.taskService.updateTask(payload.taskId, payload.task).pipe(
                        map(() => (tasksActions.loadTasks())), 
                        catchError(error => of(tasksActions.updateTaskError({ errorMessage: error })))
                    )
                )
            )
    })

    constructor(
        private actions$: Actions, 
        private taskService: StorageService, 
        private store: Store
    ) {}
}