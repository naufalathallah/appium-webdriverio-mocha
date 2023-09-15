const { config } = require("./wdio.shared.conf");

config.user = process.env.BROWSERSTACK_USER;

config.key = process.env.BROWSERSTACK_KEY;

config.specs = ["../test/specs/android/add-note-screen*.js"];

config.capabilities = [
  {
    platformName: "Android",
    "appium:deviceName": "Google Pixel 3",
    "appium:platformVersion": "10.0",
    "appium:automationName": "UIAutomator2",
    "appium:app": "bs://3e27f0731683eba9f9405049dd33698ff100a020",
    "appium:autoGrantPermissions": true,
  },
];

(config.services = ["browserstack"]), (exports.config = config);
