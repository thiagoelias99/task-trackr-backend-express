import { IUserRepository } from '../../repository/UserRepository'
import { IUser } from '../../entities/User'

export function getById(id: string, repository: IUserRepository): Promise<IUser> {
    return repository.getById(id)
}