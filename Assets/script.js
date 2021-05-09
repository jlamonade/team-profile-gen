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

const userInput = new Map().set("employees", []);

const startPrompts = () => {
  let addMoreEmployees = true;
  let HTML = ``;

  inquirer.prompt(starterQuestion).then(({ teamName }) => {
    userInput.set("teamName", teamName);
    askEmployeeQuestions();
  });
};

const askEmployeeQuestions = () => {
  inquirer.prompt(optionsList).then(({ option }) => {
    switch (option) {
      case "Add Manager":
        inquirer
          .prompt(managerQuestions)
          .then(({ name, id, email, officeNumber }) => {
            const employeeObject = new Manager(name, id, email, officeNumber);
            setEmployeeObjectToUserInput(employeeObject);
            askEmployeeQuestions();
          });
        break;
      case "Add Engineer":
        inquirer
          .prompt(engineerQuestions)
          .then(({ name, id, email, githubName }) => {
            const employeeObject = new Engineer(name, id, email, githubName);
            setEmployeeObjectToUserInput(employeeObject);
            askEmployeeQuestions();
          });
        break;
      case "Add Intern":
        inquirer.prompt(internQuestions).then(({ name, id, email, school }) => {
          const employeeObject = new Intern(name, id, email, school);
          setEmployeeObjectToUserInput(employeeObject);
          askEmployeeQuestions();
        });
        break;
      case "Finish and Generate HTML":
        // fs.writeFile('test.html', userInput.get("employees"), "utf8", (err) => {
        //   err ? console.log(err) : console.log("Successfully written");
        // });
        // TODO: Create HTML renderer
        break;
    }
  });
};

const setEmployeeObjectToUserInput = (employeeObject) => {
  userInput.set("employees", [...userInput.get("employees"), employeeObject]);
};

startPrompts();
