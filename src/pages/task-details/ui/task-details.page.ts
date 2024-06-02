import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiKitModule } from '../../../shared/ui';
import { TaskDetailsCardComponent } from '../../../widgets/task-details-card';
import { ContentHeaderComponent } from '../../../widgets/content-header';

@Component({
  selector: 'app-task-details',
  standalone: true, 
  imports: [
    TaskDetailsCardComponent,
    ContentHeaderComponent,
    RouterModule, 
    UiKitModule
  ],
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss']
})
export class TaskDetailsPage {
}
