// js, jquery mix


// Variables

const buttonToggle = document.querySelector(".primary-home-down-btn");
const navToggle = document.querySelector(".primary-navigation");
const secondayNavBtn = document.getElementById("primary-home-down-btn-fixed");
const selectSectionOne = document.getElementById("section-one");


//Footer - Date

let date = new Date();
let selectYear = date.getUTCFullYear();
document.getElementById("selectYear").innerHTML = selectYear;


// Nav button Rotation // Hide/Unhide Navbar

buttonToggle.addEventListener("click", () => {

    buttonToggle.classList.toggle("primary-home-down-btn-move");

    

    const visibility = navToggle.getAttribute("data-visible");

    if(visibility === "false") {
        navToggle.setAttribute("data-visible", "true");
        buttonToggle.setAttribute("aria-expanded", "true")
    } else {
        navToggle.setAttribute("data-visible", "false");
        buttonToggle.setAttribute("aria-expanded", "false")
    }


})

// secondary Nav button - link to page top + hidden at top height

$(secondayNavBtn).click(function () { 
   
    $(window).scrollTop(0);
   
});

$(window).scroll(function () { 

    if (window.scrollY > (selectSectionOne.offsetTop)) {
        $(secondayNavBtn).removeClass("primary-home-down-btn-fixed-hidden");
    } else {
        $(secondayNavBtn).addClass("primary-home-down-btn-fixed-hidden");
    }

});





// window width 700px set nav visible

addEventListener("resize", () => {

    if(screen.width >= 700) {
        navToggle.setAttribute("data-visible", "true");
    }
    if(screen.width < 700 && buttonToggle.getAttribute("aria-expanded") === "false")
    {
        buttonToggle.setAttribute("data-visible", "true");
        navToggle.setAttribute("data-visible", "false");
    }
 
})



if(screen.width >= 700){



    var scroll = $(document).scrollTop();
    var navHeight = $(navToggle).outerHeight();


    $(window).scroll(function () {

        var scrolled = $(document).scrollTop();

        if(scrolled > navHeight) {
            $(navToggle).addClass("animate");
        } else {
            $(navToggle).removeClass("animate");
        }

        if(scrolled > scroll) {
            $(navToggle).removeClass("sticky");
        } else {
            $(navToggle).addClass("sticky");
        }

        if(scrolled === navHeight) {
            $(navToggle).removeClass("sticky");
            $(navToggle).removeClass("animate");
        }

        scroll = $(document).scrollTop();

    })



    navToggle.setAttribute("data-visible", "true");

}







