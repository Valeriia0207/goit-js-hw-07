const ulElem = document.querySelector('#categories');
const items = document.querySelectorAll('.item');
console.log(`Кількість категорій: ${items.length}`);

items.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    console.log(categoryName);
    const categoryItems = item.querySelectorAll('ul li').length;
    console.log(categoryItems);
});
