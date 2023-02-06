let nums = document.querySelectorAll(".nums .num");
let section3 = document.querySelector(".three");
let started = false; // Function Started ? No

let bars = document.querySelectorAll(".progress span");
let section2 = document.querySelector(".two");

let arr = ["Ahmed", "Sayed", "Ali"]
let section4 = document.querySelector(".four");
let random = document.querySelector(".random span");

let up = document.querySelector(".up");

window.onscroll = function () {
  if (window.scrollY >= section3.offsetTop - 100) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }

  if (window.scrollY >= section2.offsetTop - 100) {
    bars.forEach((bar) => {
      bar.style.width = bar.dataset.width
    })
  }

  if (window.scrollY >= section4.offsetTop - 100) {
    random.textContent = `${arr[Math.trunc(Math.random() * arr.length)]}`
  }

  window.scrollY >= 500 ? up.classList.add("show") : up.classList.remove("show");
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

up.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})
