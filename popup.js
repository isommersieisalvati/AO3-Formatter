document
    .getElementById("apply")
    .addEventListener("click", () => {
        let lineHeight = 10;
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
                        lineHeight:
                            lineHeight,
                    }
                    // (response) => {
                    //     console.log(
                    //         response.status
                    //     );
                    // }
                );
            }
        );
    });
