import { StatusCodes } from "http-status-codes";
import NotImplementedError from "../errors/notimplemented.error.js";

function addProblem(req, res) {
  try {
    throw new NotImplementedError("addProblem");
  } catch (error) {
    next(error);
  }
}

function getProblem(req, res) {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
}

function getProblems(req, res) {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
}

function deleteProblem(req, res) {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
}

function updateProblem(req, res) {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
}
function pingController(req, res) {
  res.send("Problem ping controller is up and running");
}
export {
  pingController,
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
};
