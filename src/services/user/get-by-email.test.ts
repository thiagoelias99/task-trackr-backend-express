import { describe, it, expect, beforeAll } from 'vitest'
import { v4 as uuidv4 } from 'uuid'

import { getByEmail } from './get-by-email' 
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

describe('getByEmail', () => {
    beforeAll(async () => {
        await userRepository.save(userMock)
    })

    it('Should return an existing user', async () => {
        const userEmail = userMock.email
        const user = await getByEmail(userEmail, userRepository)

        expect(user).toBeTruthy()
        expect(user.id).toBe(userMock.id)
        expect(user.name).toBe(userMock.name)
        expect(user.email).toBe(userMock.email)
        expect(user.password).toBe(userMock.password)
        expect(user.tasks).toBe(userMock.tasks)
        expect(user.comments).toBe(userMock.comments)
        expect(user.teams).toBe(userMock.teams)

    })

    it('Should throw an error if the user is not found', async () => {
        const nonExistingUserId = uuidv4()

        await expect(getByEmail(nonExistingUserId, userRepository)).rejects.toThrow(NotFoundError)
    })
})
