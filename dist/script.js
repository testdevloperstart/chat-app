const chatBox = document.querySelector(".chatBox");
console.log(chatBox);
const entermessage = document.querySelector("#entermessage");
console.log(entermessage);
const msgsend = document.querySelector("#msgsend");
console.log(msgsend);


msgsend.addEventListener("click", messagedisplay);

function messagedisplay() {
  const msgvalue = entermessage.value.trim();
  if (msgvalue) {
    const ptag = document.createElement("P");
    ptag.style.Color="white"
    ptag.style.border="white"
    console.log(ptag);
    ptag.innerHTML = msgvalue;
    chatBox.appendChild(ptag);
  }
  entermessage.value = '';
  console.log(msgvalue)
}

// document.addEventListener("DOMContentLoaded", function() {
//     const chatBox = document.querySelector(".chatBox");
//     console.log(chatBox);
//     const entermessage = document.querySelector("#entermessage");
//     console.log(entermessage);
//     const msgsend = document.querySelector("#msgsend");
//     console.log(msgsend);
  
//     msgsend.addEventListener("click", messagedisplay);
  
//     function messagedisplay() {
//       const msgvalue = entermessage.value.trim();
//       if (msgvalue) {
//         const ptag = document.createElement("p");
        
//         // Set styles directly in JavaScript
//         ptag.style.margin = "5px 0";
//         ptag.style.padding = "10px";
//         ptag.style.borderRadius = "5px";
//         ptag.style.backgroundColor = "#e0e0e0";
  
//         ptag.innerHTML = msgvalue;
//         chatBox.appendChild(ptag);
        
//         // Optionally, you can also add a class for further styling if needed
//         // ptag.classList.add('message');
//       }
//       entermessage.value = '';
//       console.log(msgvalue);
//     }
//   });
  