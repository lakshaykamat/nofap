const dayEl = document.getElementById('days')
const hourEl = document.getElementById('hours')
const minEl = document.getElementById('mins')
const secEl = document.getElementById('seconds')

function start(){
    let getItem = localStorage.getItem("Inputvalue")//geting the stored item
    let inputMilli = new Date(getItem).getTime()//converting to millisecond(user time)
    let currentDate = new Date().getTime()//current time in milliseconds
    let gap = currentDate - inputMilli //subtracting to get the difference

    
    const second = 1000//1 second has 1000 milliseconds
    const minute = second * 60 // coverting minute to milliseconds
    const hour = minute * 60 //converting hour to milliseconds
    const day = hour * 24 //converting day to milliseconds

    let textDay = Math.floor(gap / day) //dividing to get the day passed
    let textHour = Math.floor((gap % day )/ hour)
    let textMin = Math.floor((gap % hour )/ minute)
    let textSecond = Math.floor((gap % minute )/ second)
    dayEl.textContent = textDay
    hourEl.textContent = textHour
    minEl.textContent = textMin
    secEl.textContent = textSecond
}
setInterval(start,1000)
function popup(){
    document.getElementById('popup').classList.add("addpop")
}
function removepop(){
    let input = document.getElementById('input').value//garbing the value
     localStorage.setItem("Inputvalue",input)//storing in a variable
    document.getElementById('popup').classList.remove('addpop')
}