let lineHeight = 10;
let fontSize = 16;

function increaseLineHeight(css) {
    const style =
        document.createElement("style");
    style.appendChild(
        document.createTextNode(css)
    );
    document.head.appendChild(style);
}

const css = `
    .userstuff p,
    .userstuff details {
        line-height: ${lineHeight} !important;
        }
    `;

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if (
            request.action ===
            "adjustLineHeight"
        ) {
            lineHeight += 10;
            increaseLineHeight(css);
            sendResponse({
                status: "lineHeight adjusted",
            });
            console.log(
                "lineHeight adjusted"
            );
        }
    }
);
