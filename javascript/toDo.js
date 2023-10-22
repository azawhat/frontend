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
