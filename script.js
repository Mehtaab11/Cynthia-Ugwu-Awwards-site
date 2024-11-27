const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


function firstPageAnim() {
    var tl = gsap.timeline()
    tl.from(".nav", {

        y: '-10',
        opacity: 0,
        duration: 1.5,

        ease: Expo.easeInOut

    })

    tl.to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2,


    })

    tl.from(".headerfooter", {
        y: 10,
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 1.5,
        delay: -1
    })






}

var timeout;

function mouseSkew() {


    var scaleX = 1
    var scaleY = 1

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", (dets) => {
        clearTimeout(timeout)
        var xdiff = dets.clientX - xprev;
        xprev = dets.clientX;

        var ydiff = dets.clientY - yprev;
        yprev = dets.clientY;

        scaleX = gsap.utils.clamp(0.8, 1.2, xdiff)
        scaleY = gsap.utils.clamp(0.8, 1.2, ydiff)

        mousemoveanim(scaleX, scaleY)

        timeout = setTimeout(function () {
            const cursor = document.querySelector(".minicircle");
            cursor.style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(1, 1)`

        }, 100)

    })
}

function mousemoveanim(scaleX, scaleY) {


    window.addEventListener("mousemove", (dets) => {
        const cursor = document.querySelector(".minicircle");
        cursor.style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${scaleX}, ${scaleY})`

    })


}

document.querySelectorAll(".elem").forEach((elem) => {


    var diffrot = 0;
    var rotate = 0;

    elem.addEventListener("mouseleave", (dets) => {

        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power1,
            duration: 0.5,
        })

        document.querySelector(".minicircle").style.height = '12px';
        document.querySelector(".minicircle").style.width = '12px';
        document.querySelector(".minicircle").style.backgroundColor = '#fff';

    })



    elem.addEventListener("mousemove", (dets) => {


        var diff = dets.clientY - elem.getBoundingClientRect().top;

        diffrot = dets.clientX - rotate;
        rotate = dets.clientX

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-25, 25, diffrot / 2.5)


        })

    })


})

function timeChange(){
    
let now = new Date()
let hours = String(now.getHours()).padStart(2, "0");
let minutes = String(now.getMinutes()).padStart(2, "0");

let year = now.getFullYear()

const formattedTime = `${hours} : ${minutes}`
const formattedYear = ` &copy; ${year}`


document.querySelector(".time").innerHTML = formattedTime;
document.querySelector(".year").innerHTML = formattedYear;

console.log(formattedTime, formattedYear);

setInterval(() => {

    let now = new Date()
    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");

    let year = now.getFullYear()

    const formattedTime = `${hours} : ${minutes}`
    const formattedYear = ` &copy; ${year}`


    document.querySelector(".time").innerHTML = formattedTime;
    document.querySelector(".year").innerHTML = formattedYear;

    console.log(formattedTime, formattedYear);

}, 60000);
}


timeChange();
mouseSkew();
mousemoveanim();
firstPageAnim();