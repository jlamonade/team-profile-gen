/* const fullHtmlTemplate = `<!DOCTYPE html>
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
    <title>${teamName}</title>
  </head>
  <body>
    <header class="container-fluid header bg-light text-center p-3 mb-3">
      <h1 class="">${teamName}</h1>
    </header>
    <section class="container profile-section">
    </section>
  </body>
</html>
`; */

function outputMainTemplate(teamName) {
  return `<!DOCTYPE html>
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
    <title>${teamName}</title>
  </head>
  <body>
    <header class="container-fluid header bg-light text-center p-3 mb-3">
      <h1>${teamName}</h1>
    </header>
    <section class="container profile-section">
    </section>
  </body>
</html>
`;
}

module.exports = outputMainTemplate;