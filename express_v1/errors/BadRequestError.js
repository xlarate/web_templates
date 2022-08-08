import CustomErrorClass from "./customError.js";
import {StatusCodes} from 'http-status-codes'

export default class BadRequestErrorClass extends CustomErrorClass{
  constructor(message){
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST //400
  }
}

export const badRequestError = (message = 'Default Error Message') => {
  return new BadRequestErrorClass(message)
}