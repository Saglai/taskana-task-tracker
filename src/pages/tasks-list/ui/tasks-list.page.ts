import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent, UiKitModule } from '../../../shared/ui';
import { ContentHeaderComponent } from '../../../widgets/content-header';
import { TasksFilterCardComponent } from '../../../widgets/tasks-filter-card/ui/tasks-filter-card.component';
import { FilterTasksButtonComponent } from "../../../features/task/filter/ui/filter-tasks-button.component";
import { TasksTableComponent } from "../../../widgets/tasks-table/ui/tasks-table.component";

@Component({
    selector: 'app-tasks-list',
    standalone: true,
    templateUrl: './tasks-list.page.html',
    styleUrls: ['./tasks-list.page.scss'],
    imports: [
        RouterModule,
        UiKitModule,
        HeaderComponent,
        ContentHeaderComponent,
        TasksFilterCardComponent,
        FilterTasksButtonComponent,
        TasksTableComponent
    ]
})
export class TasksListPage {
}