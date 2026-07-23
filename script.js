
alert("SCRIPT VERSION 2026-07-2pppp4");
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
    let running = true;

    function burst(x, y) {

        const colors = [
            "#ff3b3b",
            "#ffd93d",
            "#4dff88",
            "#4da6ff",
            "#ff66ff",
            "#ffffff",
            "#ff8c42"
        ];

        const color = colors[Math.floor(Math.random() * colors.length)];

        for (let i = 0; i < 300; i++) {

            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 8 + 3;

            particles.push({

                x,
                y,

                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,

                size: Math.random() * 3 + 2,

                life: 120,

                color

            });

        }

    }

    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.globalCompositeOperation = "lighter";

        particles.forEach(p=>{

            if(p.life<=0) return;

            ctx.beginPath();
            ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
            ctx.fillStyle=p.color;
            ctx.shadowBlur=15;
            ctx.shadowColor=p.color;
            ctx.fill();

            p.x+=p.vx;
            p.y+=p.vy;

            p.vy+=0.05;

            p.life--;
        });

        particles=particles.filter(p=>p.life>0);

        if(running || particles.length){
            requestAnimationFrame(animate);
        }else{
            ctx.clearRect(0,0,canvas.width,canvas.height);
        }

    }

    animate();

    let count=0;

    const interval=setInterval(()=>{

        burst(
            Math.random()*canvas.width,
            Math.random()*canvas.height*0.45+50
        );

        count++;

        if(count>=40){
            clearInterval(interval);
            running=false;
        }

    },500);

}
