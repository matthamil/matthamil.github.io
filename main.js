document.addEventListener("keypress", function(e) {
  var keyCode = e.keyCode;
  if (keyCode === 70 || keyCode === 102) {
    document.getElementById("twitter-radio").checked = true;
  } else if (keyCode === 118 || keyCode === 86) {
    document.getElementById("github-radio").checked = true;
  } else if (keyCode === 65 || keyCode === 97) {
    document.getElementById("linkedin-radio").checked = true;
  }
});
