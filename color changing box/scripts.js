let rect = document.getElementById("center")

rect.addEventListener("mousemove",function (details){
    let rectLocation = rect.getBoundingClientRect()
    let insideRectVal = (details.clientX - rectLocation.left)

    if(insideRectVal < rectLocation.width/2){
        let RedColor = gsap.utils.mapRange(0, rectLocation.width/2, 255, 0, insideRectVal)
        gsap.to(rect,{
            backgroundColor: `rgb(${RedColor}, 0 , 0)`,
            ease : Power4
        })
    }else {
        let BlueColor = gsap.utils.mapRange(rectLocation.width/2, rectLocation.width, 0, 255, insideRectVal)
        gsap.to(rect,{
            backgroundColor: `rgb(0,0,${BlueColor})`,
            ease : Power4
        })
    }
})

rect.addEventListener("mouseleave", function (){
    gsap.to(rect,{
        backgroundColor: "white"
    })
})


