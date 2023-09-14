import { describe, it, expect, beforeAll } from 'vitest'
import { v4 as uuidv4 } from 'uuid'

import { deleteById } from './delete-by-id' 
import { NotFoundError } from '../../errors'

import MemoryDatabase from '../../infra/database/memory/Memory-Database'
import { IUser } from '../../entities/User'
const userRepository = new MemoryDatabase().users

const userMock: IUser = {
    id: uuidv4(),
    name: 'User Name',
    email: 'user@email.com',
    password: '123456',
    comments: [],
    tasks: [],
    teams: []
}

describe('deleteById', () => {
    beforeAll(async () => {
        await userRepository.save(userMock)
    })

    it('Should delete an existing user', async () => {
        const userId = userMock.id
        const result = deleteById(userId, userRepository)

        await expect(result).resolves
    })

    it('Should throw an error if the user is not found', async () => {
        const nonExistingUserId = uuidv4()

        await expect(deleteById(nonExistingUserId, userRepository)).rejects.toThrow(NotFoundError)
    })
})
