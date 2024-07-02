// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
            {
                type: "input",
                name: "title",
                message: "Enter title",
                default: "Fun Title",
            },
            {
                type: "input",
                name: "description",
                message: "Enter description",
                default: "Hello, this is a description to my readme",
            },
            {
                type: "input",
                name: "installation",
                message: "Enter installation methods",
                default: "Install by....",
            },
            {
                type: "input",
                name: "usage",
                message: "Enter usage",
                default: "Use by...",
            },
            {
                type: "list",
                name: "license",
                message: "Enter license",
                choices: ["Apache License 2.0", "MIT License", "Eclipse Publlic License 2.0", "Mozilla Public License 2.0"]
            },
            {
                type: "input",
                name: "contributing",
                message: "Enter contribution",
                default: "You can contribute by...",
            },
            {
                type: "input",
                name: "test",
                message: "Enter test",
                default: "test",
            },
            {
                type: "input",
                name: "email",
                message: "Enter email",
                default: "Email@example.com",
            },
            {
                type: "input",
                name: "gitHub",
                message: "Enter GitHub",
                default: "https://github.com/user",
            },
        ];

        function promtUser() {
            return inquirer.prompt(questions);
        }

// TODO: Create a function to write README file
function writeToFile(fileName ,data) {
    fs.writeFileSync(fileName, data)
    console.log('Success!');
}

function buildReadme(answers) {
    return `
# ${answers.title}

//licenseBadge

## Description
${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage Information](#usage)
- [License](#license)
- [Contribution Guidelines](#contribution)
- [Test Instructions](#test)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Test
${answers.test}

## Questions
- ${answers.email}
- ${answers.gitHub}
`;
}

// TODO: Create a function to initialize app
function init() {
    promtUser()
    .then((answers) => {
        const readmeContent = buildReadme(answers);
        writeToFile('userREADME.md', readmeContent);
    })
}

// Function call to initialize app
init();
