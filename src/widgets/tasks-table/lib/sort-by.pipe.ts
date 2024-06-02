import { Pipe, PipeTransform } from '@angular/core';
import { TasksSortBy } from '../../../entities/task/api/types';

@Pipe({
  name: 'sortBy',
  standalone: true
})
export class SortByPipe implements PipeTransform {

  transform(sortColumn: string): TasksSortBy {
    switch(sortColumn) {
      case 'status': 
        return TasksSortBy.status;
      case 'deadline': 
        return TasksSortBy.deadline;
      case 'assignTo':
        return TasksSortBy.assignTo;
      default:
        return TasksSortBy.deadline;
    }
  }
}
