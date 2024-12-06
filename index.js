// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message: "What is the name of your Project Title?",

    },
    {
        type:"input",
        name:"description",
        message: "Provide a description, by explaining the 5W's:?",
    },
    {
        type:"input",
        name:"installation",
        message: "What are the steps required to install your Project? Provide a step-by-step list.",

    },
    {
        type:"input",
        name:"screenshot",
        message: "Provide a path to the image that you want to use as screenshot.",
     },
     {
        type:"input",
        name:"credits",
        message: "Please provide a link where user can access the deployed application. ",

     },
     {
        type:"checkbox",
        name:"license",
        message: "Select a license applicable to this project.",
        choices: ["MIT","The Unlicense","Apache License2.0","Mozilla Public License2.0","Boost Software License1.0","none"],


     },
     {
        type:"input",
        name:"features",
        message: "Please list down any features in this application.",
       
     },
     {
        type:"input",
        name:"contribute",
        message: "State what languages associated with this application",

     },
     {
        type:"input",
        name:"author",
        message: "Provide GitHub username.",


     },
   
    {
        type:"input",
        name:"email",
        message: "Provide Email address.",

    },
    {
        type:"input",
        name:"test",
        message: "Explain the steps to run tests on your project?",

    

    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Profesional ReadME.md File...");
        writeToFile("./CLI/README.md", generateMarkdown({... responses}));
    });
        
    }

// Function call to initialize app
init();
