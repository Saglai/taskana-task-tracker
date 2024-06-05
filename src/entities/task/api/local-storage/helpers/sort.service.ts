import { Injectable } from '@angular/core';
import { Task, TaskSortQuery } from '../../../../../shared/models/types/task.types';
import { TasksSortBy } from '../../../../../shared/models/enums/task.enums';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  sortTasks(params: TaskSortQuery, tasksList: Task[]): Task[] {
    if (!params.sortBy || (params.isDesc === undefined)) {
      return tasksList;
    }

    switch(params.sortBy) {
      case TasksSortBy.status: 
        return this.sortByStatus(params.isDesc, tasksList);
      case TasksSortBy.assignTo:
        return this.sortByAssignTo(params.isDesc, tasksList);
      case TasksSortBy.deadline:
        return this.sortByDeadline(params.isDesc, tasksList);
    }
  }

  private sortByStatus(isDesc: boolean, tasksList: Task[]): Task[] {
    let sign = isDesc ? -1 : 1;
    return tasksList.sort( (taskA, taskB) => (taskA.status * sign) - (taskB.status * sign));
  }

  private sortByAssignTo(isDesc: boolean, tasksList: Task[]): Task[] {
    return tasksList.sort((taskA, taskB) => {
      const assignToA = taskA.assignTo as string;
      const assignToB = taskB.assignTo as string;

      if (!assignToA || !assignToB) {
        return assignToA ? -1 : 1;
      }

      let result = assignToA.localeCompare(assignToB);
      if (result === 0) return 0;
      return isDesc ? result * -1 : result;
    })
  }

  private sortByDeadline(isDesc: boolean, tasksList: Task[]): Task[] {
    let sign = isDesc ? -1 : 1;

    return tasksList.sort( (taskA, taskB) => {
      const deadlineA = +(new Date(taskA.deadline as Date));
      const deadlineB = +(new Date(taskB.deadline as Date));

      if (!deadlineA || !deadlineB) {
        return deadlineA ? -1 : 1;
      }

      return (deadlineA * sign) - (deadlineB * sign);
    });
  }
}
