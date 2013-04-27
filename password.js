var PASSWORD_CONTANER = (function() {
  function check() {
    forms = $("form"); // Retrieve all forms on page
    for(var i = 0; i < forms.length; i++) {
      // Check if form has multiple password fields
      if (forms.eq(i).find("input[type=password]").length > 1) {
        get_password(4, {});
        break;
      }
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
