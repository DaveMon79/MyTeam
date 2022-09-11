const Intern = require("../lib/Intern");

test("Testing school works", () => {
    const internSchool = "Kingsway";
    const newIntern = new Intern("Dave", 0, "davemonaghan@gmx.com", internSchool);
    expect(newIntern.school).toBe(internSchool);
});

test("Testing school() method works", () => {
    const internSchool = "Kingsway";
    const newIntern = new Intern("Dave", 0, "davemonaghan@gmx.com", internSchool);
    expect(newIntern.getSchool()).toBe(internSchool);
});

test("Testing role() method works", () => {
    const role = "Intern";
    const newIntern = new Intern("Dave", 0, "davemonaghan@gmx.com", "https://github.com/DaveMon79");
    expect(newIntern.getRole()).toBe(role);
});