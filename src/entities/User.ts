import { IAppComment } from "./Comments"
import { ITask } from "./Task"
import { ITeam } from "./Team"

export interface IUser {
    id: string
    name: string
    email: string
    password: string
    teams: ITeam[]
    tasks: ITask[]
    comments: IAppComment[]
}