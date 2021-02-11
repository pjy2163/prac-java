
const body = document.body;

const nWidth = window.innerWidth;
const bigWidth = Math.floor(nWidth * 1.5);
const smallWidth = Math.floor(nWidth * 0.8);

function resize() {
  const nWidth = window.innerWidth;

  if (nWidth > bigWidth) {
    body.className = "one";
    console.log(body);
  } else if (nWidth < smallWidth) {
    body.className = "two";
    console.log(body);
  } else {
    body.className = "three";
    console.log(body);
  }
}

window.addEventListener("resize", resize);
