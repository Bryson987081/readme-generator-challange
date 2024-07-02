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
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
