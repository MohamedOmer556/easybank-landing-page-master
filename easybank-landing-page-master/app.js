const nav = document.querySelector('.nav-bar');
const navOpen = document.querySelector('.burger-open');
const navClose = document.querySelector('.burger-close');

navOpen.addEventListener('click', ()=>{
    nav.classList.add('active');
    document.body.classList.add('hide');
});
navClose.addEventListener('click', ()=>{
    nav.classList.remove('active');
    document.body.classList.remove('hide');
});