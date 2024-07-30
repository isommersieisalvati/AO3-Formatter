let lineHeight = 10;
let fontSize = 16;

function adjust(lineHeight, fontSize) {
    const style =
        document.createElement("style");
    let css = `
    .userstuff p,
    .userstuff details {
        line-height: ${lineHeight} !important;
        font-size: ${fontSize}px !important;
        }
    `;
    style.appendChild(
        document.createTextNode(css)
    );
    document.head.appendChild(style);
}

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if (
            request.action ===
            "increaseLineHeight"
        ) {
            lineHeight += 10;
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
            lineHeight -= 10;
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
            fontSize += 10;
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
            fontSize -= 10;
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
