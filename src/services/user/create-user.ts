import { v4 as uuidv4 } from 'uuid'

import { IUserRepository } from '../../repository/UserRepository'
import { EmailAlreadyRegisteredError, NotFoundError, PasswordMatchError } from '../../errors'

export interface ICreateUser {
    name: string
    email: string
    password: string
    confirmPassword: string
}

export async function createUser(user: ICreateUser, repository: IUserRepository) {
    if (user.password != user.confirmPassword) {
        throw new PasswordMatchError()
    }

    try {
        await repository.getByEmail(user.email)
        throw new EmailAlreadyRegisteredError()
    } catch (error) {
        if (error instanceof NotFoundError) {
            return repository.save(
                {
                    id: uuidv4(),
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    comments: [],
                    tasks: [],
                    teams: []
                }
            )
        }
        throw error
    }
}