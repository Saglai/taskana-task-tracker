import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { skip, Subject, takeUntil } from 'rxjs';
import { UiKitModule } from '../../../shared/ui';
import { SharedModule } from '../../../shared/lib';
import { CreateTaskButtonComponent } from '../../../features/task';
import { ContentHeaderComponent } from '../../../widgets/content-header';
import { RouterModule } from '@angular/router';
import { getAddTaskErrorSelector, getAddTaskSuccessSelector } from '../../../entities/task/model/task.selectors';
import { TaskFormComponent } from "../../../entities/task/ui/task-form/task-form.component";

@Component({
    selector: 'app-task-add',
    standalone: true,
    templateUrl: './task-add.page.html',
    styleUrls: ['./task-add.page.scss'],
    imports: [
        UiKitModule,
        SharedModule,
        RouterModule,
        CreateTaskButtonComponent,
        ContentHeaderComponent,
        TaskFormComponent
    ]
})
export class TaskAddPage implements OnInit {
  private notifier = new Subject();

  constructor(
    private snackbar: MatSnackBar, 
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.select(getAddTaskSuccessSelector).pipe(skip(1), takeUntil(this.notifier))
    .subscribe(_ => this.snackbar.open('Task added successfully', 'Ok', {duration: 3000}))

    this.store.select(getAddTaskErrorSelector).pipe(skip(1), takeUntil(this.notifier))
    .subscribe(_ => this.snackbar.open('Task added successfully', 'Ok', {duration: 3000}))
  }

  ngOnDestroy(): void {
    this.notifier.next('');
    this.notifier.complete();
  }
}
