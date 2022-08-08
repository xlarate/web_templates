import jwt from "jsonwebtoken"
import { unauthorizedError } from "../errors/unauthorizedError.js"

export const authMiddleware = async(req, res, next) => {
  const {authorization} = req.headers
  if(!authorization || !authorization.startsWith('Bearer ')) throw new UnauthorizedError("Invalid Token")

  const token = authorization.split(' ')[1]

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET_MESSAGE)
    const {id, username} = decode
    req.user = {id, username}
    next()
  } catch (error) {
    next(unauthorizedError("Unauthorized token"))
  }
}