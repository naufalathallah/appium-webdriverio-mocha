const path = require("path");
const { config } = require("./wdio.shared.conf");

config.port = 4723;

config.specs = ["../test/specs/ios/*.js"];

config.capabilities = [
  {
    platformName: "ios",
    "appium:deviceName": "iPhone 15",
    "appium:platformVersion": "17.0",
    "appium:automationName": "XCUITest",
    "appium:app": path.join(process.cwd(), "app/ios/UIKitCatalog.app.zip"),
  },
];

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = [
  [
    "appium",
    {
      args: {
        // Explicitly define the port
        port: 4723,
        relaxedSecurity: true,
      },
      logpath: "./",
      command: 'appium',
    },
  ],
];

exports.config = config;