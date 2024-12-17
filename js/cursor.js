let mousecursor = document.querySelector('#cursor');
let navlinks = document.querySelectorAll('.header-nav-wrap li');
let ainsidenav = document.querySelectorAll('.header-nav-wrap li a');
let img = document.querySelectorAll('.intro-pic');
window.addEventListener('mousemove', cursor);

function cursor(e){
   console.log(e);
   mousecursor.style.top = e.pageY + 'px';
   mousecursor.style.left = e.pageX + 'px';

   navlinks.forEach(link => {

      link.addEventListener('mouseover', function(){
         mousecursor.classList.add('link-grow');
      });

       link.addEventListener('mouseleave', function(){
         mousecursor.classList.remove('link-grow');
      });  

});



 


}