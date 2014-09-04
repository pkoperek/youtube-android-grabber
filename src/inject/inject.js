chrome.extension.sendMessage({}, function(response) {
        var readyStateCheckInterval = setInterval(function() {
                if (document.readyState === "complete") {
                    clearInterval(readyStateCheckInterval);

                    console.log("alive");

                    $('video').each(function() {
                            var video = this;

                            for (var key in video) {
                                if (video.hasOwnProperty(key)) {
                                    console.log(key + " -> " + video[key]);
                                }
                            }

                            var id = video.attributes.getNamedItem('data-youtube-id').value;

                            console.log("Found: " + id);
                    });

                }
        }, 10);
});
