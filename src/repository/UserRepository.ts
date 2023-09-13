import { IUser } from '../entities/User'

export interface IUserRepository {

    save(user: IUser): Promise<IUser>
    getAll(): Promise<IUser[]>
    getById(id: string): Promise<IUser>
    remove(id: string): Promise<void>
}