# Breathe Easy: Your Daily Wellness Companion

## Description

It can be challenging to maintain a balance between necessary duties and self-nurturing. The Breathe Easy application was created to help users map out their day while prioritizing their mental health. With Breathe Easy, users can track their daily tasks, log their moods, and practice mindfulness strategies. The data gathered will help the user spot trends and correlations between moods and tasks.

Technologies used were HTML, CSS, and JavaScript.

Remember to breathe easy and organize your day.

## Installation

Users are able to use Breathe Easy immediately upon application load - simply begin interacting with it as described below.

## Usage

The application looks like this immediately upon loading:

![screenshot of full app page](/assets/Full%20Page%20App.png)

The user may choose which section of the page to utilize first. The following will describe each section on the page from top to bottom, left to right. 

### Uplifting Message
The uplifting message section uses a math JavaScript function to randomly select one of eight different positive messages or quotes. Simply refresh the page to see a new one. This part of the code could easily be expanded or changed to provide wider variety. Here are two examples:

![screenshot of uplifting message 1](/assets/Uplifting%20Message%201.png)    ![screenshot of uplifting message 2](/assets/Uplifting%20Message%202.png)

### Current Date and Time
The current date and time displays exactly that, with a live digital clock on which the seconds change. When the Open Calendar button is clicked, the section expands to reveal the current month's calendar below the clock.

![screenshot of calendar](/assets/Calendar.png)

### Breathing Exercise
The breathing exercise is available near the top to nudge users to take a moment to slow down and breathe when they open the app to plan their tasks. This section features a breathing timer that begins counting down for five seconds when Start Breathing Timer is clicked, along with the instructions to take a deep breath. After five seconds, the text changes to an instruction to exhale and and counts down from five seconds. This pattern repeats until the Stop Breathing Timer button is clicked. Future development of this section may include the option to select a breathing pattern from a list of available timers, such as box breathing or 4-7-8 breathing. Also included in this section is the exercise suggestion, which uses a math JavaScript function to randomly select a form of exercise the user might try each time the page is refreshed. This part of the code could easily be expanded or changed to provide a wider variety of exercise suggestions.

![screenshot of breathing timer](/assets/Breathing%20Timer.png)

### Daily Tasks
The daily tasks section allows the user to type in tasks that they need to accomplish. Type a description of the task into the input, and then click Add Task, and the list begins above with the time and date it was entered. When a task is completed, remove it from the list by clicking complete, or if all tasks are done, click Clear Tasks. Future development of this tool may include the option to categorize or tag tasks to be able to sort them by type, as well as the capability to add a due date and time and priority level.

![screenshot of daily tasks](/assets/Daily%20Tasks.png)     ![screenshot of daily tasks input](/assets/Daily%20Tasks%20Input.png)     ![screenshot of daily tasks task addeed](/assets/Daily%20Tasks%20Task%20Added.png)

### Mood Tracker
The mood tracker section features the ability to log and view previously recorded daily moods, including optional typed details, into a mood diary. To view previously recorded moods, click See Mood Diary and a modal appears with previous entries. Local client-side storage is utilized for this feature. Future development for this feature must include the ability to select the date and time for the mood logged.

![screenshot of mood tracker](/assets/Mood%20Tracker.png)
![screenshot of mood trakcer input](/assets/Mood%20Tracker%20Input.png)
![screenshot of mood tracker view diary](/assets/Mood%20Tracker%20View%20Diary.png)

### Meditation Timer
The meditation timer is exactly what it sounds like: a 55 second timer that can be started, stopped, and reset. This is provided for quick access to a tool that can help users set aside a moment of quiet self-reflection. Future development of this feature may include adding tips for meditating and short audio files to help the user focus.

![screenshot of meditation timer](/assets/Meditation%20Timer.png)

## Credits

This project is a collaboration of efforts by the Daily Calm Project Team.

Collaborators:
- Blake Brittain | [View Blake's GitHub repository](https://github.com/Blakenb)
- JoAnna Price | [View JoAnna's GitHub repository](https://github.com/jo-price)
- Joseph Goodwin | [View Joseph's GitHub repository](https://github.com/Joseph-Goodwin001)
- Brenden MacIsaac | [View Brenden's GitHub repository](https://github.com/brendenmacisaac)
- Johnny Thomas, III | [View Johnny's GitHub repository](https://github.com/NFToonz)

Other Sources:
- Calendar image from [Gemini by Google](https://gemini.google.com/)
<!-- If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. 

If you followed tutorials, include links to those here as well. -->

## License

MIT License

Copyright (c) 2025 Daily Calm: Breathe and Organize Your Day

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.