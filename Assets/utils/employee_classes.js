const { getNamespaceURI } = require("parse5/lib/tree-adapters/default");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
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
    return this.role
  }
}

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = 'Manager';
  }

  getOfficeNumer() {
    return this.officeNumber;
  }
}

const jason = new Employee('jason', 2, 'nyjasonlam@gmail.com')
const ben = new Manager('ben', 3, 'ben@bennyandeggs.com', 5)

console.log(jason.getRole())
console.log(ben.getRole())