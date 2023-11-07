// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const gm = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is title of your Project?",
    name: "title",
  },
  {
    type: "input",
    message: "Write description about your Project.",
    name: "description",
  },
  {
    type: "input",
    message: "Instalation instructions",
    name: "install",
  },
  {
    type: "input",
    message: "Usage information",
    name: "usage",
  },
  {
    type: "list",
    message: "License",
    name: "license",
    choices: [
      "Apache License 2.0",
      "Boost Software License 1.0",
      "BSD 3-Clause License",
      "BSD 2-Clause License",
      "Eclipse Public License 2.0",
      "GNU LGPL v3",
      "MIT",
      "Mozilla Public License 2.0",
    ],
  },
  {
    type: "input",
    message: "Contribution guidelines",
    name: "contribution",
  },
  {
    type: "input",
    message: "Tests instructions",
    name: "tests",
  },
  {
    type: "input",
    message: "Questions",
    name: "question",
  },
];


const getReadMePage = (response) => `
  
  ${gm.generateMarkdown(response)} ${gm.renderLicenseBadge(response.license)}


## Description 

${response.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Tests](#tests)
- [Tests](#tests)
- [Question](#question)

## Installation 

${response.install}

## Usage 

${response.usage}

## License 

${gm.renderLicenseSection(response.license)}

## Credits 

${response.contribution}

## Tests 

${response.tests}

## Question 

${response.question}`;


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readMePageContent = getReadMePage(data);
  console.log(readMePageContent);

  fs.writeFile("./generated/" + fileName, readMePageContent, (err) =>
    err ? console.error(err) : console.log("Readme file created!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile("README.md", response);
  });
}

// Function call to initialize app
init();
