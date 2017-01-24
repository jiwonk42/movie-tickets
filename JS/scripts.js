//BUSINESS LOGIC
//Create constructor
var ticketPrice = 0;

function Choice(movie,time,age) = {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Choice.prototype.moviePrice = function () {
  if (this.movie === 1) {
    ticketPrice += 5;
  } else if (this.movie === 2) {
    ticketPrice+= 7;
  } else { ticketPrice += 10;}
  return ticketPrice;
};

Choice.prototype.timePrice = function() {
  if(this.time === 1 || this.time === 2) {
    ticketPrice += 1;
  } else if(this.time === 3 || this.time === 4) {
    ticketPrice += 5;
  } else { ticketPrice += 3; }
}

//USER INTERFACE
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var inputtedMovie = parseInt($("input:radio[name=movies]:checked").val());
    var inputtedTime = parseInt($("select#showtime").val());
    var inputtedAge = parseInt($("input#age").val());

    var userChoice = new Choice(inputtedMovie, inputtedTime, inputtedAge);
    userChoice.moviePrice();
    console.log(ticketPrice);
  });
});
