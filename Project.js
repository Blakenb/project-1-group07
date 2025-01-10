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

// Meditation Timer//
let countdown;
let timeLeft = 55;

function updateTimerDisplay() {
  document.getElementById('timer').innerText = timeLeft;
}

function startTimer() {
  if (countdown) {
    clearInterval(countdown);
  }

  timeLeft = 55;
  updateTimerDisplay();

  countdown = setInterval(function() {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(countdown);
      alert("Time's up!");
    }
  }, 1000);
}

updateTimerDisplay
startTimer
