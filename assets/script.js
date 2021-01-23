$(document).ready(function () {

    //Grabbing information from local storage if there is any.
     $("#hour8 .description").val(localStorage.getItem("hour8"));
     $("#hour9 .description").val(localStorage.getItem("hour9"));
     $("#hour10 .description").val(localStorage.getItem("hour10"));
     $("#hour11 .description").val(localStorage.getItem("hour11"));
     $("#hour12 .description").val(localStorage.getItem("hour12"));
     $("#hour13 .description").val(localStorage.getItem("hour13"));
     $("#hour14 .description").val(localStorage.getItem("hour14"));
     $("#hour15 .description").val(localStorage.getItem("hour15"));
     $("#hour16 .description").val(localStorage.getItem("hour16"));
     $("#hour17 .description").val(localStorage.getItem("hour17"));

    //setting my current date and time to the top of my page in the currentDay div.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    //setting up my color changer based on the time of day.
    function colorChanger() {
        var currentTime = moment().hour();
        console.log(currentTime);
        $(".description").each(function () {
             var timeBlock = parseInt($(this).attr("time"));
             console.log(timeBlock);
             console.log(this);
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
     $(".saveBtn").on("click", function(){
         var timeBlockText = $(this).parent().attr("id");
         var blockId = $(this).siblings(".description").val();
        localStorage.setItem(timeBlockText, blockId);
})

    colorChanger();
});

