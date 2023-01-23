const listEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${listEl.length}`);

const categoriesList = listItems.forEach((item) => {
        const listItemsHead = item.firstElementChild.textContent;
        console.log(`Category: ${listItemsHead}`);
        const listItemsEl = item.lastElementChild.children;
        console.log(`Elements: ${listItemsEl.length}`);
    })
