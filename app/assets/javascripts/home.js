// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(window).load(function() {
  $( ".cells" ).animate({
    opacity: 1.25,
  }, 3000, function() {
  });
});

$(".modal-button").hide();  

$(".opening-button-wrapper").click(function() {
  $(".intro-div").toggle();
  $(".show-directions").toggle();
  $(".description-div").toggle();  
  $(".modal-button").toggle();  
})










// Create the event.
// var event = document.createEvent('Event');
// var elem = document.getElementById("trythis");
// // Define that the event name is 'build'.
// event.initEvent('build', true, true);

// // Listen for the event.
// elem.addEventListener('build', function (e) {
//   console.log(event);
// }, false);

// // target can be any Element or other EventTarget.
// elem.dispatchEvent(event);
