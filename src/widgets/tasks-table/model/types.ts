import { Statuses } from "../../../entities/task/api/types"

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