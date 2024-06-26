import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { UiKitModule } from '../../../../shared/ui';
import { SharedModule } from '../../../../shared/lib';
import { StatusPipe } from "../../lib/status.pipe";
import { PriorityPipe } from "../../lib/priority.pipe";
import { Task } from '../../../../shared/models/types/task.types';

@Component({
    selector: 'app-task-card',
    standalone: true,
    templateUrl: './task-card.component.html',
    styleUrl: './task-card.component.scss',
    imports: [UiKitModule, SharedModule, StatusPipe, PriorityPipe]
})
export class TaskCardComponent {
  public notFoundMessage = 'Task not found';
  
  @Input() task$!: Observable<Task | undefined | null>;
}
