chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  response = {};
  if (request.action === "password_notify") {
    chrome.tabs.create({
      url: chrome.extension.getURL('password.html'),
      active: false
    }, function(tab) {
      chrome.windows.create({
        tabId: tab.id,
        type: 'popup',
        width: 323,
        height: 167,
        focused: true
      });
    });
  }
  sendResponse(response);
});

function generate_password(words, options) {
  var password = "", n;
  for(var i = 0; i < words; i++) {
    if (words < 2 || i >= (words / 2))
      password = password.concat(RFX_DATA.NOUNS[randn(RFX_DATA.NOUNS.length)]);
    else
      password = password.concat(RFX_DATA.ADJECTIVES[randn(RFX_DATA.ADJECTIVES.length)]);
  }
  options.numeric_digits = options.numeric_digits || 0;
  if (options.numeric_digits > 0) {
    for(var i = 0; i < options.numeric_digits; i++) {
      n = randn(9) + 1;
      password = n + password;
      if ((n > 1 || i > 0) && password.slice(password.length - 1) !== "s") {
        if (password.slice(password.length - 1) === "y")
          password = password.substr(0, str.length - 1) + "ies";
        else
          password = password + "s";
      }
    }
  }
  return password;
}

function randn(num) {
  return Math.floor(Math.random() * num);
}
