$(document).ready(function () {

 //setting my current date and time to the top of my page in the currentDay div.
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    //setting variables to call upon later in my functions.
    var currentTime = moment().format("h a")
    var hourBlock = parseInt($(this).attr("id").split("hour")[1])
    
    console.log(currentTime)
   //setting colors for my page based on time of day.
$(".time-block").each

    
});