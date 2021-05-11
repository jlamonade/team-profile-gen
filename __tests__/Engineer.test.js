const { Manager } = require("../src/employee_classes");

describe("Manager Subclass", () => {
  it("should return Manager role", () => {
    expect(new Manager("Jason").getRole()).toEqual("Manager");
  });

  it("should return manager office number", () => {
    expect(
      new Employee("Jason", 2, "jason@gmail.com", 1).getOfficeNumber()
    ).toEqual(1);
  });
});
