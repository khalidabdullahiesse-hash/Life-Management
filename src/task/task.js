// Elements
const userTaskInput = document.getElementById("userTaskInput");
const AddBtn = document.getElementById("AddBtn");
const tasksContainer = document.getElementById("tasks");
const taskType = document.getElementById("taskType");

// Stats
const totalTasksEl = document.getElementById("Total-Tasks");
const inProgressEl = document.getElementById("In-Progress");
const completedEl = document.getElementById("Completed");

// Tasks array
const tasks = [];

// Add Task
AddBtn.addEventListener("click", () => {

    const text = userTaskInput.value.trim();
    if (text === "") return; // don't add empty tasks

    const category = taskType.value;

    const task = {
        id: Date.now(),
        text,
        category,
        completed: false
    };

    tasks.push(task);
    renderTasks();

    userTaskInput.value = ""; // clear input
    document.getElementById("modal-toggle").checked = false; // close modal
});

// Render tasks function
function renderTasks() {
    tasksContainer.innerHTML = "";

    let total = tasks.length;
    let completed = 0;

    tasks.forEach(task => {
        if (task.completed) completed++;

        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
            renderTasks(); // re-render to update stats
        });

        const spanText = document.createElement("span");
        spanText.textContent = task.text;

        const spanTag = document.createElement("span");
        spanTag.classList.add("tag");
        spanTag.textContent = task.category;

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(spanText);
        taskDiv.appendChild(spanTag);

        tasksContainer.appendChild(taskDiv);
    });

    // Update stats
    totalTasksEl.textContent = total;
    completedEl.textContent = completed;
    inProgressEl.textContent = total - completed;
}


