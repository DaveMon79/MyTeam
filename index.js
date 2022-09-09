const inquirer = require("inquirer")
const fs = require("fs")
const generateHTML = require("./src/generateHTML")
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const myTeam = []

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
        name: 'job',
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



start = () => {
    inquirer
        .prompt(startQuestion)
        .then((response) => {

            if (response.start === 'Add employee') {
                employeeNew()
            }
            else if (response.start === 'Create MyTeam') {
                createTeam()
        }})

}

const employeeNew = () => {
    inquirer
        .prompt(employeeQuestions)
        .then((response) => {

            console.log(response)
            if (response.jobTitle === "Manager") {
                managerNew(response)
            }
            else if (response.jobTitle === "Engineer") {
                engineerNew(response)
            }
            else if (response.jobTitle === "Intern") {
                internNew(response)
            }
        })
}


managerNew = (response) => {
    inquirer
        .prompt(managerQuestion)
        .then((responseManager) => {
            let newManager = new Manager(response.name, response.id, response.email, responseManager.office)
            myTeam.push(newManager);
            start()
        })

}


engineerNew = (response) => {
    inquirer
        .prompt(engineerQuestion)
        .then((responseEngineer) => {
            let newEngineer = new Engineer(response.name, response.id, response.email, responseEngineer.github)
            myTeam.push(newEngineer);
            start()

        })

}

internNew = (response) => {
    inquirer
        .prompt(internQuestion)
        .then((responseIntern) => {
            let newIntern = new Intern(response.name, response.id, response.email, responseIntern.school)
            myTeam.push(newIntern);
            start()


        })


}

createTeam = () => {
    fs.writeFile('./dist/team.html', generateHTML(response), (err) =>
        err ? console.log(err) : console.log('Successfully created test.html!')
    )
}

start();



