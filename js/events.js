//define functions here
function getIt() {
  $('p').on('click', function(key) {
  alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $(this).addClass( 'tasty')
  });
}

function pressIt() {
  $('form').on('keydown', function(key) {
    if(key.which == 103){
      alert('G was pressed')
    }
  }) 
}

$(document).ready(function(){

// call functions here

});
