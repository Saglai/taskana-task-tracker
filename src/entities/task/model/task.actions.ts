import { createActionGroup, emptyProps, props } from "@ngrx/store"
import { CreateTask, Task, TasksQuery } from "../../../shared/models/types/task.types"

export const tasksActions = createActionGroup({
    source: 'Tasks', 
    events: {
        'Add Task': emptyProps(),
        'Add Task Query Changed': props<{task: CreateTask}>(),
        'Add Task Success': props<{taskId: string}>(),
        'Add Task Error': props<{ errorMessage: string }>(),
        'Update Task': props<{taskId: string, task: Task}>(),
        'Update Task Error': props<{ errorMessage: string }>(),
        'Load Tasks': emptyProps(), 
        'Load Tasks Success': props<{tasks: Task[]}>(), 
        'Load Tasks Error': props<{ errorMessage: string }>(),
        'Set Selected Task Id': props<{id: string | null}>(),
        'Get Selected Task Id': emptyProps(),
        'Get Selected Task': emptyProps(),
        'Get Selected Task Success': props<{task: Task | null}>(), 
        'Get Selected Task Error': props<{ errorMessage: string }>(),
    }
})

export const filterActions = createActionGroup({
    source: 'Tasks', 
    events: {
        'Tasks Query Changed': props<{query: TasksQuery}>(), 
        'Filter Tasks Table': emptyProps(),
    }
})