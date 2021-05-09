const inquirer = require("inquirer");
const fs = require("fs");
const outputMainTemplate = require("./utils/templates");
const { Manager, Engineer, Intern } = require("./utils/employee_classes");
const {
  starterQuestion,
  managerQuestions,
  engineerQuestions,
  internQuestions,
  optionsList,
} = require("./utils/inquirer_prompts");

const userInput = new Map().set('employees', []);

const startPrompts = () => {
  let addMoreEmployees = true;
  let HTML = ``;

  inquirer.prompt(starterQuestion).then(({ teamName }) => {
    userInput.set("teamName", teamName);
    inquirer.prompt(optionsList).then(({ option }) => {
      switch (option) {
        case "Add Manager":
          return inquirer
            .prompt(managerQuestions)
            .then(({ name, id, email, officeNumber }) => {
              let employeeObject = new Manager(name, id, email, officeNumber)
              setEmployeeObjectToUserInput(employeeObject)
              console.log(userInput.get('employees'))
            });
        case "Add Engineer":
          return inquirer
            .prompt(engineerQuestions)
            .then(({ name, id, email, githubName }) => {
              console.log(answers);
            });
        case "Add Intern":
          return inquirer
            .prompt(internQuestions)
            .then(({ name, id, email, school }) => {
              console.log(answers);
            });
        case "Finish and Generate HTML":
      }
    });
  });
};

const setEmployeeObjectToUserInput = (employeeObject) => {
  userInput.set('employees', userInput.get('employees').push(employeeObject))
}

startPrompts();

