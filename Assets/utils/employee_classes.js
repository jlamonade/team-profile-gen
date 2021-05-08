class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.role;
  }
}

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  getOfficeNumer() {
    return this.officeNumber;
  }
}

class Engineer extends Employee {
  constructor(name, id, email, githubName, githubLink) {
    super(name, id, email);
    this.githubName = githubName;
    this.githubLink = githubLink;
    this.role = "Engineer";
  }

  getGithub() {
    return `${this.githubName}: ${this.githubLink}`;
  }
}

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, email, id);
    this.school = school;
    this.role = "Intern";
  }

  getSchool() {
    return this.school;
  }
}

module.exports = { Manager, Engineer, Intern };
