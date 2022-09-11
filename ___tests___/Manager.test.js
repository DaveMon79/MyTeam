const Manager = require("../lib/Manager");

test("Testing office number works", () => {
    const number = "01214443333";
    const newManager = new Manager("Dave", 0, "davemonaghan@gmx.com", number);
    expect(newManager.office).toBe(number);
});

test("Testing officeNumber() method works", () => {
    const number = "01214443333";
    const newManager = new Manager("Dave", 0, "davemonaghan@gmx.com", number);
    expect(newManager.officeNumber()).toBe(number);
});

test("Testing role() method works", () => {
    const role = "Manager";
    const newManager = new Manager("Dave", 0, "davemonaghan@gmx.com", "01214443333");
    expect(newManager.getRole()).toBe(role);
});