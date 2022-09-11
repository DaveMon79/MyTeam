const Engineer = require("../lib/Engineer");

test("Testing github works", () => {
    const gitHub = "https://github.com/DaveMon79";
    const newEngineer = new Engineer("Dave", 0, "davemonaghan@gmx.com", gitHub);
    expect(newEngineer.github).toBe(gitHub);
});

test("Testing getGithub() method works", () => {
    const github = "https://github.com/DaveMon79";
    const newEngineer = new Engineer("Dave", 0, "davemonaghan@gmx.com", github);
    expect(newEngineer.getGithub()).toBe(github);
});

test("Testing role() method works", () => {
    const role = "Engineer";
    const newEngineer = new Engineer("Dave", 0, "davemonaghan@gmx.com", "https://github.com/DaveMon79");
    expect(newEngineer.getRole()).toBe(role);
});