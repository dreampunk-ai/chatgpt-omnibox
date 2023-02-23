
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            if (request.message === "run_script") {
                console.log(request.text);
                setTimeout(function(){
                    document.querySelector("textarea").value = request.text;
                    document.querySelector("form button").click();
                  },500);
            }   
        });

