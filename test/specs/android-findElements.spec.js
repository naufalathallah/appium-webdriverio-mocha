describe("Android Elements Tests", () => {
  it("Find element by accessibility id", async () => {
    const appOption = await $("~App");
    await appOption.click();

    const actionBar = await $("~Action Bar");
    await expect(actionBar).toBeExisting();
  });
});
