// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "question1",
    message: "When was the last time you created a new repo or pushed a commit to your GitHub account?",
    // I found that some interviewers are not actual developers but will go into the GitHub accound and review the frequency/history of our git commits and activity. A mentor told me not to lie and that they won't take you as seriously if you're not actively working on projects in your repos, esp. after graduation. - jen 3/2/2023
  },
  {
    type: "input",
    name: "description",
    message: "Give a brief description of what the project is:",
  },
  {
    type: "input",
    name: "purpose",
    message:
      "What is the intended purpose of the application? What problem is it trying to solve?",
  },
  {
    type: "input",
    name: "use",
    message:
      "What functions will the user need to use the application once it is installed?",
  },
  {
    type: "input",
    name: "license",
    message: "What license is applied to this project?",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "repoName",
    message: "What is the name of the repository on github?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const content = `
# ${data.title}
## Table of Contents
1.[Description and Purpose](#description)

2.[Installation](#installation)

3.[Usage](#usage)

4.[Contribution](#contribution)

5.[License](#license)

6.[Questions](#questions)

## Description
${data.description}

${data.purpose}

## Installation
You can install this application by forking the repository from github.com/${data.githubUsername}/${data.repoName} and opening the repository in your text editor.  You will also want the LTS version of NPM so the node works.

## Usage
Functions that you will use to to use the application once you have installed it: 
${data.use}

## Contribution
You can contribute to this application by opening a pull request at github.com/${data.githubUsername}/${data.repoName}.  Currently there are no rules or standards for contribution.

## License
${data.license}

## Questions
Known erros and other issues can be raised to the repository on github at github.com/${data.githubUsername}/${data.repoName} , or can be sent to my github profile at github.com/${data.githubUsername}. As last resort, questions can be emailed to me directly at ${data.email}
    `;
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`README.md file generated successfully`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", data);
  });
}
// Function call to initialize app
init();
