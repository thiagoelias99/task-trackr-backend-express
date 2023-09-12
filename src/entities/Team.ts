import { ITask } from "./Task"
import { IUser } from "./User"

export interface ITeam{
    id: string
    name: string
    description: string
    members: IUser[]
    tasks: ITask[]
}