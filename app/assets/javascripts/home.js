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

// Monetate event for redrawing badges
// Set up a blank var for the event
var monetateEvent;
var elem = document.getElementById("trythis");

try {
// Try the modern "CustomEvent" method
monetateEvent = new CustomEvent('monetateRetrack');
} catch (err) {
// Fall back to older methods (IE 9-11)
monetateEvent = document.createEvent('CustomEvent');
monetateEvent.initCustomEvent('monetateRetrack', false, false, undefined);
}

// If we created an event, fire it
monetateEvent && window.dispatchEvent(monetateEvent);

window.addEventListener('monetateRetrack', function () {
  console.log("yes");
});
