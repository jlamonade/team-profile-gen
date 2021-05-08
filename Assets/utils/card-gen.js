const cardHtmlTemplate = `<div class="col">
<div class="card border-light shadow-sm">
  <div class="card-header">
    <h3 class="card-title">${this.name}</h3>
    <h4 class="card-subtitle mb-2 text-muted">${this.role}</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${this.id}</li>
    <li class="list-group-item">
      Email: <a href="mailto://${this.email}">${this.email}</a>
    </li>
    <li class="list-group-item">
      Github: <a href="#github-link-here">${this.github}</a>
    </li>
    <li class="list-group-item">
      School: ${this.school}
    </li>
  </ul>
</div>
</div>`;
