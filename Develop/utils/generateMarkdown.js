// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;
const questions = require('../index')


function generateMarkdown (questions) {
  const readMeData = `#README
  ##${project}
  
  ##Github Username and email
  * ${username}
  * ${email}
  
  ##Description
  * ${description}

  ##license
  * ${license}

  ##Instructions
  * ${isntall}
  * ${test}
  * ${usage}
  * ${repo}
  `;
  return readMeData;
}

module.exports = generateMarkdown;