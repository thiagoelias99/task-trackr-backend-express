import { describe, it, expect } from 'vitest'
import { z } from 'zod'

import postValidation from './post-validation'

describe('postValidation', () => {
    it('should pass validation for a valid user', () => {
        const validUser = {
            name: 'Valid Name',
            email: 'email@example.com',
            password: 'password123',
            confirmPassword: 'password123',
        }

        expect(() => postValidation(validUser)).not.toThrow()
    })

    it('should throw an error if the name is empty', () => {
        const invalidUser = {
            name: '', // Empty name
            email: 'email@example.com',
            password: 'password123',
            confirmPassword: 'password123',
        }

        expect(() => postValidation(invalidUser)).toThrow(z.ZodError)
    })

    it('should throw an error if the password is less than 6 characters', () => {
        const invalidUser = {
            name: 'Valid Name',
            email: 'email@example.com',
            password: '12345', // Password with less than 6 characters
            confirmPassword: '123456',
        }

        expect(() => postValidation(invalidUser)).toThrow(z.ZodError)
    })

    it('should throw an error if the confirmPassword is less than 6 characters', () => {
        const invalidUser = {
            name: 'Valid Name',
            email: 'email@example.com',
            password: '123456', 
            confirmPassword: '12345', // Password with less than 6 characters
        }

        expect(() => postValidation(invalidUser)).toThrow(z.ZodError)
    })

    it('should throw an error if the email is not valid', () => {
        const invalidUser = {
            name: 'Valid Name',
            email: 'invalid-email', // Invalid email
            password: 'password123',
            confirmPassword: 'password123',
        }

        expect(() => postValidation(invalidUser)).toThrow(z.ZodError)
    })

    it('should throw an error if the email is empty', () => {
        const invalidUser = {
            name: 'Valid Name',
            email: '',
            password: 'password123',
            confirmPassword: 'password123',
        }

        expect(() => postValidation(invalidUser)).toThrow(z.ZodError)
    })
})
