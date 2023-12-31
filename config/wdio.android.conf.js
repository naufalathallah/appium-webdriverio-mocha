const path = require("path");
const { config } = require("./wdio.shared.conf");

config.port = 4723;

config.specs = ["../test/specs/android/add-note-screen*.js"];

config.capabilities = [
  {
    "appium:platformName": "Android",
    "appium:deviceName": "Nexus 5 API 27",
    "appium:platformVersion": "8.1",
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
(config.services = [
  [
    "appium",
    {
      args: {
        address: "localhost",
        port: 4723,
        relaxedSecurity: true,
      },
      logpath: "./",
    },
  ],
]),
  (exports.config = config);
