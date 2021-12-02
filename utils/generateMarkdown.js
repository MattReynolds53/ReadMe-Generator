// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
[Description](#Description)

[Installation](#Installation)

## Description
${data.description}

## Installation
${data.installation}

## License
[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

`;
}

module.exports = generateMarkdown;
