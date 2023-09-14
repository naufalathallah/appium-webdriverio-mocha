const AddNoteScreen = require("../../screenobjects/android/add-note.screen");

describe("Add Notes", () => {
  before(async () => {
    await AddNoteScreen.skipBtn.click();

    await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
  });

  beforeEach(async () => {
    console.log("before each hook");
  });

  after(async () => {
    console.log("after hook");
  });

  afterEach(async () => {
    console.log("after each hook");
  });

  it("add a note, save changes & verify note", async () => {
    await AddNoteScreen.addNoteTxt.click();
    await AddNoteScreen.textOption.click();
    await expect(AddNoteScreen.textEditing).toBeDisplayed();

    // add note title
    await AddNoteScreen.noteHeading.addValue("Anime List");

    // add note body
    await AddNoteScreen.noteBody.addValue("Naruto\nOnePiece\nAOT");

    // save the changes
    await AddNoteScreen.saveNote();

    // assertion
    await expect(AddNoteScreen.editBtn).toBeDisplayed();
    await expect(AddNoteScreen.viewNote).toHaveText("Naruto\nOnePiece\nAOT");
  });
});
