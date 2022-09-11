const Manager = require("../lib/Engineer");

test("Testing giHub works", () => {
    const officeNumber = "01214443333";
    const newManager = new Manager("Dave", 0, "davemonaghan@gmx.com", officeNumber);
    expect(newManager.officeNumber).toBe(officeNumber);
});

test("Testing getGithub() method works", () => {
    const officeNumber = "Dave";
    const newManager = new Manager("Dave", 0, "davemonaghan@gmx.com", officeNumber);
    expect(newManager.officeNumber()).toBe(officeNumber);
});

test("Testing role() method works", () => {
    const role = "Manager";
    const newManager = new Manager("Dave", 0, "davemonaghan@gmx.com", "01214443333");
    expect(newManager.getRole()).toBe(role);
});