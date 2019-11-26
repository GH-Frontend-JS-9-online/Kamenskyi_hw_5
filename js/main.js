let burgerBtn = document.querySelector('.burger-button');
let burgerBtnBlock = document.querySelector('.burger-button-block');
let body = document.querySelector('body');
let menu = document.querySelector('.menu');
let active = document.querySelector('.active');
let anchor = document.querySelectorAll('.menu_ul li a');
let closeMenuBtn = document.querySelector('.close-btn');
// burgerBtn.addEventListener('click', function () {
//     menu.style.display = 'flex'
// });

burgerBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    body.style.overflowY = 'hidden';
    // burgerBtnBlock.style.display = 'none'
});
closeMenuBtn.addEventListener('click', function () {
    body.style.overflowY = 'scroll';
    menu.classList.remove('active');
    // burgerBtnBlock.style.display = 'flex'
});
for(let i = 0; anchor.length > 0; i++) {
    anchor[i].addEventListener('click', function () {
        menu.classList.remove('active');
        body.style.overflowY = 'scroll';
        // burgerBtnBlock.style.display = 'flex'
    });
}

