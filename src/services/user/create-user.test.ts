import{ describe, it, expect } from 'vitest'

import { createUser } from './create-user' 
import { PasswordMatchError } from '../../errors'
import MemoryDatabase from '../../infra/database/memory/Memory-Database'

const userRepository = new MemoryDatabase().users

describe('createUser', () => {
    it('Should successfully create a new user', async () => {
        const newUser = {
            name: 'New User',
            email: 'new-user@example.com',
            password: 'password123',
            confirmPassword: 'password123'
        }

        const createdUser = await createUser(newUser, userRepository)

        expect(createdUser.id).toBeDefined()
        expect(createdUser.name).toBe(newUser.name)
        expect(createdUser.email).toBe(newUser.email)
    })

    it('Should throw an error if passwords don\'t match', async () => {
        const invalidUser = {
            name: 'User With Wrong Password',
            email: 'wrong-user@example.com',
            password: 'password123',
            confirmPassword: '321password'
        }

        await expect(createUser(invalidUser, userRepository)).rejects.toThrow(PasswordMatchError)
    })

    it('Should throw an error if the email is already registered', async () => {
        const existingUser = {
            name: 'Duplicated User',
            email: 'existing-emailsadasd@example.com',
            password: 'password123',
            confirmPassword: 'password123',
        }

        await createUser(existingUser, userRepository)
        const result = await createUser(existingUser, userRepository)

        expect(result).toThrow(Error)
    })
})
