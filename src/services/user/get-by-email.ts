import { IUserRepository } from '../../repository/UserRepository'
import { IUser } from '../../entities/User'
import { NotFoundError } from '../../errors'

export async function getByEmail(email: string, repository: IUserRepository): Promise<IUser> {
    const user = await repository.getByEmail(email)
    return new Promise<IUser>((resolve) => {
        if (!user) {
            throw new NotFoundError(`User not found with email: ${email}`)
        }
        resolve(user)
    })
}