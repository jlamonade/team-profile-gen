const inquirer = require("inquirer");
const { Manager, Engineer, Intern } = require("./utils/employee_classes");
const {
  starterQuestions,
  employeeQuestions,
  managerQuestions,
  engineerQuestions,
} = require("./utils/inquirer_prompts");

const employeeObjectsArray = [];

const startPrompts = () => {
  inquirer
    .prompt(starterQuestion)
    .then((answer) => {
      return null;
    });
};

const testEmployee = new Manager("jason", 1, "nyjasonlam@gmail.com", 1);

startPrompts();
