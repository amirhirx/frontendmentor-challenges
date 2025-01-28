const menu = document.querySelector(".menu")
const menuIcon = document.querySelector(".menu-icon")

menuIcon.addEventListener("click", () => {
    if (menu.classList.contains("show-menu")) {
        menuIcon.src = "assets/images/icon-menu.svg"
    } else {
        menuIcon.src = "assets/images/icon-menu-close.svg"
    }
    menu.classList.toggle("show-menu")
})