const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "name? "
    },
  ])
  .then((answers) => {
    console.log(answers);
  });
