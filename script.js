var planner = $('#schedule');
var hours = $('.timeOfDay');

// Get current date and time and display it on the page
function postDate()
{
    var currentDay = $('#currentDay');

    var date = moment();

    currentDay.text(date.format("dddd, MMMM Do YYYY, h:mm a"));
}

function renderTimeBlocks()
{
    var saveBtn = $("<button type=\"button\" class=\"saveBtn fa fa-lock\"/>");
    var text = $("<textarea class=\"row\"/>")
    var time = $("<div class=\"hour\">9am</div>")
    
    text.insertBefore(hours);
    saveBtn.insertBefore(hours);
    hours.append(time);
}

postDate();
//renderTimeBlocks();