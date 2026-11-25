let navs = document.querySelectorAll(".nav-link")

let phone_manu_icon = document.getElementById("phone_manu_icon");

let phone_nav = document.getElementById("phone-nav");

let close_menu = document.getElementById("close-menu")




console.log(phone_manu_icon);
console.log(phone_nav);


phone_manu_icon.addEventListener("click",() =>{

    
    phone_nav.style.transform = "translateX(0%)";
    
    
})
close_menu.addEventListener("click",() =>{

    
    phone_nav.style.transform = "translateX(100%)";
    
})





navs.forEach((nav) => {

    let listnav = nav.getAttribute("id");


    // nav.addEventListener("click", () => {
    //     if ("About") {
    //         location.href = "file:///E:/New%20Soft/day-17/About.html"
    //     } else if ("Home") {
    //         location.href = 'file:///E:/New%20Soft/day-17/Home.html '
    //     } else if ("Resume") {
    //         location.href = 'file:///E:/New%20Soft/day-17/Resume.html'
    //     }
    //     else if ("Services") {
    //         location.href = 'file:///E:/New%20Soft/day-17/Services.html'
    //     }
    //     else if ("Portfolio ") {
    //         location.href = 'file:///E:/New%20Soft/day-17/Portfolio.html'
    //     }
    //     else if ("Contact") {
    //         location.href = 'file:///E:/New%20Soft/day-17/Contact.html'
    //     }
    // })
    // nav.addEventListener("click" , "")
})

