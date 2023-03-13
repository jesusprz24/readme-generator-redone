function generateREADME(answers) {
  return `
# ${answers.title}

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
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
