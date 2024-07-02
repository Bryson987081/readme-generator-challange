// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
            {
                type: "input",
                name: "title",
                message: "Enter title",
                default: "README Title",
            },
            {
                type: "input",
                name: "description",
                message: "Enter description",
                default: "Description text",
            },
            {
                type: "input",
                name: "installation",
                message: "Enter installation methods",
                default: "installation",
            },
            {
                type: "input",
                name: "license",
                message: "Enter license",
                default: "license",
            },
            {
                type: "input",
                name: "contributing",
                message: "Enter contribution",
                default: "contribution",
            },
            {
                type: "input",
                name: "test",
                message: "Enter test",
                default: "test",
            },
            {
                type: "input",
                name: "quest",
                message: "Enter questions",
                default: "questions",
            },
        ];

        function promtUser() {
            return inquirer.promt(questions);
        }

// TODO: Create a function to write README file
function writeToFile(fileName ,data) {
    fs.writeFileSync(fileName, data)
    console.log('Success!');
}

function buildReadme(answers) {
    return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- Installation
- Usage
- License
- Contributing
- Tests
- Questions

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
${answers.quest}
`;
}

// TODO: Create a function to initialize app
function init(answers) {`

`;
}

// Function call to initialize app
//init();
