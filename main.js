import {userArr} from './data.js'

let main = document.querySelector('main')
let container = document.querySelector('.orientedCont')
let mainColor = document.querySelector('.mainColor')
let score = document.querySelector('.scoreBoard')
let form = document.querySelector('.form')
let button = document.querySelector('.button')
let input = document.querySelector('.input')
let inputs = document.querySelector('.inputs')
let leaderBoard = document.querySelector('.leaderBoard')

function randomColor() {
  let r = Math.round(Math.random() * 255)
  let g = Math.round(Math.random() * 255)
  let b = Math.round(Math.random() * 255)

  return `rgb(${r}, ${g}, ${b})`
}

function randomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length)
  return arr[randIndex]
}
let points = 0
let level = 0
let best = 0

let amount = 4
let colors = []

let added = 0

for(let i = 0; i<amount; i++){
    colors.push(randomColor())

    let circle = document.createElement('div')
    circle.style.backgroundColor = colors[i]
    container.appendChild(circle)

}

function updateLeaderboard() {
    leaderBoard.innerHTML = "<h3>Leaderboard</h3>"

    let sortedArr = newArr.sort((a, b) => b.points - a.points)

    for (let i = 0; i < sortedArr.length; i++) {
        let scores = document.createElement('p')
        scores.textContent = `N${i + 1}   ${sortedArr[i].name} with ${sortedArr[i].points} points`
        leaderBoard.appendChild(scores)
    }
}

let newArr = []

function usernameCheck() {
    for(let el of newArr){
        if(el.name == username){

            alert('Name already exists!')

            alert.addEventListener("click", function() {
                inputs.style.display = 'flex'
            });
            
        }
        else if(username == ''){
            alert('Please enter your name!')

            alert.addEventListener("click", function() {
                inputs.style.display = 'flex'
            });
        }
    }
}

let username

button.addEventListener('click', function(){
    username = input.value
    console.log(username)
    usernameCheck()

    inputs.style.display = 'none'
    
    return username



})


function startOver() {
    points = 0
    level = 0
    best = 0
    
    amount = 4
    colors = []
    
    added = 0

    container.innerHTML = ''

    for(let i = 0; i<amount; i++){
        colors.push(randomColor())
    
        let circle = document.createElement('div')
        circle.style.backgroundColor = colors[i]
        container.appendChild(circle)
    
    }

    mainColor.style.backgroundColor = randomElement(colors)

    container.style.width = '250px'
}

mainColor.style.backgroundColor = randomElement(colors)

function oneMoreTime() {
  colors = []
  for(let i = 0; i<amount; i++){
      colors.push(randomColor())
      container.children[i].style.backgroundColor = colors[i]
  }
  mainColor.style.backgroundColor = randomElement(colors)
}

function addMore() {
    
    if(points>5 && added == 0){
        for(let i = 0; i<2; i++){
            amount++
            let circle = document.createElement('div')
            circle.style.backgroundColor = randomColor()
            container.appendChild(circle)
            oneMoreTime()
        }
        container.style.width = '350px'
        added++
    }
    else if(points>10 && added == 1){
        for(let i = 0; i<2; i++){
            amount++
            let circle = document.createElement('div')
            circle.style.backgroundColor = randomColor()
            container.appendChild(circle)
            oneMoreTime()
        }
        container.style.width = '500px'
        added++
    }
    else if(points>15 && added == 2){
        for(let i = 0; i<2; i++){
            amount++
            let circle = document.createElement('div')
            circle.style.backgroundColor = randomColor()
            container.appendChild(circle)
            oneMoreTime()
        }
        container.style.width = '650px'
        added++
    }
    else if(points>30 && added == 3){
        newArr.push({
            name: username,
            points: level
        })

        // newArr = [...userArr, ...newArr]

        updateLeaderboard()

        startOver()

        console.log(userArr)
        
        inputs.style.display = 'flex'

        alert('You are a winner!')


    }
    else if(level<0){
        newArr.push({
            name: username,
            points: level
        })

        // newArr = [...userArr, ...newArr]

        updateLeaderboard()

        startOver()

        console.log(userArr)

        inputs.style.display = 'flex'
        
        alert('You lost!')

    }
}

container.addEventListener('click', function(e){
    if(e.target.style.backgroundColor == mainColor.style.backgroundColor){
        points++
        level += Math.round(Math.random() * 15)
        oneMoreTime()
    }else{
        level -= Math.round(Math.random() * 10)
        oneMoreTime()
    }
    addMore()

    score.innerHTML = `
    <p>Level: ${points}  / 30</p>
    <p>Points: ${level}</p>
    `
})

console.log(newArr)

for(let i = 0; i<newArr.length; i++){
    let scores = document.createElement('p')
    scores.textContent = `N${i+1}   ${newArr[i].name} with ${newArr[i].points} points`
    leaderBoard.appendChild(scores)
}








