'use strict';

(function(window){

  var downloadButton = document.getElementById('btn-download');  
  downloadButton.addEventListener('click',function(){
   ga('send', 'event', 'Button', 'download', 'Main Download');
 },false);

  var downloadLink = document.getElementById('link-download');  
  downloadLink.addEventListener('click',function(){
   ga('send', 'event', 'Link', 'download', 'Nav Download');
 },false);

})(this);
