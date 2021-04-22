'use strict';

const books = document.getElementsByClassName('book');

books[0].before(books[1]);
books[3].before(books[4]);
books[5].after(books[2]);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

const booksTitles = document.getElementsByTagName('a');
booksTitles[2].textContent = 'Книга 3. this и Прототипы Объектов';

document.querySelector('.adv').remove();

const book2List = books[1].getElementsByTagName('li');
book2List[9].after(book2List[2]);
book2List[7].after(book2List[6]);
book2List[6].after(book2List[3]);
book2List[6].after(book2List[3]);

const book5List = books[4].getElementsByTagName('li');
book5List[3].before(book5List[9]);
book5List[9].before(book5List[6]);
book5List[6].before(book5List[2]);

const book6List = books[5].getElementsByTagName('li');
console.log('book6List: ', book6List);

let chapter8 = document.createElement('li');
chapter8.textContent = 'Глава 8: За пределами ES6';
document.body.append(chapter8);
book6List[8].after(chapter8);


