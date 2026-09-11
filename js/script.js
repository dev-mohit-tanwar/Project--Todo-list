const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const taskForm = document.getElementById("task-form");
const emptyState = document.getElementById("empty-state");

function addTask() {
    const taskText = inputBox.value.trim();

    if (!taskText) {
        inputBox.focus();
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteButton = document.createElement("span");
    deleteButton.setAttribute("role", "button");
    deleteButton.setAttribute("tabindex", "0");
    deleteButton.setAttribute("aria-label", `Delete task: ${taskText}`);
    deleteButton.textContent = "\u00d7";

    li.appendChild(deleteButton);
    listContainer.appendChild(li);
    inputBox.value = "";
    updateEmptyState();
    saveData();
}

function updateEmptyState() {
    emptyState.hidden = listContainer.children.length > 0;
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        updateEmptyState();
        saveData();
    }
}, false);

listContainer.addEventListener("keydown", function(e) {
    if (e.target.tagName === "SPAN" && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        e.target.parentElement.remove();
        updateEmptyState();
        saveData();
    }
}, false);

function saveData(){
    try {
        localStorage.setItem("data", listContainer.innerHTML);
    } catch (error) {
        console.error("Error saving data:", error);
        alert("Could not save your tasks. Please check if your browser supports local storage.");
    }
}

function showTask(){
    try {
        const savedData = localStorage.getItem("data");
        if (savedData) {
            listContainer.innerHTML = savedData;
        }
        updateEmptyState();
    } catch (error) {
        console.error("Error loading data:", error);
        alert("Could not load your saved tasks. Please check if your browser supports local storage.");
    }
}

// Add Enter key support
taskForm.addEventListener("submit", function(e) {
    e.preventDefault();
    addTask();
});

showTask(); 


