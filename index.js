// Importing files, classes and functions
const inquirer = require("inquirer")
const fs = require("fs")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const generatePage = require("./src/generateHTML.js")

// Array to hold all team information
const teamArray = []

// Variables containing all questions to get team info from user
const startQuestion = [
    {
        type: 'list',
        message: 'Would you like to add an employee or create team?',
        choices: ['Add employee',
            'Create MyTeam'],
        name: 'start',
    },
]

const employeeQuestions = [
    {
        type: 'list',
        message: 'What type of employee would you like to add?',
        choices: ['Manager',
            'Engineer',
            'Intern'],
        name: 'jobTitle',
    },
    {
        type: 'input',
        message: 'What is the Employee name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the Employees ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the Employees email address?',
        name: 'email',
    },


];

const managerQuestion = [
    {
        type: 'input',
        message: 'What is the Managers office number?',
        name: 'office',
    },
]

const engineerQuestion = [
    {
        type: 'input',
        message: 'What is the Engineers GitHub username?',
        name: 'github',
    },
]

const internQuestion = [
    {
        type: 'input',
        message: 'Which school did the intern attend?',
        name: 'school',
    },
]

// Inquirer promts which uses question variables to get team info from user
start = () => {
    inquirer
        .prompt(startQuestion)
        .then((response) => {

            if (response.start === 'Add employee') {
                employeePrompt()
            }
            else if (response.start === 'Create MyTeam') {
                createTeam(teamArray)


            }
        })

}

employeePrompt = () => {
    inquirer
        .prompt(employeeQuestions)
        .then((response) => {

            if (response.jobTitle === "Manager") {
                managerPrompt(response)
            }
            else if (response.jobTitle === "Engineer") {
                engineerPrompt(response)
            }
            else if (response.jobTitle === "Intern") {
                internPrompt(response)
            }
        })

}

managerPrompt = (response) => {
    inquirer
        .prompt(managerQuestion)
        .then((responseManager) => {
            let newManager = new Manager(response.name, response.id, response.email, responseManager.office)
            teamArray.push(newManager);
            start()
        })

}

engineerPrompt = (response) => {
    inquirer
        .prompt(engineerQuestion)
        .then((responseEngineer) => {
            let newEngineer = new Engineer(response.name, response.id, response.email, responseEngineer.github)
            teamArray.push(newEngineer);
            start()

        })

}

internPrompt = (response) => {
    inquirer
        .prompt(internQuestion)
        .then((responseIntern) => {
            let newIntern = new Intern(response.name, response.id, response.email, responseIntern.school)
            teamArray.push(newIntern)
            start()

        })


}

// This takes all user info and generates the final HTML page
createTeam = (team) => {

    fs.writeFile('./dist/team.html', generatePage(teamArray, team, "UTF-8"), (err) =>
        err ? console.log(err) : console.log('Successfully created team.html!')
    )
}

// Calls the start function to begin
start();
