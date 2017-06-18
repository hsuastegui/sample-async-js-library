const LH = require("./index.js");
describe("Site configurations", () => {
  beforeEach(() => {
    LH.setItems();
  });
  it("adds a configuration item", () => {
    LH.push("sortByPrice");
    expect(LH.getItems()).toEqual(["sortByPrice"]);
  });
  it("finds if a configuration is enabled", () => {
    LH.push("sortByPrice");
    expect(LH.isEnabled("sortByPrice")).toBe(true);
  });
  it("returns the enabled ids", () => {
    LH.push("sortByPrice");
    LH.push("showRecentlyViewed");
    expect(LH.getEnabledIDs()).toBe("AF");
  });
});
