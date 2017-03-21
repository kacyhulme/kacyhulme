$( document ).ready(function() {
  var transformName = function(name) {
    $('.row.print-name').append("Hi! ")
    for (var i = 0, len = name.length; i < len; i++) {
     $('.print-name').append(name[i]);
   }

 }

 var getUserName = function() {
  var userName = $('#example-text-input').val()
  transformName(userName);
};

var submitButton = $('#name-submit-button');

submitButton.click(getUserName);
});