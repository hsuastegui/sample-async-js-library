let items = typeof LH !== "undefined" && Array.isArray(LH) ? LH : [];
const lib = {
  getItems: () => {
    return items;
  },
  setItems: (arr = []) => {
    items = arr;
  },
  push: item => {
    items.push(item);
  },
  isEnabled: item => {
    return items.indexOf(item) > -1 ? true : false;
  },
  getEnabledIDs: () => {
    const itemsMap = {
      sortByPrice: "A",
      showRecentlyViewed: "F"
    };
    let result = "";
    items.map(item => {
      if (itemsMap[item]) {
        result += itemsMap[item];
      }
    });
    return result;
  }
};
module.exports = lib;
