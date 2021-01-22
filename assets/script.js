$(document).ready(function () {

    //setting my current date and time to the top of my page in the currentDay div.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    //setting up my color changer based on the time of day.
    function colorChanger() {
        var currentTime = moment().hour();
        console.log(currentTime)
        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
            if (timeBlock < currentTime) {
                $(this).removeClass("future", "present").addClass("past");
            }else if (timeBlock === currentTime) {
                $(this).removeClass("past", "future").addClass("present");
            }else {
                $(this).removeClass("present", "past").addClass("future");
            }
        })
    }

    //setting up a save button that actually saves.
        $(".saveBtn").on("click", function () {
            var timeBlockText = $(this).siblings(".description").val();
            var blockId = $(this).parent().attr("id");

            localStorage.setItem("timeBlockText", JSON.stringify(timeBlockText))
            localStorage.setItem("blockId", JSON.stringify(blockId))
            console.log()

        });

     
    $(".saveBtn").on("click", function(){
        var timeBlockText = $(this).siblings(".description").val();
        var blockId = $(this).parent().attr("id");
        localStorage.getItem("timeBlockText", JSON.stringify(timeBlockText))
        localStorage.getItem("blockId", JSON.stringify(blockId))
    
})

    colorChanger();

});





