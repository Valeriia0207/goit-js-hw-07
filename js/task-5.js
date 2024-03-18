function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const widgetSpan = document.querySelector(".color");

btn.addEventListener("click", event => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  widgetSpan.textContent = newColor;

});
