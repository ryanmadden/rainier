'use strict';

(function(window){

  window.onload = function() {
    var menuTrigger = document.getElementById('menu-trigger');  
    menuTrigger.onclick = function(){
      openMenu();
    };

    var menuClose = document.getElementById('menu-close');  
    menuClose.onclick = function(){
      closeMenu();
    };

    var menuOverlay = document.getElementById('menu-overlay');
    menuOverlay.onclick = function(){
      closeMenu();
    };

    var navLinks = document.getElementsByClassName('nav-link');
    for (var i = navLinks.length - 1; i >= 0; i--) {
      navLinks[i].onclick = function() {
        closeMenu(); 
      }
    };

    function openMenu () {
      var menuSlide = document.getElementById('menu-slide');
      if (!menuSlide.classList.contains('menu-open')) {
        menuSlide.classList.add('menu-open');
      }
    }

    function closeMenu () {
      var menuSlide = document.getElementById('menu-slide');
      if (menuSlide.classList.contains('menu-open')) {
        menuSlide.classList.remove('menu-open');
      }
    }

  };

})(this);
