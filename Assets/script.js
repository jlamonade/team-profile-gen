const inquirer = require("inquirer");
const fs = require('fs');
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
    .then((answers) => {
      fs.writeFile('')
      return null;
    });
};

const testEmployee = new Manager("jason", 1, "nyjasonlam@gmail.com", 1);

startPrompts();
