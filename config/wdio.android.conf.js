const path = require("path");
const { config } = require("./wdio.shared.conf");

config.port = 4723;

config.specs = ["./test/specs/android/add-note-*.js"];

config.capabilities = [
  {
    "appium:platformName": "Android",
    "appium:deviceName": "Nexus 5 API 33 Tiramisu",
    "appium:platformVersion": "13",
    "appium:automationName": "UIAutomator2",
    "appium:app": path.join(process.cwd(), "app/android/ColorNote+Notepad.apk"),
    "appium:autoGrantPermissions": true,
  },
];

exports.config = config;
