import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortDirection',
  standalone: true
})
export class SortDirectionPipe implements PipeTransform {

  transform(sortColumn: string): boolean {
    switch(sortColumn) {
      case 'desc': 
        return true;
      case 'asc': 
        return false;
      default:
        return true;
    }
  }

}
