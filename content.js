let lineHeight = 1.125;
let fontSize = 1;
let isIndented = false;

function adjust(lineHeight, fontSize) {
    let element =
        document.querySelector(
            "#chapters"
        );
    element.style.fontSize =
        fontSize + "em";

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
            adjust(
                lineHeight,
                fontSize
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
        "Line height increased"
    )
);

chrome.runtime.onMessage.addListener(
    handleAction(
        "decreaseLineHeight",
        -0.5,
        undefined,
        "Line height decreased"
    )
);

chrome.runtime.onMessage.addListener(
    handleAction(
        "increaseFont",
        undefined,
        1.1,
        "Font size increased"
    )
);

chrome.runtime.onMessage.addListener(
    handleAction(
        "decreaseFont",
        undefined,
        0.9,
        "Font size decreased"
    )
);
