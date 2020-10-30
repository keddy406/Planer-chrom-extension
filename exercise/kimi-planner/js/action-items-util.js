class ActionItems {
  addQuickActionItem = (id, text, tab, callback) => {
    let website = null;
    //link site for later
    if (id == "quick-action-2") {
      website = {
        url: tab.url,
        fav_Icon: tab.favIconUrl,
        title: tab.title,
      };
    }

    this.add(text, website, callback);
  };

  add = (text, website = null, callback) => {
    let actionItem = {
      id: uuidv4(),
      added: new Date().toString(),
      text: text,
      completed: null,
      website,
    };

    chrome.storage.sync.get(["actionItems"], (data) => {
      let items = data.actionItems;
      if (!items) {
        items = [actionItem];
      } else {
        items.push(actionItem);
      }

      chrome.storage.sync.set(
        {
          actionItems: items,
        },
        () => callback(actionItem)
      );
    });
  };
  remove(id, callback) {
    storage.get([`actionItems`], (data) => {
      let items = data.actionItems;
      let foundItemIndex = items.findIndex((item) => item.id == id);
      if (foundItemIndex >= 0) {
        items.splice(foundItemIndex, 1);
        chrome.storage.sync.set(
          {
            actionItems: items,
          },
          callback
        );
      }
    });
  }

  markUnmarkCompleted = (id, completeStatus) => {
    storage.get([`actionItems`], (data) => {
      let items = data.actionItems;
      let foundItemIndex = items.findIndex((item) => item.id == id);
      if (foundItemIndex >= 0) {
        items[foundItemIndex].completed = completeStatus;
        chrome.storage.sync.set({
          actionItems: items,
        });
      }
    });
  };

  setProgress = () => {
    chrome.storage.sync.get(["actionItems"], (data) => {
      let actionItems = data.actionItems;
      let completedItems = actionItems.filter((item) => item.completed).length;
      let totalItems = actionItems.length;
      let progress = 0;
      if (totalItems > 0) {
        progress = completedItems / totalItems;
      }

      this.setBrowerBadge(totalItems - completedItems);
      if (typeof window.circle !== "undefined") circle.animate(progress);
    });
  };

  saveName = (name, callback) => {
    storage.set(
      {
        name: name,
      },
      callback
    );
  };
  setBrowerBadge = (todoItems) => {
    let text = `${todoItems}`;
    if (todoItems > 9) {
      text = "9+";
    }
    chrome.browserAction.setBadgeText({ text: text });
  };
}
