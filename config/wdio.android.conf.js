const path = require("path");
const { config } = require("./wdio.shared.conf");

config.port = 4723;

config.specs = ["../test/specs/android/add-note-screen*.js"];

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

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
(config.services = ["appium"]), (exports.config = config);
