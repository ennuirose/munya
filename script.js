// function showMessage(message) {
//   const messageDiv = document.getElementById("message");
//   messageDiv.textContent = message;
//   messageDiv.style.visibility = "visible";
// }
const messageText = "You are a Woman too good for God alone";
let index = 0;
let isTyping = false;

function showMessage() {
  const messageElem = document.getElementById("message");
  const heartElem = document.getElementById("heart");

  // Reset the message and hide the heart when clicked again
  if (!isTyping) {
    index = 0;
    messageElem.innerHTML = "";
    heartElem.style.display = "none";
    isTyping = true; // Prevent multiple clicks causing issues
    typeMessage();
  }

  function typeMessage() {
    if (index < messageText.length) {
      messageElem.innerHTML += messageText.charAt(index);
      index++;
      setTimeout(typeMessage, 100); // Adjust typing speed here
    } else {
      heartElem.style.display = "inline"; // Show heart after message
      isTyping = false; // Allow retyping when clicked again
    }
  }
}
