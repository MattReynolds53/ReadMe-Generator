// TODO: Create a function to generate markdown for README
// This function pulls the information entered by the user in the integrated terminal and displays it to the appropriate section.
// The Table of Contents sections has links that take the user to the respective section of the page. I used anchor tags and divs to link the Table of Contents section with the various sections of the page.
// I utilized string interpolation to pull the inputs from the prompts and display it to the correct sections of this sampleREADME.
function generateMarkdown(data) {
  return `# ${data.title}
[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

## Table of Contents
<a href="#description">Description</a>

<a href="#installation">Installation</a>

<a href="#usage">Usage</a>

<a href="#license">License</a>

<a href="#contributing">Contributing</a>

<a href="#tests">Tests</a>

<a href="#questions">Questions</a>

<div id="description"></div>

## Description
${data.description}

<div id="installation"></div>

## Installation
${data.installation}

<div id="usage"></div>

## Usage
${data.usage}

<div id="license"></div>

## License
This application is covered under the ${data.license} license.

<div id="contributing"></div>

## Contributing
${data.contributing}

<div id="tests"></div>

## Tests
${data.tests}

<div id="questions"></div>

## Questions
${data.questionUsername}

<a href="https://github.com/${data.questionUsername}">GitHub Profile Link</a>


If you have further questions, please feel free to email me at ${data.questionEmail} at an appropriate time.

`;
}

module.exports = generateMarkdown;
