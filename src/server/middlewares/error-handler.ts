import { ErrorRequestHandler } from 'express'
import { StatusCodes } from 'http-status-codes'

import { NotImplementedError } from '../../errors'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log('Error Handler...')
    console.error(err)

    if (err instanceof NotImplementedError) { res.sendStatus(StatusCodes.NOT_IMPLEMENTED); return }

    console.log('...Server is up...')
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
}

export default errorHandler