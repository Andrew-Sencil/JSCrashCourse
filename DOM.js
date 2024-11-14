// //Single element selector
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));

// //Multiple element selector
//console.log(document.querySelectorAll('.item'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello World!'
ul.children[1].innerText = 'Winter';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');

btn.style.background = 'red';