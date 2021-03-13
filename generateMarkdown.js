// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
return `![GitHub license](https://img.shields.io/badge/license-${encodeURI(license)}-orange)`
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `using the ${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

${data.description}, 


${renderLicenseBadge(data.license)} 

${renderLicenseSection(data.license)} 

${data.contributing} 

${data.tests} `;
}

module.exports = generateMarkdown;
