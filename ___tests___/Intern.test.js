const Intern = require("../lib/Engineer");

test("Testing school works", () => {
    const school = "https://github.com/DaveMon79";
    const newIntern = new Intern("Dave", 0, "davemonaghan@gmx.com", school);
    expect(newIntern.school).toBe(school);
});

test("Testing school() method works", () => {
    const school = "Dave";
    const newIntern = new Intern("Dave", 0, "davemonaghan@gmx.com", school);
    expect(newIntern.getSchool()).toBe(school);
});

test("Testing role() method works", () => {
    const role = "Intern";
    const newIntern = new Intern("Dave", 0, "davemonaghan@gmx.com", "https://github.com/DaveMon79");
    expect(newIntern.getRole()).toBe(role);
});