const { Engineer } = require("../src/employee_classes");

describe("Engineer Subclass", () => {
  it("should return Engineer role", () => {
    expect(new Engineer().getRole()).toEqual("Engineer");
  });

  it("should return manager office number", () => {
    expect(
      new Engineer("Jason", 2, "jason@gmail.com", 'jlamonade').getGithub()
    ).toEqual('jlamonade');
  });
});
