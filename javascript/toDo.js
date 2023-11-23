document.addEventListener("DOMContentLoaded", function() {

    const taskList = document.getElementById("task-list");
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");

    // to add tasks
    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const newTask = document.createElement("li");
            newTask.textContent = taskText;
            taskList.appendChild(newTask);

            // after adding clear label
            taskInput.value = "";
            addTaskButton.disabled = true;

            // to mark and delete tasks listener
            newTask.addEventListener("click", function() {
                newTask.classList.toggle("completed");
            });

            newTask.addEventListener("contextmenu", function(e) {
                e.preventDefault();
                taskList.removeChild(newTask);
            });
        }
    });

    // enable or disable button
    taskInput.addEventListener("input", function() {
        addTaskButton.disabled = taskInput.value.trim() === "";
    });
});



var scrollToTopBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// to scroll top page
scrollToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});