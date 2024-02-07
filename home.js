// Get Elements from HTML file
let sec3 = document.querySelector(".skills")
let skillsProgress = document.querySelectorAll(".skills .progress span")
// Get Section Four
let sec4 = document.querySelector(".projects")
// Get All Spans In Section Four
let testSpan = document.querySelectorAll(".projects span")
// Get All Projects Divs
let allProjects = document.querySelectorAll(".proDiv")
// Get All Navbar's Links
let allNavLinks = document.querySelectorAll(".navbar .nav-link")
// Project one status => "Hide and Seek"
let projStateColorOne = document.querySelector(".proj_state1 :first-child")
let projStateOne = document.querySelector(".proj_state1 :last-child")
projectStatus(projStateColorOne, projStateOne, 73)
// Project two status => "Memory Game"
let projStateColorTwo = document.querySelector(".proj_state2 :first-child")
let projStateTwo = document.querySelector(".proj_state2 :last-child")
projectStatus(projStateColorTwo, projStateTwo, 90)
// Project three status => "Space"
let projStateColorThree = document.querySelector(".proj_state3 :first-child")
let projStateThree = document.querySelector(".proj_state3 :last-child")
projectStatus(projStateColorThree, projStateThree, 60)
// Project four status => "Old Portfolio"
let projStateColorFour = document.querySelector(".proj_state4 :first-child")
let projStateFour = document.querySelector(".proj_state4 :last-child")
projectStatus(projStateColorFour, projStateFour, 100)
// Project five status => "Words Game"
let projStateColorFive = document.querySelector(".proj_state5 :first-child")
let projStateFive = document.querySelector(".proj_state5 :last-child")
projectStatus(projStateColorFive, projStateFive, 88)
// Project six status => "Falling Bird"
let projStateColorSix = document.querySelector(".proj_state6 :first-child")
let projStateSix = document.querySelector(".proj_state6 :last-child")
projectStatus(projStateColorSix, projStateSix, 44)
// Project seven status => "NoteBook"
let projStateColorSeven = document.querySelector(".proj_state7 :first-child")
let projStateSeven = document.querySelector(".proj_state7 :last-child")
projectStatus(projStateColorSeven, projStateSeven, 53)

let started = false;

// Make link active
allNavLinks.forEach((a) => { a.addEventListener("click", () => {
    // Remove all other active classes
    allNavLinks.forEach((e) => e.classList.remove("active"))
    // Add active class to the link
    a.classList.add("active")
    // If active class exist, don't add it again
    if(a.classList.contains("active")){
        return false;
    }
    })
})

// Skills Progress Increasing 
window.onscroll = function(){
    // When ScrollY > or = The top of Sec3 - 300 Scroll, Progress will Increase
    if(window.scrollY >= sec3.offsetTop -300){
        skillsProgress.forEach((e) => {
            e.style.width = e.dataset.width;
        })
        // When ScrollY < The top of Sec3 - 300 Scroll or ScrollY > The top of Sec3 + 530 Scroll, Progress will Increase
    } if (window.scrollY < sec3.offsetTop - 400 || window.scrollY > sec3.offsetTop + 600) {
        skillsProgress.forEach((e) => {
            e.style.width = "0";
        })
    }
    // Else will return Nothing
    else {
        return false
    }
}
// Increasing Numbers Function
function Counter(span){
    // Counting Up
    let counter = setInterval(() => {
        span.textContent++
        // Stop Counting When Numbers Are Finished
        if(span.textContent === span.dataset.target){
            clearInterval(counter)
        }
    }, 100)
}
// Add Animation Function
function addAnimation(ele, animation){
    ele.classList.add("animate__animated")
    ele.classList.add(animation)

    setTimeout(() => {
        ele.classList.remove("animate__animated")
        ele.classList.remove(animation)
    }, 1000)
}

// Project status function
function projectStatus(spanOne, spanTwo, percent){
    // first span width
    let stateColorWidth = percent
    spanOne.style.width = `${stateColorWidth}%`
    // first span color
    if(percent > 0 && percent < 30){
        spanOne.style.backgroundColor = "red"
    }
    if(percent > 30 && percent < 50){
        spanOne.style.backgroundColor = "orange"
    }
    if(percent > 50 && percent < 80){
        spanOne.style.backgroundColor = "yellow"
    }
    if(percent >= 80){
        spanOne.style.backgroundColor = "rgb(9, 255, 9)"
    }
    // inner text in the second span
    let stateNumber = percent
    spanTwo.innerHTML = `${stateNumber}%`
    // the position of the second span
    let statePositionLeft = `${percent - 12}%`
    spanTwo.style.left = statePositionLeft
}

