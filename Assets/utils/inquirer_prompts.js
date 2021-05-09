const starterQuestion = [
  {
    type: "input",
    name: "teamName",
    message: "Team Name: ",
    // validate: function (input) {
    //   const done = this.async()
    //   if (input !== '[\w\d\s]') {
    //     done('You need to provide a valid string.')
    //   } 
    //   done(null, true)
    // }
  },
];

const optionsList = [
  {
    type: 'list',
    name: 'option',
    message: 'What do you want to do?',
    choices: [
      'Add Manager',
      'Add Engineer',
      'Add Intern',
      'Finish and Generate HTML',
    ]
  }
]

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

const internQuestions = [
  ...employeeQuestions,
  {
    type: 'input',
    name: 'school',
    message: 'School: '
  }
]

module.exports = {
  starterQuestion,
  managerQuestions,
  engineerQuestions,
  internQuestions,
  optionsList
};
