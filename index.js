const inquirer = require("inquirer");
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');


// Here is where I will enter the prompts I want tohe ser to answer. I included inputs and lists for these prompts.
inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license if any are you using?',
    choices: ['MIT', 'Apache_2.0', 'Boot_1.0', 'BSD_3']
  },
  {
      type: "input",
      name: "description",
      message: " Describe your project is detail."
  },
  {
      type: 'input',
      name: 'installation',
      message: 'What needs to be installed to run this project?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please give instructions for proper usage of your project.'
},
{
    type: 'input',
    name: 'contributing',
    message: 'Who contributed to the creation of this project?'
},
{
    type: 'input',
    name: 'tests',
    message: 'How do I run the tests for this repo?'
},
{
    type: 'input',
    name: 'questionUsername',
    message: 'Please enter your GitHub username.'
},
{
    type: 'input',
    name: 'questionEmail',
    message: 'Please enter your email address.'
},
]).then(function(answer) {
    fs.writeFile('sampleREADME.md', markdown(answer), (err) => err ? console.log(err) : console.log('Success! You have created a new read me file!'));
})
// Above is where I create the sampleREADME and console.log a success message if the README is properly created