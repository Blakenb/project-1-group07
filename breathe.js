document.addEventListener('DOMContentLoaded', () => {
    const upliftingMessages = [
        "You are capable of amazing things. -Randy Fenoli",
        "Believe in yourself and all that you are. -Christian D. Larson",
        "Every day is a new beginning. -Unknown",
        "You are stronger than you think. -Unknown",
        "Stay positive, work hard, make it happen. -Unknown",
        "You are doing great, keep going! -Unknown",
        "Believe you can and you're halfway there. -Thedore Roosevelt",
        "It is during our darkest moments that we must focus to see the light. - Aristotle"
    ];

    const exerciseSuggestions = [
        "Take a short walk.",
        "Do some stretching.",
        "Try a few yoga poses.",
        "Do a quick workout.",
        "Take a few deep breaths.",
        "Do some jumping jacks.",
        "Try a short meditation."
    ];

    const upliftingMessageText = document.getElementById('uplifting-message-text');
    const breathingMessage = document.getElementById('breathing-message');
    const exerciseSuggestion = document.getElementById('exercise-suggestion');
    const startBreathingTimerButton = document.getElementById('start-breathing-timer');
    const stopBreathingTimerButton = document.getElementById('stop-breathing-timer');
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const clearTasksButton = document.getElementById('clear-tasks');
    const currentDateTime = document.getElementById('current-date-time');
    const modal = document.getElementById("mood-diary-modal");
    const btn = document.getElementById("see-mood-diary");
    const span = document.getElementsByClassName("close")[0];
    const saveBtn = document.getElementById("save-mood-details");
    const saveInputBtn = document.getElementById("save-mood-details-input");
    const moodSelect = document.getElementById("moods");
    const pastMoods = JSON.parse(localStorage.getItem('pastMoods')) || [];


    let breathingInterval;
    let countdownInterval;

    function updateDateTime() {
        const now = new Date();
        currentDateTime.textContent = now.toLocaleString();
    }

    function displayRandomUpliftingMessage() {
        const randomMessageIndex = Math.floor(Math.random() * upliftingMessages.length);
        upliftingMessageText.textContent = upliftingMessages[randomMessageIndex];
    }

    function displayRandomExerciseSuggestion() {
        const randomExerciseIndex = Math.floor(Math.random() * exerciseSuggestions.length);
        exerciseSuggestion.textContent = `Exercise suggestion: ${exerciseSuggestions[randomExerciseIndex]}`;
    }

    function startCountdown(duration, message) {
        let timer = duration, seconds;
        countdownInterval = setInterval(() => {
            seconds = parseInt(timer % 60, 10);
            breathingMessage.textContent = `${message} ${seconds}s`;
            if (--timer < 0) {
                clearInterval(countdownInterval);
                if (message === 'Take a deep breath...') {
                    startCountdown(5, 'Exhale slowly...');
                } else {
                    startCountdown(5, 'Take a deep breath...');
                }
            }
        }, 1000);
    }

    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(task => {
            tasks.push({
                text: task.querySelector('.task-text').textContent,
                completed: task.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            addTaskToList(task.text, task.completed);
        });
    }

    function addTaskToList(taskText, completed = false) {
        const li = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.classList.add('task-text');
        if (completed) {
            li.classList.add('completed');
        }
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            li.classList.add('completed');
            setTimeout(() => {
                li.remove();
                saveTasks();
            }, 500); // Delay removal to show the completed state
        });
        li.appendChild(taskSpan);
        li.appendChild(completeButton);
        taskList.appendChild(li);
    }

    setInterval(updateDateTime, 1000); // Update date and time every second

    startBreathingTimerButton.addEventListener('click', () => {
        console.log('Breathing timer started');
        if (breathingInterval) {
            clearInterval(breathingInterval);
        }
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        startCountdown(5, 'Take a deep breath...'); // Start 5 seconds countdown
    });

    stopBreathingTimerButton.addEventListener('click', () => {
        console.log('Breathing timer stopped');
        if (breathingInterval) {
            clearInterval(breathingInterval);
            breathingInterval = null;
        }
        if (countdownInterval) {
            clearInterval(countdownInterval);
            countdownInterval = null;
        }
        breathingMessage.textContent = 'Take a deep breath...';
    });

    addTaskButton.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            addTaskToList(taskText);
            newTaskInput.value = '';
            saveTasks();
            console.log('Task added:', taskText);
        }
    });

    newTaskInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const taskText = newTaskInput.value.trim();
            if (taskText !== '') {
                addTaskToList(taskText);
                newTaskInput.value = '';
                saveTasks();
                console.log('Task added:', taskText);
            }
        }
    });

    clearTasksButton.addEventListener('click', () => {
        taskList.innerHTML = '';
        saveTasks();
        console.log('All tasks cleared');
    });

    btn.onclick = function () {
        const pastMoodsList = document.getElementById("past-moods");
        pastMoodsList.innerHTML = "";
        pastMoods.forEach(function (entry) {
            const li = document.createElement("li");
            li.textContent = `${entry.mood}: ${entry.details}`;
            pastMoodsList.appendChild(li);
        });
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    saveBtn.onclick = function () {
        const moodDetails = document.getElementById("mood-details").value;
        const selectedMood = moodSelect.value;
        if (moodDetails) {
            pastMoods.push({ mood: selectedMood, details: moodDetails });
            localStorage.setItem('pastMoods', JSON.stringify(pastMoods));
            document.getElementById("mood-details").value = "";
        }
    }

    saveInputBtn.onclick = function () {
        const moodDetailsInput = document.getElementById("mood-details-input").value;
        const selectedMood = moodSelect.value;
        if (moodDetailsInput) {
            pastMoods.push({ mood: selectedMood, details: moodDetailsInput });
            localStorage.setItem('pastMoods', JSON.stringify(pastMoods));
            document.getElementById("mood-details-input").value = "";
        }
    }

    // Initialize date and time display
    updateDateTime();

    // Display a random uplifting message
    displayRandomUpliftingMessage();

    // Display a random exercise suggestion
    displayRandomExerciseSuggestion();

    // Load tasks from local storage
    loadTasks();
});



// made changes to code so on click it calls immediately
const calendarButton = document.getElementById("calendarButton")
const calendar = document.getElementById("calendar")

let timerInterval; // Variable to hold the timer interval
const initialTime = 55; // Initial timer value

// Function to start the timer
function startTimer() {
    let timerElement = document.getElementById('timer');
    let time = parseInt(timerElement.textContent, 10);
    const audio = document.getElementById('meditation-audio');

    // Clear any existing timer
    clearInterval(timerInterval);

    // Start a new interval
    timerInterval = setInterval(() => {
        if (time > 0) {
            time--;
            timerElement.textContent = time;
        } else {
            clearInterval(timerInterval); // Stop the timer when it reaches 0
            audio.pause(); // Stop the audio when the timer ends
        }
    }, 1000);

    audio.play(); // Play the audio when the timer starts
}

// Function to stop the timer
function stopTimer() {
    clearInterval(timerInterval);
    const audio = document.getElementById('meditation-audio');
    audio.pause(); // Pause the audio when the timer stops
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timerInterval); // Stop any ongoing interval
    document.getElementById('timer').textContent = initialTime; // Reset to initial value
    const audio = document.getElementById('meditation-audio');
    audio.pause(); // Pause the audio when the timer resets
    audio.currentTime = 0; // Reset the audio to the beginning
}

// Attach event listeners to buttons
document.getElementById('startTimer').addEventListener('click', startTimer);
document.getElementById('stopTimer').addEventListener('click', stopTimer);
document.getElementById('resetTimer').addEventListener('click', resetTimer);

document.addEventListener('DOMContentLoaded', () => {
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
    const body = document.body;

    // Check localStorage for saved preference
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        toggleDarkModeButton.textContent = 'Light Mode';
    }

    toggleDarkModeButton.addEventListener('click', () => {
        const darkModeEnabled = body.classList.toggle('dark-mode');
        toggleDarkModeButton.textContent = darkModeEnabled ? 'Light Mode' : 'Dark Mode';

        // Save preference in localStorage
        localStorage.setItem('dark-mode', darkModeEnabled);
    });
});

calendarButton.addEventListener("click", event => {
    if(calendar.style.display === "block"){
        calendar.style.display = "none";
        calendarButton.textContent = "Open Calendar";
    }
    else{
    calendar.style.display = "block";
    calendarButton.textContent = "Close Calendar";
    }
})