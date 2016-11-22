// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(".thumbnail")
.on("mouseenter", function() {
  $(this).addClass('popout');
})
.on("mouseleave", function() {
  $(this).removeClass('popout');
});

$(window).load(function() {
  $( ".thumbnail" ).animate({
    opacity: 1.25,
    // left: "+=50",
    // height: "toggle"
  }, 3000, function() {
    // Animation complete.
  });
});

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
