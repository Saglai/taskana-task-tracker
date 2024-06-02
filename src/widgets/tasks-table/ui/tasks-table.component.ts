import { Component, OnInit } from "@angular/core";
import { Sort } from "@angular/material/sort";
import { Store } from "@ngrx/store";
import { map, of, Subject, takeUntil, withLatestFrom } from "rxjs";
import { SortByPipe } from "../lib/sort-by.pipe";
import { SortDirectionPipe } from "../lib/sort-direction.pipe";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { ListColumn, TableRowData } from "../model/types";
import { UiKitModule } from "../../../shared/ui";
import { SharedModule } from "../../../shared/lib";
import { RouterModule } from "@angular/router";
import { Statuses, Task, TasksQuery, TasksSortBy } from "../../../entities/task/api/types";
import { filterActions, tasksActions } from "../../../entities/task/model/task.actions";
import { getTasksQuerySelector, getTasksSelector } from "../../../entities/task/model/task.selectors";
import { PriorityPipe } from "../../../entities/task/lib/priority.pipe";
import { StatusPipe } from "../../../entities/task/lib/status.pipe";

@Component({
    selector: 'app-tasks-table',
    standalone: true,
    templateUrl: './tasks-table.component.html',
    styleUrls: ['./tasks-table.component.scss'],
    imports: [
        UiKitModule,
        SharedModule,
        RouterModule,
        PriorityPipe,
        StatusPipe
    ], 
    providers: [
        SortByPipe, 
        SortDirectionPipe
    ]
})
export class TasksTableComponent implements OnInit {
    private notifier = new Subject();
    notFoundTableDataMessage = 'No suitable data available. Please add a task or update the filter.';
    statuses = [Statuses.todo, Statuses.progress, Statuses.complete];

    columns: ListColumn[] = [
        {label: 'Title', isSort: false, property: 'title'}, 
        {label: 'Deadline', isSort: true, property: 'deadline'},
        {label: 'Priority', isSort: false, property: 'priority'}, 
        {label: 'Status', isSort: true, property: 'status'}, 
        {label: 'Assign to', isSort: true, property: 'assignTo'},
        {label: 'Edit', isSort: false, property: 'edit'},
        {label: 'Info', isSort: false, property: 'info'}
    ];
    tasksList: Task[] = [];
    taskForm!: FormGroup;
    isLoading!: boolean;
    
    constructor(
        private store: Store, 
        private sortBy: SortByPipe, 
        private sortDirections: SortDirectionPipe, 
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {
        this.isLoading = true;
        this.store.dispatch(tasksActions.loadTasks());
        this.store.select(getTasksSelector).pipe(takeUntil(this.notifier))
            .subscribe(tasks => {
                this.isLoading = false;
                this.tasksList = JSON.parse(JSON.stringify(tasks));
                this.createForm(this.tasksList);
            });
    }

    onTaskEditDone(rowIndex: number): void {
        let selectedTask: TableRowData = this.tableRowArray.at(rowIndex).value;
        let task = this.tasksList.find(task => task.id === selectedTask.id);

        if (!task || this.isTaskDataUpdated(task, selectedTask)) {
            return;
        }

        this.isLoading = true;
        task = {...task, status: selectedTask.status, assignTo: selectedTask.assignTo};
        this.store.dispatch(tasksActions.updateTask({taskId: selectedTask.id, task: task}));
    }

    onSort(event: Sort): void {
        const [sortBy, isDesc] = this.transformSortValues(event);
        
        of('sort').pipe(
            withLatestFrom(this.store.select(getTasksQuerySelector)),
            map(([_, currentQuery]) => this.updateSortQuery(currentQuery, sortBy, isDesc)),
            takeUntil(this.notifier)
        ).subscribe(query => {
            this.store.dispatch(filterActions.tasksQueryChanged({ query }));
            this.store.dispatch(filterActions.filterTasksTable());
        })
    }

    private transformSortValues(event: Sort): [TasksSortBy, boolean] {
        return [
            this.sortBy.transform(event.active), 
            this.sortDirections.transform(event.direction)
        ]
    }

    private updateSortQuery(query: TasksQuery | undefined, 
        sortBy: TasksSortBy, isDesc: boolean): TasksQuery {
        return {
            ...query,
            sortBy: sortBy,
            isDesc: isDesc
        }
    }

    private createForm(tasks: Task[]): void {
        this.taskForm = this.fb.group({
            tableRowArray: this.fb.array([])
        });

        tasks.forEach(task => {this.tableRowArray.push(this.createTableRow(task))});
    }

    private createTableRow(task: Task): FormGroup {
        return this.fb.group({
            id: task.id,
            assignTo: task.assignTo,
            status: task.status, 
        })
    }

    private isTaskDataUpdated(task: Task | undefined, selectedTask: TableRowData): boolean {
        return selectedTask.assignTo === task?.assignTo && selectedTask.status === task?.status;
    }

    get columnsToDisplay() {return this.columns.map((column) => column.property)}
    get tableRowArray() {return this.taskForm.get('tableRowArray') as FormArray};

    ngOnDestroy(): void {
        this.notifier.next('');
        this.notifier.complete();
    }
}