import { z } from 'zod'
import { ICreateUser } from '../../../services/user/create-user'

export default function postValidation(user: ICreateUser) {
    const ValidationSchema = z.object({
        name: z.string().nonempty(),
        password: z.string().min(6),
        confirmPassword: z.string().min(6),
        email: z.string().email()
    })

    return ValidationSchema.parse(user)
}