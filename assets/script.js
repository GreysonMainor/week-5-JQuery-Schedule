$(document).ready(function () {

    //setting my current date and time to the top of my page in the currentDay div.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    //setting variables to call upon later in my functions.
    var currentTime = moment().format("h a");
    var timeRow = parseInt($(this).attr("id"));
    console.log(currentTime)
    $(".time-block").each(function () {
        if (timeRow < currentTime) {
            $(this).removeClass("future", "present");
            $(this).addClass("past");
        } else if (timeRow === currentTime) {
            $(this).removeClass("past", "future");
            $(this).addClass("present");
        } else {
            $(this).removeClass("present", "past");
            $(this).addClass("future");
        }
    });

    //setting up a save button that actually saves.
    // var timeBlockText = $(this).siblings(".description").val("");
    // var blockId = $(this).parent().attr("id");
        $(".saveBtn").on("click", function () {
            var timeBlockText = $(this).siblings(".description").val();
            var blockId = $(this).parent().attr("id");

            localStorage.setItem("timeBlockText", JSON.stringify(timeBlockText))
            localStorage.setItem("blockId", JSON.stringify(blockId))
            console.log()

        });

     
    JSON.parse(localStorage.getItem("#hour8"))

});