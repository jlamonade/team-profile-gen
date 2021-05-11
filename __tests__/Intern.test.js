const { Intern } = require("../src/employee_classes");

describe("Manager Subclass", () => {
  it("should return Intern role", () => {
    expect(new Intern("Jason").getRole()).toEqual("Intern");
  });

  it("should return intern school", () => {
    expect(
      new Intern(
        "Jason",
        2,
        "jason@gmail.com",
        "St. John's University"
      ).getSchool()
    ).toEqual("St. John's University");
  });
});
