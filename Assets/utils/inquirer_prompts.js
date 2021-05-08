const starterQuestion = [
  {
    type: "list",
    name: "role",
    message: "Choose a role or output",
  },
];

const employeeQuestions = [
  {
    type: "input",
    name: "name",
    message: "Employee Name: ",
  },
  {
    type: "input",
    name: "id",
    message: "Employee ID: ",
  },
  {
    type: "input",
    name: "email",
    message: "Employee E-mail: ",
  },
];

const managerQuestions = [
  ...employeeQuestions,
  {
    type: "input",
    name: "officeNumber",
    message: "Office Number: ",
  },
];

const engineerQuestions = [
  ...employeeQuestions,
  {
    type: "input",
    name: "githubName",
    message: "Github Name: ",
  },
];

module.exports = {
  starterQuestion,
  employeeQuestions,
  managerQuestions,
  engineerQuestions,
};
