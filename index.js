const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide the installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide the usage information:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidlines:',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please provide the license you are using:'
    },
];

function generateREADME(answers) {
    return `
  # ${answers.title}
  
  ${answers.description}
  
  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Questions](#questions)
  
  ## Installation
  
  ${answers.installation}
  
  ## Usage
  
  ${answers.usage}
  
  ## Contributing
  
  ${answers.contribution}
  
  ## License
  
  ${answers.license}
  
  ## Questions
  
  If you have any questions about the project, please contact me at ${answers.email}.
    `;
  }
  
  
  inquirer.prompt(questions).then((answers) => {
    const README = generateREADME(answers);
    fs.writeFile('README.md', README, (err) =>
      err ? console.error(err) : console.log('README created!')
    );
  });
  

