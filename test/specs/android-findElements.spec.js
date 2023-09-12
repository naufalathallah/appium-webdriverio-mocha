describe("Android Elements Tests", () => {
  it("Find element by accessibility id", async () => {
    const appOption = await $("~App");
    await appOption.click();

    const actionBar = await $("~Action Bar");
    await expect(actionBar).toBeExisting();
  });

  it("Find element by class name", async () => {
    const className = await $("android.widget.TextView");
    console.log(await className.getText());

    await expect(className).toHaveText("API Demos");
  });

  it("Find element by xpath, resource id, text", async () => {
    await $("~App").click();
    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
    await $(
      '//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]'
    ).click();
    await $('//android.widget.TextView[@text="Command two"]').click();

    const textAssertion = await $("//android.widget.TextView");
    await expect(textAssertion).toHaveText("You selected: 1 , Command two");
  });

  it("Find element by UiAutomator", async () => {
    await $("~App").click();
    // by text contains
    await $('android=new UiSelector().textContains("Alert")').click();
  });

  it("Find multiple elements", async () => {
    const expectedList = [
      "API Demos",
      "Access'ibility",
      "Accessibility",
      "Animation",
      "App",
      "Content",
      "Graphics",
      "Media",
      "NFC",
      "OS",
      "Preference",
      "Text",
    ];
    const actualList = [];

    // find multiple
    const textList = await $$("android.widget.TextView");

    // loop
    for (const element of textList) {
      actualList.push(await element.getText());
    }

    // asert list
    await expect(actualList).toEqual(expectedList);
  });

  it("Input text", async () => {
    // Get window size
    const { height } = await driver.getWindowSize();

    // Scroll down by swiping from y=height*0.8 to y=height*0.2
    await driver.touchPerform([
      { action: "press", options: { x: 0, y: height * 0.8 } },
      { action: "wait", options: { ms: 1000 } },
      { action: "moveTo", options: { x: 0, y: height * 0.2 } },
      { action: "release" },
    ]);

    await $("~Views").click();
    await $("~Auto Complete").click();
    await $('//android.widget.TextView[@content-desc="1. Screen Top"]').click();

    // enter country name
    const textField = await $(
      '//*[@resource-id="io.appium.android.apis:id/edit"]'
    );
    await textField.addValue("Canada");

    // verify
    await expect(textField).toHaveText("Canada");
  });
});
