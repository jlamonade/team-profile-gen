const inquirer = require("inquirer");
const fs = require("fs");
const outputMainTemplate = require("./utils/templates");
const { Manager, Engineer, Intern } = require("./utils/employee_classes");
const {
  starterQuestions,
  employeeQuestions,
  managerQuestions,
  engineerQuestions,
} = require("./utils/inquirer_prompts");

const employeeObjectsArray = [];

const startPrompts = () => {
  inquirer.prompt(starterQuestions).then((answers) => {
    fs.writeFile(
      "test.html",
      outputMainTemplate(answers.teamName),
      "utf8",
      (err) => {
        err ? console.log(err) : console.log("Write successful!");
      }
    );
  });
};

startPrompts();
