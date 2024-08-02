let lineHeight = 3;
let fontSize = 100;

function adjust(lineHeight, fontSize) {
    // const style =
    //     document.createElement("style");
    // let css = `
    // .userstuff p,
    // .userstuff details {
    //     line-height: ${lineHeight} !important;
    //     font-size: ${fontSize}% !important;
    //     }
    // `;
    // style.appendChild(
    //     document.createTextNode(css)
    // );
    // document.head.appendChild(style);
    let element =
        document.querySelector(
            "#chapters"
        );
    console.log(element);
    element.style.fontSize = "2em";
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
