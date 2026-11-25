let navs = document.querySelectorAll(".nav-link")



navs.forEach((nav) => {

    let listnav = nav.getAttribute("id")

    console.log(nav)
    nav.addEventListener("click", () => {
        if ("About") {
            location.href = "file:///E:/New%20Soft/day-17/About.html"
        } else if ("Home") {
            location.href = 'file:///E:/New%20Soft/day-17/Home.html '
        } else if ("Resume") {
            location.href = 'file:///E:/New%20Soft/day-17/Resume.html'
        }
        else if ("Services") {
            location.href = 'file:///E:/New%20Soft/day-17/Services.html'
        }
        else if ("Portfolio ") {
            location.href = 'file:///E:/New%20Soft/day-17/Portfolio.html'
        }
        else if ("Contact") {
            location.href = 'file:///E:/New%20Soft/day-17/Contact.html'
        }
    })
    // nav.addEventListener("click" , "")
})

