## Applitools Ultrafast Cross Browser Testing Hackathon

My solution for both Modern and Traditional tests, using Cypress

### Pre-requisites
1. Install Node.js from [here](https://nodejs.org/en/)
1. Create an environment variable `APPLITOOLS_API_KEY` and assign your Applitools API key to it
1. Download and install Chrome browser
1. Download and install Firefox browser
1. Download and install Edge (Chromium-based) browser

### Remarks
The Modern tests use Applitools Eyes, while the Traditional tests rely on Cypress only.
V1 and V2 of the Modern projects are the same (except for the package name).
V1 and V2 of the Traditional projects are the same (except for the package name).
The text reports from the Traditional projects don't have the "DOM Id:: <id>" field, because the assertions aren't limited to checking directly specific DOM elements. 
Sometimes the tests use chained location strategies and in other situations the attributes of multiple DOM elements are collected and only they are used in the assertion, not the DOM elements themselves.
The code block below is part of the cypress.json configuration file - it's required for Cypress tests to run on Firefox, due to https://github.com/cypress-io/cypress/issues/6813
```
    "firefoxGcInterval": {
        "runMode": null,
        "openMode": null
    },
```
More issues with Firefox can occurr, like the need to close the browser window manually after a single spec is finished.

### Getting started
1. Clone the repository with `git clone URL TO GIT REPO`  
1. Enter one of the project folders
1. Run `npm install`
1. In case of visual AI testing projects run `npx eyes-setup` 

### Running the tests
#### Running visual AI tests
For the projects ModernTestsV1 and ModernTestsV2, to run the tests:
- against AppliFashion V1 use: `npm run test:v1`
- against AppliFashion V2 use: `npm run test:v2`

#### Running visual AI tests
For the TraditionalTestsV1 and TraditonalTests2, to run the tests:
- against AppliFashion V1 with Chrome use: `npm run test:v1:chrome`
- against AppliFashion V1 with Firefox use: `npm run test:v1:firefox`
- against AppliFashion V1 with Edge use: `npm run test:v1:edge`
- against AppliFashion V2 with Chrome use: `npm run test:v2:chrome`
- against AppliFashion V2 with Firefox use: `npm run test:v2:firefox`
- against AppliFashion V2 with Edge use: `npm run test:v2:edge`

### Viewing the results from Applitools Eyes tests
[Hackathon Dashboard](https://eyes.applitools.com/app/test-results/00000251809124929000/?accountId=ODdALpl7xEGed3nUik8flA~~)

