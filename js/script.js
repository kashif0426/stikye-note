let container2 = document.getElementsByClassName("container2")[0];
let container3 = document.getElementsByClassName("container3")[0];
let checkIcon = document.getElementById("check-icon");
let crosseIcon = document.getElementById("crosse-icon")
let i = 0;

crosseIcon.addEventListener("click", function() {
    typeNote();
})

checkIcon.addEventListener("click", function() {
    createNote();
})

function typeNote() {}

function createNote() {

}

function margin() {
    let random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];

    return random_margin[Math.floor(Math.random() * random_margin.length)];
}

function rotate() {
    let random_rotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-10deg)", ];
    return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}

function color() {
    let random_colors = ["#c2ff3d", "#ff3de8", "#3dc2ff", "#04e022", "#bc83e6", "#ebb328"];

    if (i > random_colors.length - 1) {
        i = 0;
    }
    return random_colors[i++];
}