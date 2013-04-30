$(document).ready(function() {
  $("#password > span").text(chrome.extension.getBackgroundPage().generate_password(4, {}));
});
