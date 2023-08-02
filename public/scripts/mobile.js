const mobileMenuBtnElement = document.getElementById('mobile-menu-btn');
const mobileMenu =  document.getElementById('mobile-menu');


mobileMenuBtnElement.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('open')
})