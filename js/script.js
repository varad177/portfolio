// side bar code

const nav = document.querySelector('.navlinks');

const hamburger = document.querySelector('.fa')
hamburger.addEventListener('click', () => {
    document.querySelector('.navlinks').classList.toggle('show')

});