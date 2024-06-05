import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: '/tasks', pathMatch: 'full'}, 
    {path: 'tasks', loadComponent: () => import('../pages/tasks-list/ui/tasks-list.page')
        .then(mod => mod.TasksListPage)}, 
    {path: 'tasks/details/:id', loadComponent: () => import('../pages/task-details/ui/task-details.page')
        .then(mod => mod.TaskDetailsPage)},
    {path: 'task-add', loadComponent: () => import('../pages/task-add/ui/task-add.page')
        .then(mod => mod.TaskAddPage)}, 
];
