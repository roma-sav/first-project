let likes = 0;
let button = document.getElementById("likeBtn");
let counter = document.getElementById("counter");
button.onclick = function() {likes++;
    counter.textContent = likes;
}
let themeButton = document.getElementById("themeBtn");
let isDark = false;
themeButton.onclick = function() {if (isDark === false) {
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
