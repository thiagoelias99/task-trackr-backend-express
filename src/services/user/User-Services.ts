import { IUserRepository } from '../../repository/UserRepository'

import { ICreateUser, createUser } from './create-user'

export default class UserServices {
    constructor(
        private repository: IUserRepository
    ){}

    createUser(user: ICreateUser){
        return createUser(user, this.repository)
    }
}