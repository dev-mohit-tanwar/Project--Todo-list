const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
    if (inputBox.value === "") {
        alert("Please enter a task.");
        return;
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
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
    } catch (error) {
        console.error("Error loading data:", error);
        alert("Could not load your saved tasks. Please check if your browser supports local storage.");
    }
}

// Add Enter key support
inputBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

showTask(); 



