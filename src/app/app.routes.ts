import { Routes } from '@angular/router';
import { TasksListPage } from '../pages/tasks-list/ui/tasks-list.page';
import { TaskDetailsPage } from '../pages/task-details/ui/task-details.page';
import { TaskAddPage } from '../pages/task-add/ui/task-add.page';

export const routes: Routes = [
    {path: '', redirectTo: '/tasks', pathMatch: 'full'}, 
    {path: 'tasks', component: TasksListPage}, 
    {path: 'tasks/details/:id', component: TaskDetailsPage},
    {path: 'task-add', component: TaskAddPage}, 
];
