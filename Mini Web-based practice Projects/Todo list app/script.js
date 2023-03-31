function addTask() {
    var taskInput = document.getElementById("taskInput");   //task input element

    var tasks = localStorage.getItem("tasks");      //tasks from local storage

    //no tasks, initialize the tasks array
    if (!tasks) {
        tasks = [];
    } else {
        tasks = JSON.parse(tasks);
    }

    tasks.push(taskInput.value);        //new task to the tasks array

    localStorage.setItem("tasks", JSON.stringify(tasks));   //saving the updated tasks array to local storage

    taskInput.value = "";       //clear the task input

    location.reload();      //reload the page to display the updated task list
}

function displayTasks() {
    
    var taskList = document.getElementById("taskList");     //get the task list element

    var tasks = localStorage.getItem("tasks");          //get the tasks from local storage

    //no tasks, display a message
    if (!tasks) {
        taskList.innerHTML = "No tasks to display.";
    } else {
        tasks = JSON.parse(tasks);

        //loop through the tasks and display them in the task list
        for (var i = 0; i < tasks.length; i++) {
            taskList.innerHTML += "<li>" + tasks[i] + "</li>";
        }
    }
}