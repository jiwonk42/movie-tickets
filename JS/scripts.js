//BUSINESS LOGIC
//Create constructor
function Choice(movie,time,age) = {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

//USER INTERFACE
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var inputtedMovie = parseInt($("input:radio[name=movies]:checked").val());
    var inputtedTime = parseInt($("select#showtime").val());
    var inputtedAge = parseInt($("input#age").val());

    var userChoice = new Choice(inputtedMovie, inputtedTime, inputtedAge);
  });
});
