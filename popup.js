document
    .getElementById("incrsLineHeight")
    .addEventListener("click", () => {
        console.log(
            "lineHeight adjusted"
        );

        chrome.tabs.query(
            {
                active: true,
                currentWindow: true,
            },
            (tabs) => {
                chrome.tabs.sendMessage(
                    tabs[0].id,
                    {
                        action: "adjustLineHeight",
                    }
                );
            }
        );
    });
