let lineHeight = 1.125;
let fontSize = 1;
let maxWidth = 100;
let isIndented = false;

function adjust(
    lineHeight,
    fontSize,
    maxWidth
) {
    let element =
        document.querySelector(
            "#workskin"
        );

    document.querySelector(
        "#chapters"
    ).style.margin = "0 auto";

    element.style.fontSize =
        fontSize + "em";

    element.style.maxWidth =
        maxWidth + "%";

    let childElements =
        element.querySelectorAll("*");

    childElements.forEach(function (e) {
        e.style.lineHeight = lineHeight;
    });
}

function indentation() {
    let element =
        document.querySelector(
            "#chapters"
        );

    if (isIndented) {
        element.style.textIndent =
            "0em";
        isIndented = false;
    } else {
        element.style.textIndent =
            "2em";
        isIndented = true;
    }
}

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if (
            request.action === "indent"
        ) {
            indentation();
            sendResponse({
                status: "Indented.",
            });
        }
    }
);

function handleAction(
    action,
    lineHeightAdjustment,
    fontSizeMultiplier,
    maxWidthAdjustment,
    statusMessage
) {
    return (
        request,
        sender,
        sendResponse
    ) => {
        if (request.action === action) {
            if (
                lineHeightAdjustment !==
                undefined
            ) {
                lineHeight +=
                    lineHeightAdjustment;
            }
            if (
                fontSizeMultiplier !==
                undefined
            ) {
                fontSize *=
                    fontSizeMultiplier;
            }
            if (
                maxWidthAdjustment !==
                undefined
            ) {
                maxWidth +=
                    maxWidthAdjustment;
            }
            adjust(
                lineHeight,
                fontSize,
                maxWidth
            );
            sendResponse({
                status: statusMessage,
            });
        }
    };
}

chrome.runtime.onMessage.addListener(
    handleAction(
        "increaseLineHeight",
        0.5,
        undefined,
        undefined,
        "Line height increased"
    )
);

chrome.runtime.onMessage.addListener(
    handleAction(
        "decreaseLineHeight",
        -0.5,
        undefined,
        undefined,
        "Line height decreased"
    )
);

chrome.runtime.onMessage.addListener(
    handleAction(
        "increaseFont",
        undefined,
        1.1,
        undefined,
        "Font size increased"
    )
);

chrome.runtime.onMessage.addListener(
    handleAction(
        "decreaseFont",
        undefined,
        0.9,
        undefined,
        "Font size decreased"
    )
);

chrome.runtime.onMessage.addListener(
    handleAction(
        "increaseMaxWidth",
        undefined,
        undefined,
        10,
        "Max width increased"
    )
);

chrome.runtime.onMessage.addListener(
    handleAction(
        "decreaseMaxWidth",
        undefined,
        undefined,
        -10,
        "Max width decreased"
    )
);
