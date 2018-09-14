//define functions here
function getIt() {
  $('p').on('click', function(key) {
  alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('.tasty').border
  })
}

$(document).ready(function(){

// call functions here

});
