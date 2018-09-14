//define functions here
function getIt() {
  $('p').on('click', function(key) {
  alert("Hey!");
  });
}

function frameIt() {
  $(document).on('load', function() {
    $('img').addClass( 'tasty')
  });
}

$(document).ready(function(){

// call functions here

});
