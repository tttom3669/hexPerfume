const mobile_bar = document.querySelector('.mobile-bar');
const mobile_navbar = document.querySelector('.mobile-navbar');
mobile_bar.addEventListener('click',()=>{
    mobile_navbar.classList.toggle('d-md-block');
});