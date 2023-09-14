import { IUser } from '../../entities/User'
import { IUserRepository } from '../../repository/UserRepository'

import { ICreateUser, createUser } from './create-user'
import { deleteById } from './delete-by-id'
import { getAllUsers } from './get-all'
import { getByEmail } from './get-by-email'
import { getById } from './get-by-id'

export default class UserServices {
    constructor(
        private repository: IUserRepository
    ){}

    createUser(user: ICreateUser): Promise<IUser>{
        return createUser(user, this.repository)
    }

    getAll(): Promise<IUser[]>{
        return getAllUsers(this.repository)
    }

    getById(id: string): Promise<IUser>{
        return getById(id, this.repository)
    }

    getByEmail(email: string): Promise<IUser>{
        return getByEmail(email, this.repository)
    }
    
    deleteById(id: string): Promise<void>{
        return deleteById(id, this.repository)
    }
}