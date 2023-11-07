// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![Static Badge](https://img.shields.io/badge/license-${license.replace(/ /g, "_").replace("-","_")}-blue)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (license) {
    case "Apache License 2.0":
      return `https://opensource.org/licenses/Apache-2.0`; 
    case "Boost Software License 1.0":
      return `https://www.boost.org/LICENSE_1_0.txt`;
    case "BSD 3-Clause License":
      return `https://opensource.org/licenses/BSD-3-Clause`;
    case "BSD 2-Clause License":
      return `https://opensource.org/licenses/BSD-2-Clause`;
    case "Eclipse Public License 2.0":
      return `https://opensource.org/licenses/EPL-1.0`;
    case "GNU LGPL v3":
      return `https://www.gnu.org/licenses/lgpl-3.0`;
    case "MIT":
      return `https://opensource.org/licenses/MIT`;
    case "Mozilla Public License 2.0":
      return `https://opensource.org/licenses/MPL-2.0`;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license && license !== "") {
    return `<a href=${renderLicenseLink(license)}>${license}</a>`;
  } 
  return "";
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}`;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown
};
