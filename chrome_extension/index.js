chrome.runtime.onMessage.addListener(function(message){
    console.log(message.txt);
});
// START = {
//     summary: function() {
//         let percent = 50;

//         var text = prompt("Enter the text you want summarized", "Null");
//         alert(EXECUTIVE.administer(text, percent));
//         if(confirm("Do you want a better summary?")) {
//             percent += 10;
//             alert(EXECUTIVE.administer(text, percent));
//         } else if(confirm("Do you want a smaller summary?")) {
//             percent -= 10;
//             alert(EXECUTIVE.administer(text, percent));
//         }
//     }
// }