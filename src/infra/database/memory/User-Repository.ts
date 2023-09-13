import { IUser } from '../../../entities/User'
import { NotFoundError } from '../../../errors'
import { IUserRepository } from '../../../repository/UserRepository'

export default class UserRepository implements IUserRepository {
    private users: IUser[] = []

    save(user: IUser): Promise<IUser> {
        return new Promise<IUser>((resolve, reject) => {
            this.users.push(user)
            resolve(user)
        })
    }

    getAll(): Promise<IUser[]> {
        return new Promise<IUser[]>((resolve, reject) => {
            resolve(this.users)
        })
    }
    getById(id: string): Promise<IUser> {
        return new Promise<IUser>((resolve, reject) => {
            try {
                const user = this.users.filter(user => user.id === id)[0]

                if(!user){
                    throw new NotFoundError(`User not found with id: ${id}`)
                }
                resolve(user)
            } catch (error) {
                throw new NotFoundError(`User not found with id: ${id}`)
            }
        })
    }
    remove(id: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            try {
                const users = this.users.filter(user => user.id !== id)
                this.users = users
                resolve()
            } catch (error) {
                throw new NotFoundError()
            }
        })
    }
}