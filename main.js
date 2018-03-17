window.onload = function() {
  var linkMap = {
    twitter: "https://twitter.com/_matthamil",
    github: "https://github.com/matthamil",
    linkedin: "https://www.linkedin.com/in/matthamil/"
  };

  document.addEventListener("keypress", function(e) {
    var keyCode = e.keyCode;
    if (keyCode === 70 || keyCode === 102) {
      setSelected("twitter-radio");
    } else if (keyCode === 118 || keyCode === 86) {
      setSelected("github-radio");
    } else if (keyCode === 65 || keyCode === 97) {
      setSelected("linkedin-radio");
    } else if (keyCode === 13) {
      var selected = document.querySelector('input[name="link"]:checked').value;
      navigateToLink(linkMap[selected]);
    }
  });

  document.getElementById("ok-btn").addEventListener("click", function() {
    var selected = document.querySelector('input[name="link"]:checked').value;
    navigateToLink(linkMap[selected]);
  });

  function setSelected(radioBtn) {
    document.getElementById(radioBtn).checked = true;
  }

  function navigateToLink(link) {
    Object.assign(document.createElement("a"), {
      target: "_blank",
      href: link
    }).click();
  }

  dragElement(document.querySelector(".window"));

  function dragElement(elmnt) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.querySelector(".window-header")) {
      /* if present, the header is where you move the DIV from:*/
      document.queyrSelector(".window-header").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
};
