let timer = document.createElement("p")
const timercounter = document.getElementById("timercounter") // timer counter

timer.value = 0
timer.textContent = 0 // values for timer

timercounter.appendChild(timer)

let startbutton = document.getElementById("startTimer")
let stopbutton = document.getElementById("stopTimer") // all buttons
let resetbutton = document.getElementById("resetTimer")

let timerifon = true // determines if start is clicked or not

startbutton.addEventListener("click", start)
stopbutton.addEventListener("click", end) // event listeners
resetbutton.addEventListener("click", reset)

function start(){
    if (timerifon == true){ // if start, interval every second
        interval = setInterval(timerfr, 1000)
    }
    timerifon = false // makes it so start cant be clicked again
}

function timerfr() {
    timercounter.innerHTML = timer.value += 1 // adds one
}

function end(){
    clearInterval(interval) // clears interval
    timerifon = true
}

function reset(){
    clearInterval(interval)
    timer.value = 0 // resets timer
    timercounter.innerHTML = timer.value
    timerifon = true
}