const refs = {
    range: document.querySelector("#font-size-control"),
    text: document.querySelector("#text")
}

console.log(refs.range);
refs.range.addEventListener("input", fontSizeChange);

function fontSizeChange() {
    const selectedOptionValue = refs.range.value;
    refs.text.style.fontSize = `${selectedOptionValue}px`;
}