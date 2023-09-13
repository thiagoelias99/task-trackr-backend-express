import { Request, Response, NextFunction } from 'express'
import { userServices } from '../../../services'
import { StatusCodes } from 'http-status-codes'

async function get(req: Request, res: Response, next: NextFunction) {
    const users = await userServices.getAll()
    res.status(StatusCodes.OK).json(users)
}

export default get