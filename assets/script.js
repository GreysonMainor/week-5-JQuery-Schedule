$(document).ready(function () {

    //setting my current date and time to the top of my page in the currentDay div.
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    //setting variables to call upon later in my functions.
    var currentTime = moment().format("h a");
    var timeRow = parseInt($(this).attr("id"));
console.log(currentTime)
    $(".time-block").each(function () {
        if (timeRow < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (timeRow === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })


});