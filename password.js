var PASSWORD_CONTANER = (function() {
  function check() {
    forms = $("form"); // Retrieve all forms on page
    for(var i = 0; i < forms.length; i++) {
      // Check if form has multiple password fields
      if (forms.eq(i).find("input[type=password]").length > 1) {
        chrome.runtime.sendMessage({"action": "password_notify"}, function(response) {});
        break;
      }
    }
  }

  var itself = {};
  itself.check = check;
  return itself;
}());

PASSWORD_CONTANER.check();
