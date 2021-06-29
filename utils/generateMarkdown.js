// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if
    (
    (license = 'agpl-3.0') ||
    (license = 'gpl-3.0') ||
    (license = 'lgpl-3.0') ||
    (license = 'mpl-2.0') ||
    (license = 'apache-2.0') ||
    (license = 'mit') ||
    (license = 'bsl-1.0')
  ) {
    return `
      [${license}](https://choosealicense.com/licenses/${license})
      `;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseLink(data.license)}

  ## Contributing

  ${data.contribute}

  ## Tests

  ${data.test}

  ## Questions

  Please contact me using the following links:

  [GitHub](https://github.com/${data.githubUsername})

  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
