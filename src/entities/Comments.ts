import { ITask } from './Task'
import { IUser } from './User'

export interface IAppComment {
    id: string
    content: string
    createdAt: string
    postedBy: IUser
    task: ITask
}