export default class CustomErrorClass extends Error{
  constructor(message, statusCode){
    super(message)
    this.statusCode = statusCode
  }
}

export const customError = (message = 'Default Error Message', statusCode = 400) => {
  return new CustomErrorClass(message, statusCode)
}

// USAGE 1

/*
export const controllerFnc = (req, res, next) => {
  try{
    throw customError("Error", 403)
  }catch(err){
    next(err)
  }
}
*/

// USAGE 2

/*
export const controllerFnc = asyncWrapper( async (req, res, next) => {
    throw customError("Error", 403)
})
*/