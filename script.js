// ===== Loading Screen =====
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => loader.style.display = "none", 1000);
    }
  }, 2500);
});

// ===== Smooth Scroll =====
const startBtn = document.getElementById("startBtn");

if (startBtn) {
  startBtn.addEventListener("click", () => {
    document.querySelector(".intro").scrollIntoView({
      behavior: "smooth"
    });
  });
}

// ===== Reveal Animation =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});

// ===== Typewriter Letter =====
const message =
`Happy Birthday, My Beautiful Bubu ❤️

Every day with you feels special.

Thank you for making my life happier.

Your smile makes every bad day disappear.

I hope this birthday is as beautiful as you are.

I promise to keep making memories with you.

Happy Birthday.

Forever Yours,

Dudu ❤️`;

let i = 0;

function typeWriter() {

  const typing = document.getElementById("typing");

  if (!typing) return;

  if (i < message.length) {

    typing.innerHTML +=
      message.charAt(i) === "\n"
        ? "<br>"
        : message.charAt(i);

    i++;

    setTimeout(typeWriter, 45);

  }

}

setTimeout(typeWriter, 3500);
const countdown = document.getElementById("countdown");

function updateCountdown() {
    countdown.innerHTML = "Today is your special day ❤️";
}

updateCountdown();

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.top = window.innerHeight + "px";

    heart.style.fontSize = (18 + Math.random() * 22) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 350);

const images=document.querySelectorAll(".gallery-grid img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightbox-img");

images.forEach(img=>{

img.onclick=()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

}

});

function closeImage(){

lightbox.style.display="none";

}
