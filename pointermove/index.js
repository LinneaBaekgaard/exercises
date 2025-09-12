console.log("Hey");
const bgPointer = document.querySelector("body");
bgPointer.addEventListener("mousemove", mouseMove);

function mouseMove(evt) {
  const procenter = ((evt.clientX / window.innerWidth) * 100).toFixed(2);
  console.log("procenter", procenter);
  bgPointer.style.setProperty("--pointerX", procenter);
}
