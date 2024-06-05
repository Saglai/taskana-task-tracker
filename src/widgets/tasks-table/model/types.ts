import { Statuses } from "../../../shared/models/enums/task.enums"

export type ListColumn = {
    label: string, 
    isSort: boolean
    property: string, 
}

export type TableRowData = {
    id: string,
    assignTo: string,
    status: Statuses, 
}