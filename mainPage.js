const { default: inquirer } = require("inquirer");

function generateREADME(answers) {
    return
    ${answers.title}

    `${answers.description}

    ## Table of Contents 

    - [Installation](#installation)
    - [Usage](#usage)
   - [contribution](#constribution)
   - [License](license)
   - [Questions](#questions)

   ## Installation

   ${answers.installation}

   ## Usage

   ${answers.usage}

   ## License

   ${answers.license}

   ## Questions

   If you have any questions, do not contact me .
   `;
}

inquirer.prompt(questions).then({answers} => {
    const README = generateREADME(answers);
    FileSystem.writeFile('README.md', README, (err) =>
    err ? console.error(err) : console.log('README created!')
    );
});
