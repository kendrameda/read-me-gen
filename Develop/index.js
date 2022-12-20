// Imported required packages
// 'fs', 'path', 'inquirer', './utils/generateMarkdown'
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown').default

// Array of questions for user input
const questions = [
        

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
  
];


inquirer
.prompt(questions)
.then((answers) => {
    const data = generateMarkdown(answers);
    fs.writeFile('README.md', generateMarkdown, (err)  =>
        err ? console.log(err) : console.log('success!')
    )
})
  
  // Function to write README file using the user input
//   function writeToFile(fileName, data) {
  
//     // TODO:
//     // fs write function to create the README.md file
//     // path package can be used to create the file path
  
//   }
  
  // Function to initialize app
//   function init() {
  
    // TODO:
    // call inquirer prompt method for questions
    // inside .then callback
    // call generateMarkdown passing answer object as input argument
    // call writeFile passing file name and the returned value from generateMarkdown function as input arguments
  
//   }
  
//   init();
  