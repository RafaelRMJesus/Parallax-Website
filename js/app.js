const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0;
let yValue = 0;

var x = null;
var y = null;

document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);

function onMouseUpdate(e) {
    x = e.pageX;
    y = e.pageY;
}

window.addEventListener('mousemove', (e) => {
  let xValue = e.clientX - window.innerWidth / 2;
  let yValue = e.clientY - window.innerHeight / 2;



  parallax_el.forEach((element) => {

    let speedx = element.dataset.speedx;
    let speedy = element.dataset.speedy;

    element.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
  });
});

let timeline = gsap.timeline();

Array.from(parallax_el)
  .filter(el => !el.classList.contains("text"))
  .forEach((el) => {
    timeline.from(
      el,
      {
      top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
      duration: 3.5,
      ease: "power3.out"
  },
  "1"
  )
});

timeline.from(".text .teste h1", {
  y: window.innerHeight - document.querySelector(".text h1").getBoundingClientRect().top,
  duration: 2,
},
  "2.5"
).from(".text h2", {
  y: -150, 
  opacity: 0,
  duration: 1.5,
}, "3")

timeline.from(".text .teste p", {
  y: window.innerHeight - document.querySelector(".text p").getBoundingClientRect().top,
  duration: 2,
},
  "2.5"
)

timeline.from(".text .teste i", {
  y: window.innerHeight - document.querySelector(".text i").getBoundingClientRect().top,
  duration: 2,
},
  "2.5"
)


