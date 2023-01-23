const refs = {
  button: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  colorName: document.querySelector(".color"),
}

refs.button.addEventListener("click", () => {
  refs.button.addEventListener("click", getRandomHexColor);
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.colorName.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
