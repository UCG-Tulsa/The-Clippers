document.addEventListener("DOMContentLoaded", (event)=> {
    //Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').fforEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault(); 
            document.querySelector(this.getAttribute("href")).scrollingView({
                behaviour: "smooth",
            });
        });
    });


    // Mobile menu toggle
    const navlinks = documment.querySelector(".nav-links");
    const menulcon = document.createElement("div");
    menulcon.classList.add("menu-icon");
    menulcon.innerHTML = "☰";
    document.querySelector("nav").prepend(menulcon);

    menulcon.addEventListener("click", () => {
        navlinks.classList.toggle("active");

    })
})
