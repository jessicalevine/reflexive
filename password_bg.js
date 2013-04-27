chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var password = generate_password(request.words, request.options);
  sendResponse({"password": password});
});

function generate_password(words, options) {
  var password = "";
  for(var i = 0; i < words; i++) {
    if (words < 2 || i >= (words / 2))
      password = password.concat(RFX_DATA.NOUNS[randn(RFX_DATA.NOUNS.length)]);
    else
      password = password.concat(RFX_DATA.ADJECTIVES[randn(RFX_DATA.ADJECTIVES.length)]);
  }
  return password;
}

function randn(num) {
  return Math.floor(Math.random() * num);
}
