const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0;
let yValue = 0;

window.addEventListener('mousemove', (e) => {
  let xValue = e.clientX - window.innerWidth / 2;
  let yValue = e.clientY - window.innerHeight / 2;

  let zValue = 100;

  parallax_el.forEach((element) => {

    let speedx = element.dataset.speedx;
    let speedy = element.dataset.speedy;

    element.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px) translateZ(${zValue}px)`;
  });
});
