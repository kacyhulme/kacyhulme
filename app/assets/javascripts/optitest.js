var xhr = new XMLHttpRequest();

$(document).ready(function() {
  $.ajax({
    url: 'https://api.optimizely.com/v2/projects',
    type: 'GET',
    dataType: 'json',
    success: function(data) { console.log(data); },
    error: function() { alert('boo!'); },
    beforeSend: setHeader
  });
});

function setHeader (xhr) {
  xhr.setRequestHeader('Authorization', 'Bearer **my auth code here**');
}
