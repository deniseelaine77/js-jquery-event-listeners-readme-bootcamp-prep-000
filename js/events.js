//define functions here
function getIt() {
  $('p').on('click', function(key) {
  alert("Hey!");
  });
}

function frameIt() {
  $('img.tasty').on('load', function() {
    $(this).css('border', "solid 2px red")
  });
}

$(document).ready(function(){

// call functions here

});
