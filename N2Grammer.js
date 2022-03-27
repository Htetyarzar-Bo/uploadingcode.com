var Showbar = document.getElementById('show-menu');
var Hidebar = document.getElementById('hide-menu');
var sidebar = document.getElementById('nav-menu');

Showbar.addEventListener('click',function(){
    sidebar.classList.add('active');
})
Hidebar.addEventListener('click',function(){
    sidebar.classList.remove('active');
    
})