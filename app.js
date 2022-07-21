const dayEl = document.getElementById('days')
const hourEl = document.getElementById('hours')
const minEl = document.getElementById('mins')
const secEl = document.getElementById('seconds')
const achieveEl = document.getElementById('achieve')
const sideBar =  document.getElementById('sidebar')
const achievementName = document.getElementById('achieveName')
const sidebar = ()=>{
    sideBar.style.display = "flex"
}
const closeSideBar = ()=>{
    sideBar.style.display = "none"
}
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
    achievement(textDay)
}
const achievement = (day)=>{
    if(day == 0){
        achieveEl.textContent = "New Bee 🐝"
        achievementName.children[1].style.color = 'Green'
    }else if(day == 1){
        achieveEl.textContent = "Scout 🔫"
        achievementName.children[1].style.color = 'Green'
        achievementName.children[2].style.color = 'Green'
        }else if(day == 3){
            achieveEl.textContent = "An Intern"   
            achievementName.children[1].style.color = 'Green'
            achievementName.children[2].style.color = 'Green' 
            achievementName.children[3].style.color = 'Green' 
        }else if(day == 5){
            achieveEl.textContent = "Corporal"
            achievementName.children[1].style.color = 'Green'
            achievementName.children[2].style.color = 'Green'
            achievementName.children[3].style.color = 'Green'
            achievementName.children[4].style.color = 'Green'
        }else if(day == 7){
            achieveEl.textContent = "Sergeant"
            achievementName.children[1].style.color = 'Green'
            achievementName.children[2].style.color = 'Green'
            achievementName.children[3].style.color = 'Green'
            achievementName.children[4].style.color = 'Green'
            achievementName.children[5].style.color = 'Green'
        }else if(day == 10){
            achieveEl.textContent = "Master Sergeant"
            achievementName.children[1].style.color = 'Green'
            achievementName.children[2].style.color = 'Green'
            achievementName.children[3].style.color = 'Green'
            achievementName.children[4].style.color = 'Green'
            achievementName.children[5].style.color = 'Green'
            achievementName.children[6].style.color = 'Green'
        }
        else{
         achieveEl.textContent = "Thinking to add achievement here. Recommend me some keywords. Code are ready!"    
     }
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