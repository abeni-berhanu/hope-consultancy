const menu = document.getElementsByClassName("menu")[0];
const options = document.getElementsByClassName("header-right")[0];
const destinations = document.querySelectorAll(".destination");
const header = document.querySelector(".header");
const welcomeHeader = document.querySelector(".welcome-header");
const mainDiv = document.querySelector(".main-div");

//nav-bar resposivness
menu.addEventListener("click", () => {
    options.classList.toggle("active");
})

//header scroll down change
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

/* //destinations fade-in to scroll
const destinationIntersectionOptions = {
}
const destinationFadeInObserver = new IntersectionObserver(function(entries, destinationIntersectionOptions){
    entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return
            }
            else {
                entry.target.classList.add("fade-in");
                destinationFadeInObserver.unobserve(entry.target);
                }
            })
        }, destinationIntersectionOptions);

destinations.forEach(fadeIn => {
    destinationFadeInObserver.observe(fadeIn);
}) */