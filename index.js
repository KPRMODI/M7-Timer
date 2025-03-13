let timer = document.createElement("p")
const timercounter = document.getElementById("timercounter")

timer.value = 0
timer.textContent = 0

timercounter.appendChild(timer)

let startbutton = document.getElementById("startTimer")
let stopbutton = document.getElementById("stopTimer")
let resetbutton = document.getElementById("resetTimer")

let timerifon = true

startbutton.addEventListener("click", start)
stopbutton.addEventListener("click", end)
resetbutton.addEventListener("click", reset)

function start(){
    if (timerifon == true){
        interval = setInterval(timerfr, 1000)
    }
    timerifon = false
}

function timerfr() {
    timercounter.innerHTML = timer.value += 1
}

function end(){
    clearInterval(interval)
    console.log("hi")
    timerifon = true
}

function reset(){
    clearInterval(interval)
    timer.value = 0
    timercounter.innerHTML = timer.value
    timerifon = true
}