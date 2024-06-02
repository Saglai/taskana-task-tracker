import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { tasksActions } from '../../model/task.actions';
import { Priorities, Statuses } from '../../api/types';
import { UiKitModule } from '../../../../shared/ui';
import { SharedModule } from '../../../../shared/lib';
import { StatusPipe } from "../../lib/status.pipe";
import { PriorityPipe } from "../../lib/priority.pipe";

@Component({
    selector: 'app-task-form',
    standalone: true,
    templateUrl: './task-form.component.html',
    styleUrl: './task-form.component.scss',
    imports: [UiKitModule, SharedModule, StatusPipe, PriorityPipe]
})
export class TaskFormComponent implements OnInit {
  form!: FormGroup;
  notifier = new Subject();
  statuses = [Statuses.todo, Statuses.progress, Statuses.complete];
  priorities = [Priorities.low, Priorities.medium, Priorities.high];

  constructor(
    private fb: FormBuilder, 
    private store: Store
  ) {}

  ngOnInit(): void {
    this.createForm();

    this.form.valueChanges.pipe(
      takeUntil(this.notifier)
    ).subscribe(value => this.store.dispatch(tasksActions.addTaskQueryChanged({task: value})));
  }

  onClear() {
    this.form.reset();
    this.form.patchValue({status: Statuses.todo})
  }

  private createForm(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required]], 
      status: [Statuses.todo, [Validators.required]], 
      priority: [], 
      deadline: [], 
      assignTo: [], 
      description: []
    })
  }

  ngOnDestroy(): void {
    this.notifier.next('');
    this.notifier.complete();
  }

  get title() { return this.form.get('title') as FormControl }
}