const Employee = require("../lib/Employee");


test("Testing name is correct", () => {
    const name = "Dave";
    const newEmployee = new Employee(name);
    expect(newEmployee.name).toBe(name);
})

test("Testing id is correct", () => {
    const id = 0;
    const newEmployee = new Employee("Dave", id);
    expect(newEmployee.id).toBe(id);
})

test("Testing email is correct", () => {
    const email = "davemonaghan@gmx.com";
    const newEmployee = new Employee("Dave", 0, email);
    expect(newEmployee.email).toBe(email);
})


test("Testing if getName() method works", () => {
    const name = "Dave";
    const newEmployee = new Employee(name);
    expect(newEmployee.getName()).toBe(name);
})

test("Testing if getId() method works", () => {
    const id = 0;
    const newEmployee = new Employee("Dave", id);
    expect(newEmployee.getId()).toBe(id);
})

test("Testing if getEmail() method works", () => {
    const email = "davemonaghan@gmx.com";
    const newEmployee = new Employee("Dave", 0, email);
    expect(newEmployee.getEmail()).toBe(email);
})

test("Testing if getRole() method works", () => {
    const role = "Employee";
    const newEmployee = new Employee("Dave", 0, "davemonaghan@gmx.com");
    expect(newEmployee.getRole()).toBe(role);
})