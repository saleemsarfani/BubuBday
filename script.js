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

startBtn.addEventListener("click", () => {

    document.getElementById("bgMusic").play().catch(() => {});

    document.querySelector(".slideshow").style.display = "flex";
    document.querySelector(".intro").style.display = "block";
    document.querySelector(".video-section").style.display = "block";

    const ending = document.getElementById("ending");
    if (ending) ending.style.display = "flex";

    document.querySelector(".slideshow").scrollIntoView({
        behavior: "smooth"
    });

    document.getElementById("loveLetter").innerHTML = "";
    i = 0;
    typeWriter();
});

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
    if (i < message.length) {
        document.getElementById("loveLetter").innerHTML +=
            message.charAt(i) === "\n" ? "<br>" : message.charAt(i);
        i++;
  setTimeout(typeWriter, 45);
    }
}

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


const photos=[
"1.jpg.jpeg",
"2.jpg.jpeg",
"3.jpg.jpeg",
"4.jpg.jpeg",
"5.jpg.jpeg",
"6.jpg.jpeg",
"7.jpg.jpeg"
];

let current=0;
const slide=document.getElementById("slide");

setInterval(()=>{

    slide.classList.add("fade");

    setTimeout(()=>{

        current=(current+1)%photos.length;

        slide.src=photos[current];

        slide.classList.remove("fade");

    },1000);

},5000);
