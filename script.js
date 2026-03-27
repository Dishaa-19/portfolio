// AOS Animation
AOS.init({
    duration: 1200,
    once: false
});

// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 🔥 FORCE AUDIO ENABLE
const videos = document.querySelectorAll("video");

videos.forEach(video => {
    video.muted = false;
    video.volume = 1.0;

    video.addEventListener("play", () => {
        video.muted = false;
    });

    video.addEventListener("click", () => {
        video.muted = false;
        video.volume = 1.0;
    });
});


// =======================
// 🎨 POSTER SYSTEM
// =======================

const posters = [
"posters/poster1.jpeg",
"posters/poster2.png",
"posters/poster3.jpeg",
"posters/poster4.jpeg",
"posters/poster5.jpeg",
"posters/poster6.jpeg",
"posters/poster7.jpeg",
"posters/poster8.jpeg",
"posters/poster9.jpeg",
"posters/poster10.jpeg",
"posters/poster11.jpeg",
"posters/poster12.png"
];

let currentIndex = 0;

function openGallery(){
    document.getElementById("posterViewer").style.display = "flex";
    document.getElementById("posterImg").src = posters[currentIndex];
}

function closeGallery(){
    document.getElementById("posterViewer").style.display = "none";
}

function nextImage(){
    currentIndex = (currentIndex + 1) % posters.length;
    document.getElementById("posterImg").src = posters[currentIndex];
}

function prevImage(){
    currentIndex = (currentIndex - 1 + posters.length) % posters.length;
    document.getElementById("posterImg").src = posters[currentIndex];
}


// =======================
// 🎬 ILLUSTRATION SYSTEM
// =======================

const illustrations = [

    // 🎥 Videos
    {type:"video", src:"illustration/video1.mp4"},
    {type:"video", src:"illustration/video2.mp4"},
    {type:"video", src:"illustration/video3.mp4"},
    {type:"video", src:"illustration/video4.mp4"},
    {type:"video", src:"illustration/video5.mp4"},
    {type:"video", src:"illustration/video6.mp4"},

    // 🖼️ Images
    {type:"img", src:"illustration/illus1.jpeg"},
    {type:"img", src:"illustration/illus2.png"},
    {type:"img", src:"illustration/illus3.jpeg"},
    {type:"img", src:"illustration/illus4.jpeg"},
    {type:"img", src:"illustration/illus5.jpeg"},
    {type:"img", src:"illustration/illus6.png"},
    {type:"img", src:"illustration/illus7.png"},
    {type:"img", src:"illustration/illus8.jpeg"},
    {type:"img", src:"illustration/illus9.jpeg"},
    {type:"img", src:"illustration/illus10.png"},
    {type:"img", src:"illustration/illus11.jpeg"},
    {type:"img", src:"illustration/illus12.png"}
];

let illusIndex = 0;

function showIllus(){
    const item = illustrations[illusIndex];

    const img = document.getElementById("illusImg");
    const video = document.getElementById("illusVideo");

    img.style.display = "none";
    video.style.display = "none";

    video.pause();
    video.currentTime = 0;

    if(item.type === "img"){
        img.src = item.src;
        img.style.display = "block";
    }else{
        video.src = item.src;
        video.load(); // 🔥 IMPORTANT
        video.style.display = "block";
    }
}

function openIllustration(){
    document.getElementById("illustrationViewer").style.display = "flex";
    showIllus();
}

function closeIllustration(){
    document.getElementById("illustrationViewer").style.display = "none";
}

function nextIllus(){
    illusIndex = (illusIndex + 1) % illustrations.length;
    showIllus();
}

function prevIllus(){
    illusIndex = (illusIndex - 1 + illustrations.length) % illustrations.length;
    showIllus();
}


// =======================
// 📱 SWIPE SUPPORT (FIXED)
// =======================

document.addEventListener("DOMContentLoaded", function(){

    // Poster swipe
    const img = document.getElementById("posterImg");

    if(img){
        let startX = 0;

        img.addEventListener("touchstart", e => {
            startX = e.touches[0].clientX;
        });

        img.addEventListener("touchend", e => {
            let endX = e.changedTouches[0].clientX;

            if(startX - endX > 50){
                nextImage();
            }
            else if(endX - startX > 50){
                prevImage();
            }
        });
    }

    // Illustration swipe
    const illusArea = document.getElementById("illustrationViewer");

    if(illusArea){
        let startX2 = 0;

        illusArea.addEventListener("touchstart", e => {
            startX2 = e.touches[0].clientX;
        });

        illusArea.addEventListener("touchend", e => {
            let endX2 = e.changedTouches[0].clientX;

            if(startX2 - endX2 > 50){
                nextIllus();
            }
            else if(endX2 - startX2 > 50){
                prevIllus();
            }
        });
    }

});
const videoEdits = [
"videoEditing/video1.mp4",
"videoEditing/video2.mp4",
"videoEditing/video3.mp4",
"videoEditing/video4.mp4",
"videoEditing/video5.mp4",
"videoEditing/video6.mp4",
"videoEditing/video7.mp4",
"videoEditing/video8.mp4",
"videoEditing/video9.mp4"
];

let videoIndex = 0;

function showVideoEdit(){
    const player = document.getElementById("videoEditPlayer");

    player.pause();
    player.src = videoEdits[videoIndex];
    player.load();
}

function openVideoEdit(){
    document.getElementById("videoViewer").style.display = "flex";
    showVideoEdit();
}

function closeVideoEdit(){
    document.getElementById("videoViewer").style.display = "none";
}

function nextVideo(){
    videoIndex = (videoIndex + 1) % videoEdits.length;
    showVideoEdit();
}

function prevVideo(){
    videoIndex = (videoIndex - 1 + videoEdits.length) % videoEdits.length;
    showVideoEdit();
}
const motionVideos = [
"motion/video1.mp4",
"motion/video2.mp4",
"motion/video3.mp4",
"motion/video4.mp4",
"motion/video5.mp4",
"motion/video6.mp4",
"motion/video7.mp4",
"motion/video8.mp4",
"motion/video9.mp4",
"motion/video10.mp4"
];

let motionIndex = 0;

function showMotion(){
    const player = document.getElementById("motionPlayer");

    player.pause();
    player.src = motionVideos[motionIndex];
    player.load();
}

function openMotion(){
    document.getElementById("motionViewer").style.display = "flex";
    showMotion();
}

function closeMotion(){
    document.getElementById("motionViewer").style.display = "none";
}

function nextMotion(){
    motionIndex = (motionIndex + 1) % motionVideos.length;
    showMotion();
}

function prevMotion(){
    motionIndex = (motionIndex - 1 + motionVideos.length) % motionVideos.length;
    showMotion();
}
document.addEventListener("DOMContentLoaded", function(){

// Video Editing swipe
const videoArea = document.getElementById("videoViewer");

if(videoArea){
let startX = 0;

videoArea.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

videoArea.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;

    if(startX - endX > 50){
        nextVideo();
    }
    else if(endX - startX > 50){
        prevVideo();
    }
});
}

// Motion swipe
const motionArea = document.getElementById("motionViewer");

if(motionArea){
let startX2 = 0;

motionArea.addEventListener("touchstart", e => {
    startX2 = e.touches[0].clientX;
});

motionArea.addEventListener("touchend", e => {
    let endX2 = e.changedTouches[0].clientX;

    if(startX2 - endX2 > 50){
        nextMotion();
    }
    else if(endX2 - startX2 > 50){
        prevMotion();
    }
});
}

});