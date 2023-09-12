describe("Add notes", () => {
  it("skip tutorial", async () => {
    await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]'
    ).click();

    await expect($('//*[@text="Add note"]')).toBeDisplayed();
  });

  it("Add note", async () => {
    await $('//*[@text="Add note"]').click();
    await $('//*[@text="Text"]').click();

    await expect($('//*[@text="Editing"]')).toBeDisplayed();

    const noteTitle = await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]'
    );
    await noteTitle.addValue("Fav movie list");

    await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]'
    ).addValue("Cars\nOpenheimer\nNun");

    await driver.back();
    await driver.back();

    await expect(
      $(
        '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'
      )
    ).toBeDisplayed();

    await expect(
      $(
        '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'
      )
    ).toHaveText("Cars\nOpenheimer\nNun");
  });
});
