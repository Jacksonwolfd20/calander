$(document).ready(function () {
    //shows the time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    //adds a save button
    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        var text = $(this).children(".description").val();
        var time = $(this).parent().attr("id");

        //local storage
        localStorage.setItem(time, text);
    })
    //load any saved data from LocalStorage - do this for each hour created.
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

})