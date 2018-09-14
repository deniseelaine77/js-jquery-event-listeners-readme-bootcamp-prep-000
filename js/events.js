//define functions here
function getIt() {
  $('p').on('click', function(key) {
  alert("Hey!");
  });
}

function frameIt() {
  $(document).on('load', function() {
    $('.tasty').css('border', "solid 2px red")
  });
}

$(document).ready(function(){

// call functions here

});
