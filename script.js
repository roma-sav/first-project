let likes = 0;
let button = document.getElementById("likeBtn");
let counter = document.getElementById("counter");
button.onclick = function() {likes++;
    counter.textContent = likes;
}
let themeButton = document.getElementById("themeBtn");
let isDark = false;
function toggleTheme() {if (isDark === false) {
    document.body.style.backgroundColor = "#1a1a1a";
    document.body.style.color = "#292929";
    themeButton.innerText = "Светлая тема";
    isDark = true;
    } else {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
    themeButton.innerText = "Темная тема";
    isDark = false;}
}
themeButton.onclick = toggleTheme;
let coins = 0;
let clickButton = document.getElementById("clickBtn");
let coinDisplay = document.getElementById("coinCount");
clickButton.onclick = function() {
    coins+=5;
    coinDisplay.innerText = coins;
}
let miners = 0;
let minerCost = 50;
let buyMinerButton = document.getElementById("buyMinerBtn");
let minersDisplay = document.getElementById("minersCount");
buyMinerButton.onclick = function() {
    if (coins >= minerCost) {
        coins -= minerCost;
        miners++;
        minerCost +=25;
        coinDisplay.innerText = coins;
        minersDisplay.innerText = miners;
        buyMinerButton.innerText = "Купить авто-майнер (Цена: " +minerCost + "🪙)";
    } else {
        alert("Недостаточно монет для покупки. Надо "+ minerCost + "🪙");
    }
}
setInterval(function() {
    if (miners > 0) {
        coins += miners;
        coinDisplay.innerText = coins;
    }
}, 1000);
let screen = document.getElementById("calcScreen");
function pressSymbol(symbol) {
    screen.value += symbol;
    }
    function clearScreen() {
        screen.value = "";
    }
function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = "Ошибка";
    }
}
function backspace() {
    screen.value = screen.value.slice(0, -1);
    }      
let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");
function saveTasks() {
    let tasks = [];
    let liElements = taskList.getElementsByTagName("li");
    for (let li of liElements) {
        let text = li.innerText.replace("❌", "").trim();
        let isCompleted = li.classList.contains("completed");
        tasks.push({ text: text, completed: isCompleted });
    }
    localStorage.setItem("myTodoTasks", JSON.stringify(tasks));
}
function createNewTask(taskText, isCompleted = false) {
    let li = document.createElement("li");
    li.innerText = taskText;
    if (isCompleted) {
        li.classList.add("completed");
    }
    li.onclick = function() {
        li.classList.toggle("completed");
        saveTasks();
    }
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.className = "deleteBtn";
    deleteBtn.onclick = function(event) {
        event.stopPropagation();
        li.remove();
        saveTasks();
    }
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}
addTaskBtn.onclick = function() {
    let taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Сначало напиши какую-нибудь задачу");
        return;
    }
    createNewTask(taskText);
    saveTasks();
    taskInput.value = "";
}
function loadTasks() {
    let savedTasks = localStorage.getItem("myTodoTasks");
    if (savedTasks) {
        let tasksArray = JSON.parse(savedTasks);
        for (let task of tasksArray) {
            let text = typeof task === "string" ? task : task.text;
            let completed = typeof task === "object" ? task.completed : false;
            createNewTask(text, completed);
        }
    }
}
loadTasks();