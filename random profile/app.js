const profiles = [
    {
      name: "John Doe",
      designation: "Software Engineer",
      about: "Passionate developer with a knack for solving complex problems.",
      imgUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Jane Smith",
      designation: "Graphic Designer",
      about: "Creative artist specializing in digital and print media.",
      imgUrl: "https://images.pexels.com/photos/749091/pexels-photo-749091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "David Johnson",
      designation: "Marketing Manager",
      about: "Experienced marketer driving brand growth through data-driven strategies.",
      imgUrl: "https://images.pexels.com/photos/2790443/pexels-photo-2790443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Emily Brown",
      designation: "Financial Analyst",
      about: "Detail-oriented professional analyzing financial data for informed decisions.",
      imgUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Michael Wilson",
      designation: "Product Manager",
      about: "Innovative leader guiding product development from concept to market.",
      imgUrl: "https://images.pexels.com/photos/1559487/pexels-photo-1559487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Sarah Davis",
      designation: "UX Designer",
      about: "Creating user-centered designs for seamless digital experiences.",
      imgUrl: "https://images.pexels.com/photos/2568412/pexels-photo-2568412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Robert Lee",
      designation: "HR Specialist",
      about: "Dedicated to building a positive workplace culture through HR solutions.",
      imgUrl: "https://images.pexels.com/photos/1851253/pexels-photo-1851253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Amanda Hall",
      designation: "Sales Representative",
      about: "Striving to meet customer needs and exceed sales targets.",
      imgUrl: "https://images.pexels.com/photos/2467389/pexels-photo-2467389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  console.log(profiles.length)
  console.log(profiles[0])


// elements want to change

let image = document.getElementById("image")
let user = document.getElementById("name")
let job = document.getElementById("designation")
let info = document.getElementById("about")

// elements where we will apply eventlistener

let left = document.getElementById("left")
let right = document.getElementById("right")
let randomProfile = document.getElementById("random")
  
let profileNum = 0;

// injecting informations

function inject (){
    let text = profiles[profileNum]
    image.src = text.imgUrl
    user.textContent = text.name
    job.textContent = text.designation
    info.textContent = text.about
}
inject()


// adding event listeners

left.addEventListener("click", function (){
    if(profileNum > 0){
        profileNum--
        inject()
    } else{
        profileNum = 7;
        inject()
    }
})

right.addEventListener("click", function (){
    if(profileNum < profiles.length- 1){
        profileNum++
        inject()
    } else if(profileNum == profiles.length - 1){
        profileNum = 0;
        inject()
    }
})

randomProfile.addEventListener("click", function (){
    profileNum = Math.floor(Math.random()*profiles.length)
    inject()

})
