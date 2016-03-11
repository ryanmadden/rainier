'use strict';

(function(window){

  window.onload = function() {
    var downloadButton = document.getElementById('btn-download');  
    downloadButton.onclick = function(){
      ga('send', 'event', 'Button', 'download', 'Main Download');
    };

    var downloadLink = document.getElementById('link-download');  
    downloadLink.onclick = function(){
      ga('send', 'event', 'Link', 'download', 'Nav Download');
    };

  };

})(this);
