burger = document.querySelector('.burger');
navbar = document.querySelector('#navbar');
leftNav = document.querySelector('.navleftul')
rightNav = document.querySelector('#navright')


burger.addEventListener('click', () => {
    leftNav.classList.toggle('v-class');
    rightNav.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})