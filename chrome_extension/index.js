chrome.runtime.onMessage.addListener(function(message) {
    if (message.txt === "summarize") {
        let percent = 50;
        
        var text = prompt("Enter the text you want summarized", "Null");
        alertMessage(EXECUTIVE.administer(text, percent));
        
        let better = confirm("Do you want a better summary?");
        while(better) {
            percent += 10;
            alertMessage(EXECUTIVE.administer(text, percent));
            better = confirm("Do you want a better summary?");
        }

        let worse = confirm("Do you want a smaller summary?");
        while(worse) {
            percent -= 10;
            alertMessage(EXECUTIVE.administer(text, percent));
            worse = confirm("Do you want a smaller summary?");
        }
    }
});

function alertMessage(summary) {
    if (summary.length > 1000){
        let pages = Math.trunc(summary.length / 1000) + 1;
        let firstIndex = 0;
        let lastIndex = 995; //1 / 2 \n
        for(var i = 1; i < pages + 1; i++) {
            alert(i + "/" + pages + "\n" + summary.substring(firstIndex, lastIndex));
            fisrtIndex = lastIndex;
            lastIndex += 995;
        }
    }
}