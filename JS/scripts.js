//BUSINESS LOGIC

var ticketPrice = 0;
//Create constructor
function Choice(movie,time,age) = {
  this.movie = movie;
  this.time = time;
  this.age = age;
}
//Create prototype to determine price on movie choice
Choice.prototype.moviePrice = function () {
  if (this.movie === 1) {
    ticketPrice += 5;
  } else if (this.movie === 2) {
    ticketPrice+= 7;
  } else { ticketPrice += 10; }
  return ticketPrice;
};
//Create prototype to determine price on time choice
Choice.prototype.timePrice = function() {
  if(this.time === 1 || this.time === 2) {
    ticketPrice += 1;
  } else if(this.time === 3 || this.time === 4) {
    ticketPrice += 5;
  } else { ticketPrice += 3; }
  return ticketPrice;
}
//Create prototype to determine price on age
Choice.prototype.agePrice = function() {
  if(this.age < 25 ) {
    ticketPrice+=1;
  } else if (this.age >25 && this.age <60) {
    ticketPrice-=5;
  } else { ticketPrice+=3; }
  return ticketPrice;
}
//USER INTERFACE
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    //Define variable value with user input
    var inputtedMovie = parseInt($("input:radio[name=movies]:checked").val());
    var inputtedTime = parseInt($("select#showtime").val());
    var inputtedAge = parseInt($("input#age").val());
    //Make new object using constructor and varibles
    var userChoice = new Choice(inputtedMovie, inputtedTime, inputtedAge);
    if (inputtedAge < 0) {
      alert("Please enter a valid age");
    } else {
      userChoice.moviePrice();
      console.log(ticketPrice);
      userChoice.timePrice();
      console.log(ticketPrice);
      userChoice.agePrice();
      console.log(ticketPrice);
    }
  });
});
