function outputMainTemplate(userInput) {
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
    <title>${userInput.teamName}</title>
  </head>
  <body>
    <header class="container-fluid header bg-light text-center p-3 mb-3">
      <h1>${userInput.teamName}</h1>
    </header>
    <section class="container profile-section">
      <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-3">
`;

  userInput.get('employees').forEach(employee => {
    mainTemplate += outputCardTemplate(employee);
  })

  mainTemplate += `</div>`

  return (
    mainTemplate +
    `</section>
  </body>
</html>`
  );
}

function outputCardTemplate(employeeObj) {
  const { name, id, role, email, officeNumber, githubName, school } =
    employeeObj;
  let cardTemplate = `<div class="col">
  <div class="card border-light shadow-sm">
    <div class="card-header">
  <h3 class="card-title">${name}</h3>
  <h4 class="card-subtitle mb-2 text-muted">${role}</h4>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${id}</li>
  <li class="list-group-item">
    Email: <a href="mailto://${email}" target="_blank">${email}</a>
  </li>`;

  switch (role) {
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

  return cardTemplate;
}

module.exports = { outputMainTemplate };
