// ===== LOADER =====
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2000);
});

// ===== ELEMENTS =====
const startBtn = document.getElementById("startBtn");
const intro = document.querySelector(".intro");
const slideshow = document.querySelector(".slideshow");
const gallery = document.querySelector(".gallery");
const video = document.querySelector(".video-section");
const ending = document.getElementById("ending");
const music = document.getElementById("bgMusic");
const loveLetter = document.getElementById("loveLetter");

// Hide sections
[intro, slideshow, gallery, video, ending].forEach(el => {
    if (el) el.style.display = "none";
});

// ===== TYPEWRITER =====
const message = `Happy Birthday, My Beautiful Bubu ❤️

Every day with you feels special.

Thank you for making my life happier.

Your smile makes every bad day disappear.

I hope this birthday is as beautiful as you are.

I promise to keep making memories with you.

Happy Birthday ❤️

Forever Yours,

Dudu ❤️`;

let index = 0;

function typeWriter() {
    if (index >= message.length) return;

    loveLetter.innerHTML +=
        message[index] === "\n" ? "<br>" : message[index];

    index++;

    setTimeout(typeWriter, 40);
}

// ===== BUTTON =====
startBtn.onclick = () => {

    music.play().catch(() => {});
    startFireworks();

    slideshow.style.display = "flex";
    intro.style.display = "block";
    gallery.style.display = "block";
    video.style.display = "block";
    ending.style.display = "block";

    intro.scrollIntoView({
        behavior: "smooth"
    });

    loveLetter.innerHTML = "";
    index = 0;

    setTimeout(typeWriter,600);
};

// ===== HEARTS =====
function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*window.innerWidth+"px";

    heart.style.top=window.innerHeight+"px";

    heart.style.fontSize=(18+Math.random()*20)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>heart.remove(),7000);
}

setInterval(createHeart,400);

// ===== SLIDESHOW =====
const photos=[
"1.jpg.jpeg",
"2.jpg.jpeg",
"3.jpg.jpeg",
"4.jpg.jpeg",
"5.jpg.jpeg",
"6.jpg.png",
"7.jpg.jpeg"
];

const slide=document.getElementById("slide");

if(slide){

let current=0;

setInterval(()=>{

current=(current+1)%photos.length;

slide.src=photos[current];

},4000);

}

// ===== LIGHTBOX =====
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightbox-img");

document.querySelectorAll(".gallery-grid img").forEach(img=>{

img.onclick=()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

};

});

function closeImage(){

lightbox.style.display="none";

}



function startFireworks() {

    const canvas = document.getElementById("fireworks");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    for (let i = 0; i < 250; i++) {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            vx: (Math.random() - 0.5) * 15,
            vy: (Math.random() - 0.5) * 15,
            size: Math.random() * 5 + 3,
            life: 120,
            color: `hsl(${Math.random() * 360},100%,60%)`
        });
    }

    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {

            if (p.life <= 0) return;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();

            p.x += p.vx;
            p.y += p.vy;

            p.vy += 0.08;
            p.life--;
        });

        if (particles.some(p => p.life > 0)) {
            requestAnimationFrame(animate);
        }
    }

    animate();
}
