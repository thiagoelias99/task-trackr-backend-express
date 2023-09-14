import { IUser } from '../../../entities/User'
import { IUserRepository } from '../../../repository/UserRepository'

export default class UserRepository implements IUserRepository {
    private users: IUser[] = []

    save(user: IUser): Promise<IUser> {
        return new Promise<IUser>((resolve) => {
            this.users.push(user)
            resolve(user)
        })
    }

    getAll(): Promise<IUser[]> {
        return new Promise<IUser[]>((resolve) => {
            resolve(this.users)
        })
    }
    getById(id: string): Promise<IUser> {
        return new Promise<IUser>((resolve) => {
            const user = this.users.filter(user => user.id === id)[0]
            resolve(user)
        })
    }
    getByEmail(email: string): Promise<IUser> {
        return new Promise<IUser>((resolve) => {
            const user = this.users.filter(user => user.email === email)[0]
            resolve(user)
        })
    }
    remove(id: string): Promise<void> {
        return new Promise<void>((resolve) => {
            this.users = this.users.filter(user => user.id !== id)
            resolve()
        })
    }
}