const menu = document.getElementsByClassName("menu")[0];
const options = document.getElementsByClassName("header-right")[0];

menu.addEventListener("click", () => {
    options.classList.toggle("active");
})
