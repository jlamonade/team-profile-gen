function outputMainTemplate(userInput) {
  // returns profile page html
  // html for main template
  let mainTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css">
    <title>${userInput.get("teamName")}</title>
  </head>
  <body>
    <header class="container-fluid header text-center p-3 mb-3">
      <h1>${userInput.get("teamName")}</h1>
    </header>
    <section class="container profile-section">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
`;

  userInput.get("employees").forEach((employee) => {
    // loops through employee objects and appends each employee card to main html
    mainTemplate += outputCardTemplate(employee);
  });

  mainTemplate += `</div>`; // closing div for employee cards row div

  return ( // main template and closing tags
    mainTemplate +
    `</section>
  </body>
</html>`
  );
}

function outputCardTemplate(employeeObj) {
  // renders each employee card
  const { name, id, role, email, officeNumber, githubName, school } =
  // employee object destructured for all possibilities
    employeeObj;
  // all employee cards will have the following html
  let cardTemplate = `<div class="col">
  <div class="card border-light shadow rounded-0">
    <div class="card-header rounded-0">
  <h3 class="card-title">${name}</h3>
  <h4 class="card-subtitle mb-2">${role}</h4>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${id}</li>
  <li class="list-group-item">
    Email: <a href="mailto://${email}" target="_blank">${email}</a>
  </li>`;

  switch (role) {
    // depending on the role the html hereafter will be different
    // each switch case will append different html to the employee card
    case "Manager":
      cardTemplate += `<li class="list-group-item">
      Office Number: ${officeNumber}
    </li></div>
    </div>`;
      break;
    case "Engineer":
      cardTemplate += `
    <li class="list-group-item">
      Github: <a href="https://github.com/${githubName}" target="_blank">${githubName}</a>
    </li></div>
    </div>`;
      break;
    case "Intern":
      cardTemplate += `<li class="list-group-item">
      School: ${school}
    </li></div>
    </div>`;
      break;
  }

  return cardTemplate; // returns the employee cards html minus closing tags
}

module.exports = { outputMainTemplate };
