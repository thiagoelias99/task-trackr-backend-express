import { ErrorRequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ZodError } from 'zod'

import { NotFoundError, NotImplementedError, PasswordMatchError } from '../../errors'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log('Error Handler...')
    console.error(err)

    if (err instanceof NotImplementedError) { res.sendStatus(StatusCodes.NOT_IMPLEMENTED); return }

    if (err instanceof PasswordMatchError) { res.status(StatusCodes.BAD_REQUEST).json(err.message); return }

    if (err instanceof NotFoundError) {res.status(StatusCodes.NOT_FOUND).json(err.message); return}

    if (err instanceof ZodError) {
        const errorList: { param: string, message: string }[] = []
        err.issues.forEach((value) => {
            errorList.push({param: value.path.toString(), message: value.message})
        })
        res.status(StatusCodes.BAD_REQUEST).json(errorList)
        return
    }

    console.log('...Server is up...')
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
}

export default errorHandler