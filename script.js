var planner = $('#schedule');
var savBtn = $('.saveBtn');

// Get current date and time and display it on the page
function postDate()
{
    var currentDay = $('#currentDay');

    var date = moment();

    currentDay.text(date.format("dddd, MMMM Do YYYY, h:mm a"));
}

function renderTimeBlocks()
{
    var hour = new Date().getHours();
    console.log(hour);

    $("textarea", (planner)).each( function()
    {
        var input = $(this);

        if(localStorage.getItem(input.attr("data-hr")))
        {
            input.val(localStorage.getItem(input.attr("data-hr")));
        }

        if((input.attr("data-hr")) === hour 
        || ((input.attr("data-hr")) - 12) === hour)
        {
            input.removeClass("past").addClass("present");
        }

        if((input.attr("data-hr")) > hour 
        || ((input.attr("data-hr")) - 12) > hour)
        {
            input.removeClass("past").addClass("future");
        }
    });
}

savBtn.on("click", function (event)
{
    var timeBlock = $(this).siblings("textarea");
    var hr = timeBlock.attr("data-hr");
    var event = timeBlock.val();

    if(event)
    {
        localStorage.setItem(hr, event);
    }
});

postDate();
renderTimeBlocks();
