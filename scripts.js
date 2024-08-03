function copyText(elementId) {
  var text = document.getElementById(elementId).innerText;
  var textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
  alert("Copied: " + text);
}