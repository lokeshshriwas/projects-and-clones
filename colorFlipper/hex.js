let btn = document.getElementById('btn')
let colorText = document.getElementById("colorName")
let superMain = document.querySelector('.superMain')
let randomColor = "0123456789ABCDEF"


function choseRandom(){

    let num = "#"
    for(let i = 0; i<6; i++)
    num += randomColor.charAt(Math.random()*randomColor.length)

    return num
} 
choseRandom()

btn.addEventListener("click", function (){
    let hexCode = superMain.style.backgroundColor = choseRandom()
    colorText.innerHTML = hexCode

})




