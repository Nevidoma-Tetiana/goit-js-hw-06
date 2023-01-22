const refs = {
  range: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.range.addEventListener(
  "input",
  (evt) => (refs.text.style.fontSize = `${evt.currentTarget.value}px`)
);
refs.text.style.fontSize = `${ref