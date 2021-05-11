const inquirer = require("inquirer");
const fs = require("fs");
const { outputMainTemplate } = require("./src/templates");
const { Manager, Engineer, Intern } = require("./src/employee_classes");
const {
  starterQuestion,
  managerQuestions,
  engineerQuestions,
  internQuestions,
  optionsList,
} = require("./src/inquirer_prompts"); // importing in prompts

const userInput = new Map().set("employees", []); 
/* creates a map for user input and
initializes a default employees element with an empty array for employee objects
to append to */

const startPrompts = () => { 
  /* 
  starts the default prompt asking for a team name and then asks employee questions
  */
  inquirer.prompt(starterQuestion).then(({ teamName }) => {
    userInput.set("teamName", teamName);
    askEmployeeQuestions();
  });
};

const askEmployeeQuestions = () => {
  /* 
  promps users with options to add manager, engineer, intern, or end prompts and 
  render HTML
  */
  inquirer.prompt(optionsList).then(({ option }) => {
    switch (option) {
      /* 
      depending on the option the corresponding prompts will be asked
      */
      case "Add Manager":
        inquirer
          .prompt(managerQuestions)
          .then(({ name, id, email, officeNumber }) => {
            /* 
            creates a new employee object and appends it to user input map
            afterwards go back to options list
            */
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
        /* 
        renders full html with the userInput map
        */
        renderFullHtml(userInput);
        break;
    }
  });
};

const renderFullHtml = (userData) => {
  /* 
  using the output from outputMainTemplate creates a new html file
  */
  fs.writeFile("./dist/index.html", outputMainTemplate(userData), "utf8", (err) => {
    err ? console.log(err) : console.log("Write Successful!");
  });
};

const setEmployeeObjectToUserInput = (employeeObject) => {
  /* 
  adds employee object into the employees array inside the userinput map
  */
  userInput.set("employees", [...userInput.get("employees"), employeeObject]);
};

startPrompts();
