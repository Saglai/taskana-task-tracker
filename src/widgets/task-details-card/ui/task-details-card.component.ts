import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { UiKitModule } from '../../../shared/ui';
import { SharedModule } from '../../../shared/lib';
import { Task } from '../../../entities/task/api/types';
import { tasksActions } from '../../../entities/task/model/task.actions';
import { getSelectedTask } from '../../../entities/task/model/task.selectors';
import { TaskCardComponent } from "../../../entities/task/ui/task-card/task-card.component";

@Component({
    selector: 'app-task-details-card',
    standalone: true,
    templateUrl: './task-details-card.component.html',
    styleUrl: './task-details-card.component.scss',
    imports: [
        UiKitModule,
        SharedModule,
        TaskCardComponent
    ]
})
export class TaskDetailsCardComponent {
  task$!: Observable<Task | undefined | null>;

  constructor(
    private route: ActivatedRoute, 
    private store: Store, 
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(tasksActions.setSelectedTaskId({id}));
    this.store.dispatch(tasksActions.getSelectedTask());
    this.task$ = this.store.select(getSelectedTask);
  }

  goBack(): void {
    this.location.back();
  }
}
