import { NextFunction, Request, Response } from 'express'
import { userServices } from '../../../services'
import { ICreateUser } from '../../../services/user/create-user'
import { StatusCodes } from 'http-status-codes'
import postValidation from './post-validation'

async function post(req: Request<unknown, unknown, ICreateUser>, res: Response, next: NextFunction) {
    try {
        const user = req.body
        postValidation(user)
        const createdUser = await userServices.createUser(user)
        res.status(StatusCodes.CREATED).json(createdUser)
    } catch (error) {
        next(error)
    }

}

export default post