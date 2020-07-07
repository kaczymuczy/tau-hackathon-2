/* eslint-disable no-undef */
module.exports = {
    concurrency: 10,
    browser: [
        {width: 1200, height: 700, name: "chrome"},
        {width: 1200, height: 700, name: "firefox"},
        {width: 1200, height: 700, name: "edgechromium"},
        {width: 768, height: 700, name: "chrome"},
        {width: 768, height: 700, name: "firefox"},
        {width: 768, height: 700, name: "edgechromium"},
        {deviceName: "iPhone X", screenOrientation: "portrait"}
    ],
    batchName: "UFG Hackathon"
}