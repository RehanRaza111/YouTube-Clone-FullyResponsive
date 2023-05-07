
const menuIcon = document.querySelector('.menu-icon');
const sideBar = document.querySelector('.sidebar');
const container = document.querySelector('.container');

menuIcon.onclick = function () {
    
    sideBar.classList.toggle('small-sidebar');
    container.classList.toggle('large-container');
}

