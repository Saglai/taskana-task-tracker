import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UiKitModule } from '../../../../shared/ui';
import { filterActions } from '../../../../entities/task/model/task.actions';

@Component({
  selector: 'app-filter-tasks-button',
  standalone: true, 
  imports: [UiKitModule],
  templateUrl: './filter-tasks-button.component.html',
  styleUrl: './filter-tasks-button.component.scss'
})
export class FilterTasksButtonComponent {
  constructor(private store: Store) {}

  onFilter(): void {
    this.store.dispatch(filterActions.filterTasksTable());
  }
}
