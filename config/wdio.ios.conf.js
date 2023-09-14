const path = require("path");
const { config } = require("./wdio.shared.conf");

config.port = 4723;

config.specs = ["./test/specs/ios/*.js"];

config.capabilities = [
  {
    platformName: "ios",
    "appium:deviceName": "iPhone 12",
    "appium:platformVersion": "14.5",
    "appium:automationName": "XCUITest",
    "appium:app": path.join(process.cwd(), "app/android/ColorNote+Notepad.apk"),
    "appium:autoGrantPermissions": true,
  },
];

exports.config = config;
