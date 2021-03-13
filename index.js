// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./generateMarkdown");
const File = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Write a brief description of your project: ",
    },
    {
      type: "input",
      name: "installation",
      message: "Describe the installation process if any: ",
    },
    {
      type: "input",
      name: "usage",
      message: "What is this project usage for?",
    },
    {
      type: "list",
      name: "license",
      message: "Chose the appropriate license for this project: ",
      choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Who are the contributors of this projects?",
    },
    {
      type: "input",
      name: "tests",
      message: "Is there a test included?",
    },
    {
      type: "input",
      name: "questions",
      message: "What do I do if I have an issue? ",
    },
    {
      type: "input",
      name: "username",
      message: "Please enter your GitHub username: ",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email: ",
    },
  ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Success! Your README.md file has been generated");
  });
}

//const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
  try {
    // Prompt Inquirer questions
    const userResponses = await promptUser();
    console.log("Your responses: ", userResponses);
    console.log(
      "Thank you for your responses! Fetching your GitHub data next..."
    );

    // Call GitHub api for user info
    //const userInfo = await api.getUser(userResponses);
    //console.log("Your GitHub user info: ", userInfo);

    // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
    console.log("Generating your README next...");
    const markdown = generateReadme(userResponses);
    console.log(markdown);

    // Write markdown to file
    await File("ExampleREADME.md", markdown);
  } catch (error) {
    console.log(error);
  }
}

init();
