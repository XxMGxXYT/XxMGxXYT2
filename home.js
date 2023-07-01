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
    
    // if(window.scrollY >= sec4.offsetTop){
    //     if(!started){
    //         testSpan.forEach((e) => Counter(e))
    //     }
    //     started = true
    // }
    

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


