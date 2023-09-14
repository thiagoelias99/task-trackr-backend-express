import { IUserRepository } from '../../repository/UserRepository'
import { IUser } from '../../entities/User'
import { NotFoundError } from '../../errors'

export async function getById(id: string, repository: IUserRepository): Promise<IUser> {
    const user = await repository.getById(id)
    return new Promise<IUser>((resolve) => {
        if (!user) {
            throw new NotFoundError(`User not found with id: ${id}`)
        }
        resolve(user)
    })
}