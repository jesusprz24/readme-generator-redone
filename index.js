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
        message: 'Please provide a description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide the installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide the usage information'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidlines',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please provide the license you are using'
    },
];