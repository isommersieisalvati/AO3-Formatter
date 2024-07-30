const lineHeight = "3em";
const fontSize = 16;

function injectCSS(css) {
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
            injectCSS(css);
            sendResponse({
                status: "lineHeight adjusted",
            });
            console.log(
                "lineHeight adjusted"
            );
        }
    }
);
