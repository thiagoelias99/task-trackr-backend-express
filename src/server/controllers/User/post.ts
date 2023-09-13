import { Request, Response, NextFunction } from 'express'
import { userServices } from '../../../services'
import { ICreateUser } from '../../../services/user/create-user'
import { StatusCodes } from 'http-status-codes'

async function post(req: Request<{}, {}, ICreateUser>, res: Response, next: NextFunction){
    const user = req.body

    const createdUser = await userServices.createUser(user)
    console.log(createdUser)

    res.status(StatusCodes.CREATED).json(createdUser)
}

export default post