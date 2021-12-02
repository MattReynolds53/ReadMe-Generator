const inquirer = require("inquirer");
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
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
    type: 'list',
    name: 'license',
    message: 'What license if any are you using?',
    choices: ['MIT', 'Apache_2.0', 'Boot_1.0', 'BSD_3']
  },
]).then(function(answer) {
    fs.writeFile('README.md', markdown(answer), (err) => err ? console.log(err) : console.log('Success! You have created a new read me file!'));
})
