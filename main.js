let toggler = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let closer = document.querySelector(".close");
let navElements = document.querySelectorAll("nav a")

let section1 = document.querySelector(".one")
let generateBtn = document.querySelector(".generate");
let serial = document.querySelector(".serial");

let nums = document.querySelectorAll(".nums .num");
let section3 = document.querySelector(".three");
let started = false; // Function Started ? No

let bars = document.querySelectorAll(".progress span");
let section2 = document.querySelector(".two");

let arr = ["Ahmed", "Sayed", "Ali"]
let section4 = document.querySelector(".four");
let random = document.querySelector(".random span");

let section5 = document.querySelector(".five");
let switchersList = document.querySelectorAll(".switcher li");
let imgs = document.querySelectorAll(".gallery img");

let up = document.querySelector(".up");

toggler.onclick = function () {
  nav.classList.add("open")
}

closer.onclick = function () {
  this.parentElement.classList.remove("open")
}

navElements.forEach((ele) => {
  ele.onclick = function () {
    this.parentElement.classList.remove("open")
  }
})

generateBtn.addEventListener("click", function () {
  let characters = "012356789ABCDEF";
  let charsCount = 6;
  let randomSerial = "";
  for (let i = 0; i < charsCount; i++) {
    randomSerial += characters[Math.trunc(Math.random() * characters.length)]
  }
  serial.innerHTML = randomSerial;
  section1.style.backgroundColor = `#${randomSerial}`
})

window.onscroll = function () {
  if (window.scrollY >= section2.offsetTop - 100) {
    bars.forEach((bar) => {
      bar.style.width = bar.dataset.width
    })
  }

  if (window.scrollY >= section3.offsetTop - 100) {
    if (!started) {
      nums.forEach((num) => startCount(num));
      random.textContent = `${arr[Math.trunc(Math.random() * arr.length)]}`
    }
    started = true;
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


switchersList.forEach((tab) => {
  tab.addEventListener("click", function () {
    switchersList.forEach((tab) => {
      tab.classList.remove("active");
      this.classList.add("active");
    });
    imgs.forEach((img) => {
      img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((img) => {
      img.style.display = "block"
    });
  })
})