import { Pipe, PipeTransform } from '@angular/core';
import { Priorities } from '../../../shared/models/enums/task.enums';

@Pipe({
  name: 'priority',
  standalone: true
})
export class PriorityPipe implements PipeTransform {

  transform(priority: Priorities | undefined): string {
    switch(priority) {
      case Priorities.low: 
        return 'low';
      case Priorities.medium: 
        return 'medium';
      case Priorities.high:
        return 'high'
      default:
        return '';
    }
  }
}
