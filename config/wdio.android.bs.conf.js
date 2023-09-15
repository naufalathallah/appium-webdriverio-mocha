const { config } = require("./wdio.shared.conf");

config.user = process.env.BROWSERSTACK_USER;

config.key = process.env.BROWSERSTACK_KEY;

config.specs = ["./test/specs/android/add-note-screen*.js"];

config.capabilities = [
  {
    "appium:platformName": "Android",
    "appium:deviceName": "Google Pixel 3",
    "appium:platformVersion": "10.0",
    "appium:automationName": "UIAutomator2",
    "appium:app": "bs://1e802325b2d0f5fb87e1f2dff1f44a2512746db",
    "appium:autoGrantPermissions": true,
  },
];

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
(config.services = ["browserstack"]), (exports.config = config);
