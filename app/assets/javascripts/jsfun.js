var transformName = function(name) {
  alert(name);
}

var getUserName = function() {
  var userName = $('#example-text-input').val()
  transformName(userName);
};

var submitButton = $('#name-submit-button');

submitButton.click(getUserName);
