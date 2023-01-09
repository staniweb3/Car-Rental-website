let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}
window.onscroll = () => {
    menu.classList.remove('bx-x')
    navbar.classList.remove('active')
}

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay:400,
    reset:true
})

sr.reveal('.text',{delay: 200, orgin: 'top'})
sr.reveal('.form-container form',{delay: 800, orgin: 'left'})
sr.reveal('.heading',{delay: 800, orgin: 'top'})
sr.reveal('.ride-container .box',{delay: 600, orgin: 'top'})
sr.reveal('.services-container .box',{delay: 600, orgin: 'top'})
sr.reveal('.about-container .box',{delay: 600, orgin: 'top'})
sr.reveal('.reviews-container',{delay: 600, orgin: 'top'})
sr.reveal('.newsletter-container',{delay: 400, orgin: 'bottom'})