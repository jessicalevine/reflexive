var config = {
  words: 4,
  options: {}
}

$(document).ready(function() {
  set_password();

  $("#new_pwd").click(set_password);
  $("#add_num").click(function() {
    config.options = {
      numeric_digits: 1
    }
    set_password();
  });
});

function set_password() {
  $("#password > span").text(get_password());
}
function get_password() {
  return chrome.extension.getBackgroundPage().generate_password(config.words, config.options);
}
