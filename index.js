// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    inquirer
  .prompt([
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
      name: "tableOfContents",
      message: "Enter table of contents",
      default: "Contents",
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
        name: "questions",
        message: "Enter questions",
        default: "questions",
      },
  ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
