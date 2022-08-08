import CustomErrorClass from "../errors/customError.js"
import { StatusCodes } from "http-status-codes"

export const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomErrorClass) return res.status(err.statusCode).json({msg: err.message})

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message, err})
}