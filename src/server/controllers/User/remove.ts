import { Request, Response, NextFunction } from 'express'
import { userServices } from '../../../services'
import { StatusCodes } from 'http-status-codes'

async function remove(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params
        await userServices.deleteById(id)
        res.sendStatus(StatusCodes.NO_CONTENT)
    } catch (error) {
        next(error)
    }
}

export default remove