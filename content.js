let lineHeight = 1;
let fontSize = 1;

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

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if (
            request.action ===
            "increaseLineHeight"
        ) {
            lineHeight += 0.5;
            adjust(
                (lineHeight =
                    lineHeight),
                (fontSize = fontSize)
            );
            sendResponse({
                status: "lineHeight adjusted",
            });
        }
    }
);

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if (
            request.action ===
            "decreaseLineHeight"
        ) {
            lineHeight -= 0.5;
            adjust(
                (lineHeight =
                    lineHeight),
                (fontSize = fontSize)
            );
            sendResponse({
                status: "lineHeight adjusted",
            });
        }
    }
);

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if (
            request.action ===
            "increaseFont"
        ) {
            fontSize *= 1.1;
            adjust(
                (lineHeight =
                    lineHeight),
                (fontSize = fontSize)
            );
            sendResponse({
                status: "Font size increased.",
            });
        }
    }
);

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if (
            request.action ===
            "decreaseFont"
        ) {
            fontSize *= 0.9;
            adjust(
                (lineHeight =
                    lineHeight),
                (fontSize = fontSize)
            );
            sendResponse({
                status: "Font size decreased.",
            });
        }
    }
);
