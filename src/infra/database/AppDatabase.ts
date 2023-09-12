import { IUserRepository } from '../../repository/UserRepository'

export interface AppDatabase {
    users: IUserRepository
}