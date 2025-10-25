function addProblem(req, res) {}

function getProblem(req, res) {}

function getProblems(req, res) {}

function deleteProblem(req, res) {}

function updateProblem(req, res) {}
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
