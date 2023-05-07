
const menuIcon = document.querySelector('.menu-icon');
const sideBar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const largeFooter =document.querySelector('.footer')

menuIcon.onclick = function () {
    
    sideBar.classList.toggle('small-sidebar');
    container.classList.toggle('large-container');
    largeFooter.classList.toggle('large-footer');
}

