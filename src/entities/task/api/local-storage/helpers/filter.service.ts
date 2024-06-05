import { Injectable } from '@angular/core';
import { Task, TaskFilterBy, TaskFilterQuery } from '../../../../../shared/models/types/task.types';
import { ParamsFilters } from '../../../../../shared/models/enums/task.enums';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filterTasks(params: TaskFilterQuery, tasksList: Task[]): Task[] {
    if (!this.hasFilterParams(params)) {
      return tasksList;
    }

    let resultList: Task[] = tasksList;
    
    for (const filter in params) {
      resultList = this.filterBy(filter as TaskFilterBy, params, resultList);
    }

    return resultList;
  }

  private filterBy(filterType: TaskFilterBy, params: TaskFilterQuery, tasksList: Task[]): Task[] {
    if (!params[filterType]) {
      return tasksList;
    }

    switch(filterType) {
      case ParamsFilters.deadline: 
        return this.filterByDeadline(params[filterType], tasksList);
      case ParamsFilters.assignTo: 
      case ParamsFilters.status: 
        return tasksList.filter(task => task[filterType] === params[filterType]); 
    }

    return tasksList;
  }

  private filterByDeadline(selectedDeadline: Date | undefined, tasksList: Task[]): Task[] {
    if (!selectedDeadline) {
      return tasksList; 
    }

    const selectedDate = this.convertDateToTimestamp(selectedDeadline);

    return tasksList.filter(task => {
      if (!task.deadline) {
        return false;
      }

      const taskDeadline = this.convertDateToTimestamp(task.deadline)
      return taskDeadline === selectedDate;
    }); 
  }

  private convertDateToTimestamp(date: Date): number {
    const dateWithoutTime = new Date(date).toISOString().split('T')[0];
    return +new Date(dateWithoutTime);
  }

  private hasFilterParams(params: TaskFilterQuery): boolean {
    for (const key in params) {
      switch(key) {
        case ParamsFilters.status: 
          return true;
        case ParamsFilters.assignTo: 
          return true;
        case ParamsFilters.deadline: 
          return true;
      }
    }

    return false;
  }
}
