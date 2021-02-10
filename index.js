const title = document.querySelector("#title");
const superEventHandler = {
  mouseover: function () {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },

  mouseleave: function () {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },

  resize: function () {
    title.innerText = "You just resized!";
    title.style.color = colors[2];
  },

  rightClick: function () {
    title.innerText = "You was a right click!";
    title.style.color = colors[3];
  }
};
title.addEventListener("mouseover", superEventHandler.mouseover);
title.addEventListener("mouseleave", superEventHandler.mouseleave);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("rightClick", superEventHandler.rightClick);

function init() {}
init();
