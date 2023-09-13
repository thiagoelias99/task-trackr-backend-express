import { IUserRepository } from '../../repository/UserRepository'

export function deleteById(id: string, repository: IUserRepository): Promise<void> {
    return repository.remove(id)
}