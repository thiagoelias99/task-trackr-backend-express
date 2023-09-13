import { IUser } from '../../../entities/User'
import { IUserRepository } from '../../../repository/UserRepository'

export default class UserRepository implements IUserRepository{
    private users: IUser[] = []

    save(user: IUser): Promise<IUser> {
        return new Promise<IUser>((resolve, reject) => {
            this.users.push(user)
            resolve(user)
        })
    }
    
    getAll(): Promise<IUser[]> {
        throw new Error('Method not implemented.')
    }
    getById(id: string): Promise<IUser> {
        throw new Error('Method not implemented.')
    }
    remove(user: IUser): Promise<void> {
        throw new Error('Method not implemented.')
    }    
}