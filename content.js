let lineHeight = 3;
let fontSize = 100;

function adjust(lineHeight, fontSize) {
    let element =
        document.querySelector(
            "#chapters"
        );
    element.style.fontSize = "2em";

    let childElements =
        element.querySelectorAll("*");

    childElements.forEach(function (e) {
        e.style.lineHeight = "5em";
    });
}

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if (
            request.action ===
            "increaseLineHeight"
        ) {
            lineHeight += 2;
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
            lineHeight -= 2;
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
            fontSize *= 0.1;
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
            "increaseLineHeight"
        ) {
            fontSize /= 0.1;
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
