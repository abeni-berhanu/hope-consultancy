const menu = document.getElementsByClassName("menu")[0];
const options = document.getElementsByClassName("header-right")[0];

menu.addEventListener("click", () => {
    options.classList.toggle("active");
})



const header = document.querySelector(".header");
const welcomeHeader = document.querySelector(".welcome-header");
const mainDiv = document.querySelector(".main-div");
const intersectionOptions = {
    rootMargin: "-70px 0px 0px 0px"
};

const welcomeHeaderObserver = new IntersectionObserver(function(entries, intersectionOptions) {
    entries.forEach(entry => {
            if (!entry.isIntersecting) {
                header.classList.add("intersected");
            }
            else {
                header.classList.remove("intersected")
            }

        })
    },intersectionOptions);

welcomeHeaderObserver.observe(welcomeHeader);