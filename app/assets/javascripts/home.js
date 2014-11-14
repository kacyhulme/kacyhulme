// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


$(document).ready(function(){
  $("div.thumbnail").on("mouseenter", function() {
    $(this).addClass('highlight');
  }).on("mouseleave", function() {
    $(this).removeClass('highlight');
  });
});
