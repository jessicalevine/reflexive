var PASSWORD_CONTANER = (function() {
  function check() {
    if ($("input[type=password]").length > 1) {
      get_password(4, {});
    }
  }

  function dropdown(data) {
    alert(data.password);
  }

  function get_password(words, options) {
    chrome.runtime.sendMessage({"words": words, "options": options}, dropdown);
  }
  
  var itself = {};
  itself.check = check;
  return itself;
}());

PASSWORD_CONTANER.check();
