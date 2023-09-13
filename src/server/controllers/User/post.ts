import { Request, Response, NextFunction } from 'express'
import { NotImplementedError } from '../../../errors'

function post(req: Request, res: Response, next: NextFunction){
    throw new NotImplementedError()
}

export default post