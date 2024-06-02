import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, of, Subject, takeUntil, withLatestFrom } from 'rxjs';
import { UiKitModule } from '../../../shared/ui';
import { SharedModule } from '../../../shared/lib';
import { Statuses } from '../../../entities/task/api/types';
import { getTasksQuerySelector } from '../../../entities/task/model/task.selectors';
import { filterActions } from '../../../entities/task/model/task.actions';
import { StatusPipe } from "../../../entities/task/lib/status.pipe";

@Component({
    selector: 'app-tasks-filter-card',
    standalone: true,
    templateUrl: './tasks-filter-card.component.html',
    styleUrl: './tasks-filter-card.component.scss',
    imports: [
        UiKitModule,
        SharedModule,
        StatusPipe
    ]
})
export class TasksFilterCardComponent implements OnDestroy {
  title = 'Select filters';
  statuses = [Statuses.todo, Statuses.progress, Statuses.complete];
  form!: FormGroup;
  notifier = new Subject();

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      assignTo: [],
      status: [], 
      deadline: []
    });

    this.form.valueChanges.pipe(
      withLatestFrom(this.store.select(getTasksQuerySelector)),
      map(([newQuery, currentQuery]) => (
        {
          ...currentQuery,
          assignTo: newQuery.assignTo,
          status: newQuery.status,
          deadline: newQuery.deadline
        }
      )),
      takeUntil(this.notifier)
    ).subscribe(query => this.store.dispatch(filterActions.tasksQueryChanged({ query })));
  }

  onClear(): void {
      this.form.reset();
      this.clearFiltersQuery();
  }

  private clearFiltersQuery() {
    of('clear-filters').pipe(
      withLatestFrom(this.store.select(getTasksQuerySelector)),
      map(([_, currentQuery]) => {
        currentQuery = {
          ...currentQuery,
          assignTo: undefined,
          status: undefined,
          deadline: undefined,
        };

        this.store.dispatch(filterActions.tasksQueryChanged({ query: currentQuery }));
        this.store.dispatch(filterActions.filterTasksTable());
      }),
      takeUntil(this.notifier)
    ).subscribe()
  }
  
  ngOnDestroy() {
    this.notifier.next('');
    this.notifier.complete();
  }
}
