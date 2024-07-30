// Function to adjust line height
function adjustLineHeight(lineHeight) {
    document.body.style.lineHeight =
        lineHeight;
}

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if (
            request.action ===
            "adjustLineHeight"
        ) {
            adjustLineHeight(
                request.lineHeight
            );
            sendResponse({
                status: "lineHeight adjusted",
            });
            console.log(
                "lineHeight adjusted"
            );
        }
    }
);
