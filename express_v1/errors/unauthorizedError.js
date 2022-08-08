import CustomErrorClass from "./customError.js";
import {StatusCodes} from 'http-status-codes'


export default class UnauthorizedErrorClass extends CustomErrorClass{
  constructor(message){
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED //401
  }
}

export const unauthorizedError = (message = 'Default Error Message') => {
  return new UnauthorizedErrorClass(message)
}