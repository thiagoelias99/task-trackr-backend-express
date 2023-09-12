import { IAppComment } from "./Comments"
import { ITeam } from "./Team"
import { IUser } from "./User"

export interface ITask{
    id: string
    title: string
    description: string
    createdAt: Date
    deadline: Date
    completionDate: Date
    status: ETaskStatus
    postedBy: IUser
    team: ITeam
    comments: IAppComment[]
}

export enum ETaskStatus{
    pending = "pending",
    progress = "in progress",
    completed = "completed",
    canceled = "canceled"
}