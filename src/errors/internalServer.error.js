import BaseError from "./base.error";
import { StatusCodes } from "http-status-codes";
class InternalServerError extends BaseError {
  constructor(details) {
    super(
      "InternalServerError",
      StatusCodes.INTERNAL_SERVER_ERROR,
      `Something Went Wrong`,
      details
    );
  }
}
export default InternalServerError;
