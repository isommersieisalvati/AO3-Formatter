function addClickListener(
    buttonId,
    action
) {
    document
        .getElementById(buttonId)
        .addEventListener(
            "click",
            () => {
                chrome.tabs.query(
                    {
                        active: true,
                        currentWindow: true,
                    },
                    (tabs) => {
                        chrome.tabs.sendMessage(
                            tabs[0].id,
                            {
                                action,
                            }
                        );
                    }
                );
            }
        );
}

addClickListener(
    "increaseLineHeight",
    "increaseLineHeight"
);
addClickListener(
    "decreaseLineHeight",
    "decreaseLineHeight"
);
addClickListener(
    "decreaseFont",
    "decreaseFont"
);
addClickListener(
    "increaseFont",
    "increaseFont"
);
addClickListener("indent", "indent");
