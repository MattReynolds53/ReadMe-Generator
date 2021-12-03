// TODO: Create a function to generate markdown for README
// Required sections: Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
function generateMarkdown(data) {
  return `# ${data.title}
## License
[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

## Table of Contents
<a href="description">Description</a>
[Description](#Description)

[Installation](#Installation)

[Usage](#Usage)

[Contributing](#Contributing)

[Tests](#Tests)

[Questions](#Questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questionUsername}

<a href="https://github.com/${data.questionUsername}">GitHub Profile Link</a>


If you have further questions, please feel free to email me at ${data.questionEmail} at an appropriate time.

`;
}

module.exports = generateMarkdown;
