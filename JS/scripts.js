//BUSINESS LOGIC
var ticketPrice = 0;
var discount = "";
//Create constructor
function Choice(movie,time,age,quantity) {
  this.movie = movie;
  this.time = parseInt(time);
  this.age = parseInt(age);
  this.quantity = parseInt(quantity);
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
//Create prototype to determine price on quantity
Choice.prototype.quantityPrice = function() {
  console.log(this.quantity);
  return ticketPrice = ticketPrice * this.quantity;
}
//USER INTERFACE
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    //Define variable value with user input
    $(".information").each(function() {
      var inputtedMovie = $(this).find("input:radio[name=movies]:checked").val();
      var inputtedTime = $(this).find("select#showtime").val();
      var inputtedAge = $(this).find("input#age").val();
      var inputtedQuantity = $(this).find("select#quantity").val();
      //Make new object using constructor and varibles
      var userChoice = new Choice(inputtedMovie, inputtedTime, inputtedAge,inputtedQuantity);

      if (inputtedAge < 0) {
        alert("Please enter a valid age");
      } else {
        userChoice.moviePrice();
        userChoice.timePrice();
        userChoice.agePrice();
        userChoice.quantityPrice();
        console.log(ticketPrice);
        $(".results").show();
        $("ul#results").append("<li>"+ "Your total is $ " + ticketPrice + " with the total of " + inputtedQuantity + " tickets " + " ;and you are watching " + inputtedMovie + " at " + $("#showtime option:selected").text() + " at " + discount + " price " + "</li>");
      }
    });


  });
});
