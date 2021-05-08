const starterQuestion = [
  {
    type: "input",
    name: "teamName",
    message: "Team Name: ",
    validate: function (input) {
      (input.name === 'jason') ? true : false;
    }

    /* validate: function (input) {
      let done = this.async();

      setTimeout(function (input) {
        if (typeof input === "string") {
          done("you need to provide a string");
          return
        }
        done(null, true);
      }, 1000);
    }, */
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
