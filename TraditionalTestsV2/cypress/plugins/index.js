/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the "pluginsFile" configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project"s config changing)
const fs = require('fs')

module.exports = (on, config) => {
  // this saves the assertion log to a txt file
  on("task", {
    writeToReport({ filename, log }) {
      fs.appendFileSync(filename, log);
      return null;
    }
  });

  on("task", {
    removeLastLog(filename) {
      fs.readFile(filename, function (error, data) {
        console.log("bifor" + data);
        var logsWithoutLastOne = data.toString().split('\n').slice(0,-1).join('\n');
        console.log("after" + logsWithoutLastOne);
        fs.writeFile(filename, logsWithoutLastOne);
      });
      return null;
    }
  });
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}