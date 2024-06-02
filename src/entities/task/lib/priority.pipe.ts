import { Pipe, PipeTransform } from '@angular/core';
import { Priorities } from '../api/types';

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
