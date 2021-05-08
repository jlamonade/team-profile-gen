const inquirer = require("inquirer");
const { Manager, Engineer, Intern } = require('./utils/employee_classes');

const startPrompts = () => {
  inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "name? ",
    },
  ])
  .then((answers) => {
    console.log(answers);
  });
}

const testEmployee = new Manager('jason', 1, 'nyjasonlam@gmail.com', 1);

console.log(testEmployee.getRole())