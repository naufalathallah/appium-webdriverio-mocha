describe("Android native features tests", () => {
  it("Access an activity directly", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      ".app.AlertDialogSamples"
    );

    await driver.pause(3000);

    await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
  });

  it("Dialog boxes", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      ".app.AlertDialogSamples"
    );

    await $("~OK Cancel dialog with a message").click();

    // accept alert
    console.log("alert text: ", await driver.getAlertText());
    await driver.acceptAlert();

    // pilihan klik alert lainnya
    // await $('//*[@resource-id="android:id/button1"]').click();
    // await $('//*[@resource-id="android:id/button2"]').click();
    // await driver.dismissAlert();

    await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
  });

  it("Vertical Scrolling", async () => {
    await $("~App").click();
    await $("~Activity").click();

    // scroll to end - not stable
    // await $(
    //   "android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)"
    // );
    // await $("~Secure Surfaces").click();

    // scrollTextIntoView - more stable
    await $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")'
    ).click();

    await expect($("~Secure Dialog")).toExist();
  });

  it("Horizontal scroll", async () => {
    await driver.startActivity("io.appium.android.apis", ".view.Gallery1");

    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
    );

    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()"
    );

    await driver.pause(3000);
  });

  it("Pick date", async () => {
    await driver.startActivity("io.appium.android.apis", ".view.DateWidgets1");

    const date = $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
    const currentDate = await date.getText();

    await $("~change the date").click();

    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
    );

    await $('//*[@text="10"]').click();

    await $('//*[@resource-id="android:id/button1"]').click();

    await expect(await date.getText()).not.toEqual(currentDate);
  });
});
