console.log("ready to rock and roll")
chrome.runtime.onMessage.addListener(function(message) {
    if (message.txt === "summarize") {
        let percent = 50;
        
        var text = prompt("Enter the text you want summarized", "Null");
        alert(EXECUTIVE.administer(text, percent));
        let better = confirm("Do you want a better summary?");
        while(better) {
            percent += 10;
            alert(EXECUTIVE.administer(text, percent));
            better = confirm("Do you want a better summary?");
        }

        let worse = confirm("Do you want a smaller summary?");
        while(worse) {
            percent -= 10;
            alert(EXECUTIVE.administer(text, percent));
            worse = confirm("Do you want a smaller summary?");
        }
    }
});