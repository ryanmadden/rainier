(function() {

})();

window.onload = function() {
  var menuTrigger = document.getElementById('menu-trigger');  
  menuTrigger.onclick = function(){
    var menuSlide = document.getElementById('menu-slide');
    if (!menuSlide.classList.contains('menu-open')) {
      menuSlide.classList.add('menu-open');
    }
  };

  var menuClose = document.getElementById('menu-close');  
  menuClose.onclick = function(){
    var menuSlide = document.getElementById('menu-slide');
    if (menuSlide.classList.contains('menu-open')) {
      menuSlide.classList.remove('menu-open');
    }
  };

  var navLinks = document.getElementsByClassName('nav-link');
  for (var i = navLinks.length - 1; i >= 0; i--) {
    navLinks[i].onclick = function() {

    }
  };

};