// Loading
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2000);
});

// Elements
const startBtn = document.getElementById("startBtn");
const intro = document.querySelector(".intro");
const slideshow = document.querySelector(".slideshow");
const gallery = document.querySelector(".gallery");
const video = document.querySelector(".video-section");
const ending = document.getElementById("ending");
const music = document.getElementById("bgMusic");

// Hide everything initially
intro.style.display = "none";
slideshow.style.display = "none";
gallery.style.display = "none";
video.style.display = "none";
ending.style.display = "none";

// Letter
const message = `Happy Birthday, My Beautiful Bubu ❤️

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
        setTimeout(typeWriter, 40);
    }
}

startBtn.onclick = function () {

    music.play().catch(()=>{});
    
    slideshow.style.display = "flex";
    intro.style.display = "block";
    gallery.style.display = "block";
    video.style.display = "block";
    ending.style.display = "block";
startFireworks();
    document.getElementById("loveLetter").innerHTML = "";
    i = 0;
    typeWriter();

    intro.scrollIntoView({
        behavior: "smooth"
        ;
    });

};

// Hearts
function createHeart(){
    const heart=document.createElement("div");
    heart.className="heart";
    heart.innerHTML="❤️";
    heart.style.left=Math.random()*window.innerWidth+"px";
    heart.style.top=window.innerHeight+"px";
    heart.style.fontSize=(18+Math.random()*20)+"px";
    document.body.appendChild(heart);

    setTimeout(()=>heart.remove(),8000);
}

setInterval(createHeart,350);

// Slideshow
const photos=[
"1.jpg.jpeg",
"2.jpg.jpeg",
"3.jpg.jpeg",
"4.jpg.jpeg",
"5.jpg.jpeg",
"6.jpg.png",
"7.jpg.jpeg"
];

let current=0;
const slide=document.getElementById("slide");

setInterval(()=>{
    current=(current+1)%photos.length;
    slide.src=photos[current];
},4000);

// Lightbox
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

function burst(x, y) {

    for (let i = 0; i < 120; i++) {

        particles.push({

            x: x,
            y: y,

            dx: (Math.random() - 0.5) * 12,
            dy: (Math.random() - 0.5) * 12,

            radius: Math.random() * 3 + 2,

            life: 100,

            color: `hsl(${Math.random()*360},100%,60%)`

        });

    }

}

function animate() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach((p,index)=>{

        ctx.beginPath();

        ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);

        ctx.fillStyle=p.color;

        ctx.fill();

        p.x+=p.dx;
        p.y+=p.dy;

        p.dy+=0.03;

        p.life--;

        if(p.life<=0){
            particles.splice(index,1);
        }

    });

    if(particles.length>0){
        requestAnimationFrame(animate);
    }

}

burst(canvas.width/2,canvas.height/2);

setTimeout(()=>burst(canvas.width*0.25,canvas.height*0.35),500);

setTimeout(()=>burst(canvas.width*0.75,canvas.height*0.30),1000);

setTimeout(()=>burst(canvas.width*0.50,canvas.height*0.20),1500);

animate();

}
