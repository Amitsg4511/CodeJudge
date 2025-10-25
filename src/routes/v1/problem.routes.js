import { Router } from "express";
import {
  addProblem,
  deleteProblem,
  updateProblem,
  getProblem,
  getProblems,
  pingController,
} from "../../controller/problems.controller.js";

const problemRouter = Router();
problemRouter.get("/ping", pingController);
problemRouter.get("/", getProblems);
problemRouter.get("/:problemId", getProblem);
problemRouter.post("/", addProblem);
problemRouter.delete("/:problemId", deleteProblem);
problemRouter.put("/:problemId", updateProblem);

export default problemRouter;
