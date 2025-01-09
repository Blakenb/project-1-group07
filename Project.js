$(document).ready(function() {
    $('#calendar').fullCalendar({
        // Options and callbacks here
    });

    $('#open-calendar').on('click', function() {
        $('#calendar').show();
    });

    $('#mood-tracker').on('submit', function(event) {
        event.preventDefault();
        const mood = $('#mood').val();
        alert(`Your mood today is: ${mood}`);
        // Here you can add code to save the mood data
    });
});