// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache-blue.svg)]';
  } else if (license === 'MIT License') {
    return '[![License](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } else if (license === 'Eclipse Publlic License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Eclipse-purple.svg)]';
  } else if (license === 'Mozilla Public License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Mozilla-red.svg)]';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    return 'https://www.apache.org/licenses/LICENSE-2.0';
  } else if (license === 'MIT License') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Eclipse Publlic License 2.0') {
    return 'https://www.eclipse.org/legal/epl-2.0/';
  } else if (license === 'Mozilla Public License 2.0') {
    return 'https://www.mozilla.org/en-US/MPL/2.0/';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License 
  This application is covered under the ${license}.  
  [Link] ${renderLicenseLink(license)}`

  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}

${renderLicenseBadge(answers.license)}

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

${renderLicenseSection(answers.license)}

## Contributing
${answers.contributing}

## Test
${answers.test}

## Questions
- ${answers.email}
- ${answers.gitHub}
`;
}

module.exports = generateMarkdown;
