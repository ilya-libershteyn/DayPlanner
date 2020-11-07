var planner = $('.container');

// Get current date and time and display it on the page
function postDate()
{
    var currentDay = $('#currentDay');

    var date = moment();

    currentDay.text(date.format("dddd, MMMM Do YYYY, h:mm a"));
}

function renderTimeBlocks()
{
    var block = $("<div class='row justify-content-center'></div>");

    planner.append(block);
}

postDate();
renderTimeBlocks();