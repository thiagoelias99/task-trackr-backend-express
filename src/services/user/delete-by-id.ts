import { NotFoundError } from '../../errors'
import { IUserRepository } from '../../repository/UserRepository'

export async function deleteById(id: string, repository: IUserRepository): Promise<void> {
    const user = await repository.getById(id)
    await repository.remove(id)

    if (!user) {
        throw new NotFoundError(`User not found with id: ${id}`)
    }

    try {
        const userCheck = await repository.getById(id)
        if (userCheck) {
            throw new Error(`User ${id} deletion failed`)
        }
    } catch (error) {
        if (error instanceof NotFoundError) {
            return new Promise<void>((resolve) => {
                resolve()
            })
        }
        throw error
    }
}