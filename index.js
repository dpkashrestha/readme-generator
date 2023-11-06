// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const gm = require("./utils/generateMarkdown.js");
// const getHtmlPage = ()

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
      message: "Write Table of Contents of your Project.",
      name: "contents",
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
      choices: ["MIT", "Apache License 2.0", "Eclipse Public License 2.0"],
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

// TODO: Create a function to write README file
// const getReadMePage = (response) =>
// `"${response.title}",
// "${response.description}"
// "${response.contents}"
// "${response.install}"
// "${response.usage}"
// "${response.license}"
// "${response.contribution}"
// "${response.tests}"
// "${response.question}"
// `;

function getReadMePage(response) {
  let content = `
  
  ${gm.generateMarkdown(response)}

## Description 

${response.description}

## Table of Contents 

${response.contents}

## Installation 

${response.install}

## Usage 

${response.usage}

## License 

${response.license}

## Credits 

${response.contribution}

## Tests 

${response.tests}

## Question 

${response.question}
`;

return content;
}

function writeToFile(fileName, data) {
  const readMePageContent = getReadMePage(data);
  console.log(readMePageContent);
  
  fs.writeFile("./generated/"+fileName, readMePageContent, (err) =>
    err ? console.error(err) : console.log("Readme file created!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    // console.log(response);
    writeToFile("README.md", response);
  });
}

// Function call to initialize app
init();
