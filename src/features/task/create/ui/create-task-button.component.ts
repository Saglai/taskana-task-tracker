import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { UiKitModule } from '../../../../shared/ui/ui-kit.module';
import { SharedModule } from '../../../../shared/lib/shared.module';
import { tasksActions } from '../../../../entities/task/model/task.actions';

@Component({
  selector: 'app-create-task-button',
  standalone: true,
  imports: [UiKitModule, SharedModule],
  templateUrl: './create-task-button.component.html',
  styleUrl: './create-task-button.component.scss'
})
export class CreateTaskButtonComponent {
  constructor(private store: Store) {}
  @Input() isDisable: boolean = true;

  onAdd() {
    this.store.dispatch(tasksActions.addTask());
  }
}
