const hamburger = document.querySelector(".hamburger")
const sidebar = document.querySelector(".sidebar")
const cross = document.querySelector(".cross")
const list = document.querySelectorAll('li')

hamburger.addEventListener("click", function (){
    hamburger.classList.toggle("active")
    sidebar.classList.toggle("active")
})

cross.addEventListener("click", function (){
    hamburger.classList.remove("active")
    sidebar.classList.remove("active")
})
list.forEach(elem=>{
    elem.addEventListener("click", ()=>{
        hamburger.classList.remove("active")
        sidebar.classList.remove("active")
    })
})

