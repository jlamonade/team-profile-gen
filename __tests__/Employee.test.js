const { Employee } = require("../src/employee_classes");

describe("Employee Class", () => {
  it("should return employee name", () => {
    expect(new Employee("Jason").getName()).toEqual("Jason");
  });

  it("should return employee id", () => {
    expect(new Employee("Jason", 2).getId()).toEqual(2);
  });

  it("should return employee email", () => {
    expect(new Employee("Jason", 2, "jason@gmail.com").getEmail()).toEqual(
      "jason@gmail.com"
    );
  });
  it("should return employee role", () => {
    expect(new Employee().getRole()).toEqual("Employee");
  });
});
