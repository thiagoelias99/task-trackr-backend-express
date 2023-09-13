import { IUserRepository } from '../../repository/UserRepository'
import { IUser } from '../../entities/User'

export function getAllUsers(repository: IUserRepository): Promise<IUser[]> {
    return repository.getAll()
}