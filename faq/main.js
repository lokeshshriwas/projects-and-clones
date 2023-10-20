const faqs = document.querySelectorAll(".faq")

faqs.forEach(faq =>{
    faq.addEventListener("click", ()=>{
        faqs.forEach(otherfaq =>{
            if(otherfaq !== faq){
            otherfaq.classList.remove('active')
            otherfaq.classList.remove('icon')
            
            }
        })
        faq.classList.toggle('active')
        faq.classList.toggle('icon')
    })
})