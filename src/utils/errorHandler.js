import { StatusCodes } from "http-status-codes";
import BaseError from "../errors/base.error.js";

function errorHandler(err, req, res, next) {
  console.log("Hello");
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      error: err.name,
      data: {}, //this is an exception so no data will provide
    });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "Something went wrong",
    error: err,
    data: {},
  });
}
export default errorHandler;
