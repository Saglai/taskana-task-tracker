export enum Statuses {
    todo = 1,
    progress = 2,
    complete = 3
}

export enum Priorities {
    low = 1, 
    medium = 2, 
    high = 3
}

export enum TasksSortBy {
    status = 1, 
    assignTo = 2, 
    deadline = 3
}

export enum ParamsFilters {
    status = 'status', 
    assignTo = 'assignTo', 
    deadline = 'deadline'
}