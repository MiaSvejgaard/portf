document.addEventListener("DOMContentLoaded", HentGentagelser);

async function HentGentagelser() {
  let footerData = await fetch("footer.html");
  let footer = await footerData.text();
  document.querySelector("footer").innerHTML = footer;
}

const left = document.querySelectorAll("#left path");
TweenMax.staggerFrom(
  left,
  0.2,
  {
    ease: Power4.easeOut,
    x: -2000
  },
  0.03
);

const right = document.querySelectorAll("#right path");
TweenMax.staggerFrom(
  right,
  0.2,
  {
    ease: Power4.easeOut,
    x: 2000
  },
  0.03
);

document.addEventListener("DOMContentLoaded", move);

function move() {
  let elem = document.querySelector("#myBar");
  let width = 1;
  let id = setInterval(frame, 27);

  function frame() {
    if (width >= 92) {
      clearInterval(id);
    } else {
      setTimeout(frame, 3000);
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = "Adobe Creative Cloud";
    }
  }
}
document.addEventListener("DOMContentLoaded", move2);
function move2() {
  let elem2 = document.querySelector("#myBar2");
  let width = 10;
  let id = setInterval(frame, 45);
  function frame() {
    if (width >= 60) {
      clearInterval(id);
    } else {
      width++;
      elem2.style.width = width + "%";
      elem2.innerHTML = "HTML & CSS";
    }
  }
}

document.addEventListener("DOMContentLoaded", move3);
function move3() {
  let elem3 = document.querySelector("#myBar3");
  let width = 10;
  let id = setInterval(frame, 45);
  function frame() {
    if (width >= 50) {
      clearInterval(id);
    } else {
      width++;
      elem3.style.width = width + "%";
      elem3.innerHTML = "JS, JSON & REST API";
    }
  }
}
document.addEventListener("DOMContentLoaded", move4);
function move4() {
  let elem4 = document.querySelector("#myBar4");
  let width = 10;
  let id = setInterval(frame, 45);
  function frame() {
    if (width >= 55) {
      clearInterval(id);
    } else {
      width++;
      elem4.style.width = width + "%";
      elem4.innerHTML =
        "SEO, UX / UI Design, User Testing, Design Thinking & Project Management";
    }
  }
}

//denne her virker
// document.addEventListener("DOMContentLoaded", move);
// function move() {
//   let elem = document.querySelector("#myBar");
//   let elem2 = document.querySelector("#myBar2");
//   let width = 10;
//   let width2 = 10;
//   let id = setInterval(frame, 45);

//   function frame() {
//     if (width >= 100) {
//       clearInterval(id);
//     } else {
//       width++;
//       elem.style.width = width + "%";
//       elem.innerHTML = width * 1 + "%";
//       elem2.style.width = width + "%";
//       elem2.innerHTML = width * 1 + "%";
//     }
//   }
// }
