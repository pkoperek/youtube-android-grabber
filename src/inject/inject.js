chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

        console.log("alive");

        var linkElement = $('link[itemprop="url"]')

        if(linkElement != null) {
            console.log("No link to video!")
        } else {
            console.log("Found: " + linkElement.href);
        }

	}
	}, 10);
});
