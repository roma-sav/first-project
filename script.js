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
