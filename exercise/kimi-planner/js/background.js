let actionItemsUtil = new ActionItems();

chrome.contextMenus.create({
  id: "LinkSiteMenu",
  title: "Link site for later",
  contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId == "LinkSiteMenu") {
    actionItemsUtil.addQuickActionItem(
      "quick-action-2",
      "Read this site",
      tab,
      () => {
        actionItemsUtil.setProgress();
      }
    );
  }
});

chrome.runtime.onInstalled.addListener((details) => {
  //initialize actions to []
  if (details.reason == "install") {
    chrome.storage.sync.set({
      actionItems: [],
    });
  }
});
