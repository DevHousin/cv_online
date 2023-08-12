const myTextElement = document.getElementById("myNumber");
const myTextElement2 = document.getElementById("myNumber2");
const copyButton = document.getElementById("copyButton");
const copyButton2 = document.getElementById("copyButton2");

copyButton.addEventListener("click", copyNumber);
copyButton2.addEventListener("click", copyNumber);

function copyNumber(){
  const textToCopy = myTextElement.innerText;
  // Create a temporary textarea element to hold the text and copy it to clipboard
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = textToCopy;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
  
  // Provide user feedback (optional)
  copyButton.textContent = "¡Copiado!";
  copyButton2.textContent = "¡Copied!";
  setTimeout(function () {
    copyButton.textContent = "Copiar";
    copyButton2.textContent = "Copy";
  }, 1500); // Reset the button text after 1.5 seconds
}
