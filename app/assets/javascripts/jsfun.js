var transformName = function(name) {
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
