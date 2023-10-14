let clutter = '';

let timer = Number(prompt("enter in seconds for how many second you want to play"))
// let timer = 60;
let score = 0;
let randomHit = 0;

function makeBubble(){
    for(let i = 0; i<136; i++){
        let rn = Math.floor(Math.random()*10)
        clutter += `<div class="elem">${rn}</div>`
    }
    
    document.querySelector(".content-area").innerHTML = clutter
}

function timeValue(){
    if(timer > 0){
        let time = setInterval(() => {
            if(timer >0 ){
                timer--;
                document.getElementById("timmer").textContent = `${timer}`
            } else{
                clearInterval(time)
                document.getElementById("contentArea").innerHTML = '';
                document.getElementById("contentArea").innerHTML = `<h1>GAME OVER </br>YOUR SCROE IS: <b>${score}</b></h1> `
            }
        }, 1000);
    }
}

function makeHit(){
    randomHit = Math.floor(Math.random()*10)
    document.getElementById("hitelem").textContent = randomHit
}

function increaseScore(){
    score += 10;
    document.getElementById("scoreElem").textContent = score
}

function decreaseScore(){
    score -= 5;
    document.getElementById("scoreElem").textContent = score
}

document.getElementById("contentArea")
.addEventListener("click", function(dets){
    let num = (Number(dets.target.textContent))

    if(randomHit == num){
        increaseScore()
        clutter = "";
        makeHit()
        makeBubble()
    } else decreaseScore()
})

makeHit()
timeValue()
makeBubble()


