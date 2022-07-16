const openBtn = document.getElementById("toggle-btn");
const closeBtn = document.getElementById("close-btn");
const sideBar = document.getElementById("sidebar");

// console.log(sideBar.classList.contains("show-sidebar"));

// function to show the sidebar clicking on the toggle
openBtn.addEventListener('click', function() {
    if(!(sideBar.classList.contains("show-sidebar"))) {
        sideBar.classList.add("show-sidebar");
    }
});

// function to hide the sidebar clicking on the close button
closeBtn.addEventListener('click', function() {
    if(sideBar.classList.contains("show-sidebar")) {
        sideBar.classList.remove("show-sidebar");
    }
})