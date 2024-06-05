import { Pipe, PipeTransform } from '@angular/core';
import { Statuses } from '../../../shared/models/enums/task.enums';

@Pipe({
  name: 'status',
  standalone: true
})
export class StatusPipe implements PipeTransform {

  transform(status: Statuses): string {
    switch(status) {
      case Statuses.todo: 
        return 'to do';
      case Statuses.progress: 
        return 'in progress';
      case Statuses.complete:
        return 'complete'
      default:
        return '';
    }
  }
}
