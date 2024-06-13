const chatBox = document.querySelector(".chatBox");
console.log(chatBox);
const entermessage = document.querySelector("#entermessage");
console.log(entermessage);
const msgsend = document.querySelector("#msgsend");
console.log(msgsend);

// this will connect the websocket server
const ws = new WebSocket(`ws://${window.location.host}`);

ws.onopen = ()=>{
    console.log("connected to websocket server");
}

ws.onmessage = (event) => {
    const ptag = document.createElement("div");
    ptag.style.margin = "5px 0";
    ptag.style.padding = "5px";
    ptag.style.width = "auto";
    ptag.style.border = "1px solid";
    ptag.style.borderRadius = "10px";
    ptag.style.wordWrap = "break-word";
    ptag.style.backgroundColor = "#f1f1f1"; // background color for incoming messages
    ptag.innerHTML = event.data;
    chatBox.appendChild(ptag);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
};

ws.onclose = () => {
    console.log('Disconnected from WebSocket server');
};

msgsend.addEventListener("click", () => {
    sendMessage();
});


msgsend.addEventListener("click", messagedisplay);
entermessage.addEventListener('keypress',function(event){
    if(event.key == 'Enter'){
        messagedisplay()
    }
})

function messagedisplay() {
  const msgvalue = entermessage.value.trim();
  if (msgvalue) {
    const ptag = document.createElement("div");
    // const ptag = document.querySelector("#ptag")

    ptag.style.margin = "5px 0";
    ptag.style.padding = "5px";
    ptag.style.width = "auto";
    ptag.style.border = "1px solid";
    ptag.style.borderRadius = "10px";

    // Calculate the width based on the length of the input string
    let baseWidth = 15; // Base width for a single character in pixels
    let padding = 20; // Additional padding to account for input padding and margins
    let maxWidth = 500; // Maximum width for message box
    let width = baseWidth * msgvalue.length + padding;

    // Set the calculated width or max width if exceeds threshold
    if (msgvalue.length > 600) {
      width = maxWidth;
    } else if (msgvalue.length > 200) {
      width = maxWidth;
    }

    // Set the calculated width
    ptag.style.width = `${width}px`;
    ptag.style.maxWidth = `${maxWidth}px`;
    ptag.style.wordWrap = "break-word"; // Ensure long words break to fit within the box

    console.log(ptag);
    ptag.innerHTML = msgvalue;
    chatBox.appendChild(ptag);
  }
  entermessage.value = "";
  console.log(msgvalue);
 }