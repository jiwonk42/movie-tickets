//BUSINESS LOGIC
var ticketPrice = 0;
var discount = "";
//Create constructor
function Choice(movie,time,age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}
//Create prototype to determine price on movie choice
Choice.prototype.moviePrice = function () {
  if (this.movie === "Lala Land") {
    ticketPrice += 5;
  } else if (this.movie === "Dark Knight") {
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
    discount = "youth";
  } else if (this.age >25 && this.age <60) {
    ticketPrice+=3;
    discount = "regular";
  } else { ticketPrice-=5; discount = "senior"; }
  return ticketPrice;
}
//USER INTERFACE
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    //Define variable value with user input
    var inputtedMovie = $("input:radio[name=movies]:checked").val();
    var inputtedTime = parseInt($("select#showtime").val());
    var inputtedAge = parseInt($("input#age").val());
    //Make new object using constructor and varibles
    var userChoice = new Choice(inputtedMovie, inputtedTime, inputtedAge);
    if (inputtedAge < 0) {
      alert("Please enter a valid age");
    } else {
      userChoice.moviePrice();
      userChoice.timePrice();
      userChoice.agePrice();
      console.log(ticketPrice);
      $(".results").show();
      $("#results").append(ticketPrice);
      $(".movie").text($("input:radio[name=movies]:checked").val());
      $(".time").text($("#showtime option:selected").text());
      $(".age").text(discount);
    }
  });
});
