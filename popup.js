document
    .getElementById(
        "increaseLineHeight"
    )
    .addEventListener("click", () => {
        chrome.tabs.query(
            {
                active: true,
                currentWindow: true,
            },
            (tabs) => {
                chrome.tabs.sendMessage(
                    tabs[0].id,
                    {
                        action: "increaseLineHeight",
                    }
                );
            }
        );
    });

document
    .getElementById(
        "decreaseLineHeight"
    )
    .addEventListener("click", () => {
        chrome.tabs.query(
            {
                active: true,
                currentWindow: true,
            },
            (tabs) => {
                chrome.tabs.sendMessage(
                    tabs[0].id,
                    {
                        action: "decreaseLineHeight",
                    }
                );
            }
        );
    });

document
    .getElementById("decreaseFont")
    .addEventListener("click", () => {
        chrome.tabs.query(
            {
                active: true,
                currentWindow: true,
            },
            (tabs) => {
                chrome.tabs.sendMessage(
                    tabs[0].id,
                    {
                        action: "decreaseFont",
                    }
                );
            }
        );
    });

document
    .getElementById("increaseFont")
    .addEventListener("click", () => {
        chrome.tabs.query(
            {
                active: true,
                currentWindow: true,
            },
            (tabs) => {
                chrome.tabs.sendMessage(
                    tabs[0].id,
                    {
                        action: "increaseFont",
                    }
                );
            }
        );
    });
