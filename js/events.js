//define functions here
function getIt() {
  $('p').on('click', function(key) {
  alert("Hey!");
  });
}

function frameIt() {
  $(document).on('load', function() {
    $('img.tasty').css('border', "solid 2px red")
  });
}

$(document).ready(function(){

// call functions here

});
