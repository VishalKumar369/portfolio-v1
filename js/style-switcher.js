const stylSwitcherToggler = document.querySelector(".style-switcher-toggler ")
stylSwitcherToggler.addEventListener('click', ()=>{
    document.querySelector('.style-switcher').classList.toggle("open")
})

window.addEventListener('scroll', ()=>{
    if(document.querySelector('.style-switcher').classList.contains("open")){
        document.querySelector('.style-switcher').classList.remove("open")
    }
})

// -----------------------theme color------------------------------------

const alterNateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color){
    alterNateStyle.forEach((style)=>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled")
        }else{
            style.setAttribute("disabled","true")
        }

    })
}

// -----------------------theme dark and light------------------------------------
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener('click',()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun")
    dayNight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("light")
})

window.addEventListener('load', ()=>{
    if( document.body.classList.contains("light")){
        dayNight.querySelector("i").classList.add("fa-moon")
    }else{
        dayNight.querySelector("i").classList.add("fa-sun")
    }
})

