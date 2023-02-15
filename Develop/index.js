// Imported required packages
// 'fs', 'path', 'inquirer', './utils/generateMarkdown'
const inquirer = require('inquirer');
const fs = require('fs');


// Array of questions for user input
const generateReadMe = ({ username, email, project, description, license, install, test, usage, repo}) => 
`
# ${project} Read Me

##description
${description}

## installation
${install}

## Usage
${usage}

##license
This project uses ${license} for a license.

##test
${test}

## My Socials
github: ${username}
email: ${email}
Repo: ${repo}
`

inquirer
    .prompt([
        

    {
      // question object for github user name
      type: 'input',
      message: 'What is your github username?',
      name: 'username',
    },
    {
        // question object for email
        type: 'input',
      message: 'What is your email?',
      name: 'email',
  
    },
    {
        // question object for project name
        type: 'input',
      message: 'What is your project name?',
      name: 'project',
    },
    {
        // question object for the description
        type: 'input',
      message: 'What is your project description?',
      name: 'description',
    },
    {
        // question object for license
        type: 'input',
      message: 'What license do you want to use?',
      name: 'license',
    },
    {
        // question object for the installation instruction with default
        type: 'input',
      message: 'What are the installation instructions for default?',
      name: 'install',
    },
    {
        // question object for test with default
        type: 'input',
      message: 'What should be tested in default?',
      name: 'test',
    },
    {
        // question object for usage of the repo
        type: 'input',
      message: 'What is the usage in the repo?',
      name: 'usage',
    },
    {
        // question object for contributing to the repo
        type: 'input',
      message: 'How can someone contribute to the repo?',
      name: 'repo',
    },
  
])
.then((answers) => {
    const readmePageContent = generateReadMe(answers);
    fs.writeFile('README.md', readmePageContent, (err) =>
        err ? console.log(err) : console.log('successfully created ReadMe.md!')
    )
});
  

    
