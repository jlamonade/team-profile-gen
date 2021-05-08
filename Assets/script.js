const inquirer = require("inquirer");
const { Manager, Engineer, Intern } = require("./utils/employee_classes");

const employeeObjectsArray = [];

const startPrompts = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "name? ",
      },
    ])
    .then(({ name }) => {
      employeeObjectsArray.push(new Engineer(name));
      console.log(employeeObjectsArray);
    });
};

const testEmployee = new Manager("jason", 1, "nyjasonlam@gmail.com", 1);

startPrompts();
