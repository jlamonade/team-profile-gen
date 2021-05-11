class Employee { 
  /* 
  general employee class
  */
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
  // Manager subclass of Employee class
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

class Engineer extends Employee {
  // Engineer subclass of employee class
  constructor(name, id, email, githubName) {
    super(name, id, email);
    this.githubName = githubName;
    this.role = "Engineer";
  }

  getGithub() {
    return this.githubName;
  }
}

class Intern extends Employee {
  // Intern subclass of employee class
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.role = "Intern";
  }

  getSchool() {
    return this.school;
  }
}

module.exports = { Employee, Manager, Engineer, Intern };
