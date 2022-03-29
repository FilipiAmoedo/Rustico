var btnNav = document.querySelector ('.btn-nav');
var nav = document.querySelector ('.nav');

console.log(btnNav);
console.log(nav);

btnNav.addEventListener('click',function(){
   
    nav.classList.toggle('nav-open');
    btnNav.classList.toggle('x');
});