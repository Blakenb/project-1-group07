document.addEventListener('DOMContentLoaded', () => {
    const upliftingMessages = [
        "You are capable of amazing things.",
        "Believe in yourself and all that you are.",
        "Every day is a new beginning.",
        "You are stronger than you think.",
        "Stay positive, work hard, make it happen.",
        "You are doing great, keep going!",
        "Believe you can and you're halfway there."
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

    btn.onclick = function() {
        const pastMoodsList = document.getElementById("past-moods");
        pastMoodsList.innerHTML = "";
        pastMoods.forEach(function(entry) {
            const li = document.createElement("li");
            li.textContent = `${entry.mood}: ${entry.details}`;
            pastMoodsList.appendChild(li);
        });
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    saveBtn.onclick = function() {
        const moodDetails = document.getElementById("mood-details").value;
        const selectedMood = moodSelect.value;
        if (moodDetails) {
            pastMoods.push({ mood: selectedMood, details: moodDetails });
            localStorage.setItem('pastMoods', JSON.stringify(pastMoods));
            document.getElementById("mood-details").value = "";
        }
    }

    saveInputBtn.onclick = function() {
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

const calendarButton = document.getElementById("calendarButton")
const calendar = document.getElementById("calendar")

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