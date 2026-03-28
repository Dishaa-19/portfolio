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

// Force Audio Enable on showreel videos
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
// POSTER / GRAPHIC DESIGN
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

function openGallery() {
    currentIndex = 0;
    document.getElementById("posterImg").src = posters[currentIndex];
    document.getElementById("posterViewer").style.display = "flex";
}

function closeGallery() {
    document.getElementById("posterViewer").style.display = "none";
}

function nextImage() {
    currentIndex = (currentIndex + 1) % posters.length;
    document.getElementById("posterImg").src = posters[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + posters.length) % posters.length;
    document.getElementById("posterImg").src = posters[currentIndex];
}


// =======================
// ILLUSTRATION SYSTEM
// =======================

const illustrations = [
    { type: "video", src: "illustration/video1.mp4" },
    { type: "video", src: "illustration/video2.mp4" },
    { type: "video", src: "illustration/video3.mp4" },
    { type: "video", src: "illustration/video4.mp4" },
    { type: "video", src: "illustration/video5.mp4" },
    { type: "video", src: "illustration/video6.mp4" },
    { type: "img", src: "illustration/illus1.jpeg" },
    { type: "img", src: "illustration/illus2.png" },
    { type: "img", src: "illustration/illus3.jpeg" },
    { type: "img", src: "illustration/illus4.jpeg" },
    { type: "img", src: "illustration/illus5.jpeg" },
    { type: "img", src: "illustration/illus6.png" },
    { type: "img", src: "illustration/illus7.png" },
    { type: "img", src: "illustration/illus8.jpeg" },
    { type: "img", src: "illustration/illus9.jpeg" },
    { type: "img", src: "illustration/illus10.png" },
    { type: "img", src: "illustration/illus11.jpeg" },
    { type: "img", src: "illustration/illus12.png" }
];

let illusIndex = 0;

function showIllus() {
    const item = illustrations[illusIndex];
    const img = document.getElementById("illusImg");
    const video = document.getElementById("illusVideo");

    img.style.display = "none";
    video.style.display = "none";
    video.pause();
    video.currentTime = 0;

    if (item.type === "img") {
        img.src = item.src;
        img.style.display = "block";
    } else {
        video.src = item.src;
        video.load();
        video.style.display = "block";
    }
}

function openIllustration() {
    illusIndex = 0;
    document.getElementById("illustrationViewer").style.display = "flex";
    showIllus();
}

function closeIllustration() {
    const video = document.getElementById("illusVideo");
    video.pause();
    document.getElementById("illustrationViewer").style.display = "none";
}

function nextIllus() {
    illusIndex = (illusIndex + 1) % illustrations.length;
    showIllus();
}

function prevIllus() {
    illusIndex = (illusIndex - 1 + illustrations.length) % illustrations.length;
    showIllus();
}


// =======================
// VIDEO EDITING SYSTEM
// =======================

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

function showVideoEdit() {
    const player = document.getElementById("videoEditPlayer");
    player.pause();
    player.src = videoEdits[videoIndex];
    player.load();
}

function openVideoEdit() {
    videoIndex = 0;
    document.getElementById("videoViewer").style.display = "flex";
    showVideoEdit();
}

function closeVideoEdit() {
    const player = document.getElementById("videoEditPlayer");
    player.pause();
    document.getElementById("videoViewer").style.display = "none";
}

function nextVideo() {
    videoIndex = (videoIndex + 1) % videoEdits.length;
    showVideoEdit();
}

function prevVideo() {
    videoIndex = (videoIndex - 1 + videoEdits.length) % videoEdits.length;
    showVideoEdit();
}


// =======================
// MOTION GRAPHICS SYSTEM
// =======================

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

function showMotion() {
    const player = document.getElementById("motionPlayer");
    player.pause();
    player.src = motionVideos[motionIndex];
    player.load();
}

function openMotion() {
    motionIndex = 0;
    document.getElementById("motionViewer").style.display = "flex";
    showMotion();
}

function closeMotion() {
    const player = document.getElementById("motionPlayer");
    player.pause();
    document.getElementById("motionViewer").style.display = "none";
}

function nextMotion() {
    motionIndex = (motionIndex + 1) % motionVideos.length;
    showMotion();
}

function prevMotion() {
    motionIndex = (motionIndex - 1 + motionVideos.length) % motionVideos.length;
    showMotion();
}


// =======================
// SWIPE SUPPORT (single, clean version)
// =======================

document.addEventListener("DOMContentLoaded", function () {

    // --- Poster swipe ---
    const posterViewer = document.getElementById("posterViewer");
    let pStartX = 0;
    posterViewer.addEventListener("touchstart", e => { pStartX = e.touches[0].clientX; });
    posterViewer.addEventListener("touchend", e => {
        const diff = pStartX - e.changedTouches[0].clientX;
        if (diff > 50) nextImage();
        else if (diff < -50) prevImage();
    });

    // --- Illustration swipe ---
    const illusViewer = document.getElementById("illustrationViewer");
    let iStartX = 0;
    illusViewer.addEventListener("touchstart", e => { iStartX = e.touches[0].clientX; });
    illusViewer.addEventListener("touchend", e => {
        const diff = iStartX - e.changedTouches[0].clientX;
        if (diff > 50) nextIllus();
        else if (diff < -50) prevIllus();
    });

    // --- Video Editing swipe ---
    const videoViewer = document.getElementById("videoViewer");
    let vStartX = 0;
    videoViewer.addEventListener("touchstart", e => { vStartX = e.touches[0].clientX; });
    videoViewer.addEventListener("touchend", e => {
        const diff = vStartX - e.changedTouches[0].clientX;
        if (diff > 50) nextVideo();
        else if (diff < -50) prevVideo();
    });

    // --- Motion swipe ---
    const motionViewer = document.getElementById("motionViewer");
    let mStartX = 0;
    motionViewer.addEventListener("touchstart", e => { mStartX = e.touches[0].clientX; });
    motionViewer.addEventListener("touchend", e => {
        const diff = mStartX - e.changedTouches[0].clientX;
        if (diff > 50) nextMotion();
        else if (diff < -50) prevMotion();
    });

});


// =======================
// HAMBURGER MENU
// =======================

function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}

document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("nav-links").classList.remove("active");
    });
});
// Close menu when clicking outside of it on mobile
document.addEventListener("click", function(e) {
    const nav = document.getElementById("nav-links");
    const toggle = document.querySelector(".menu-toggle");

    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove("active");
    }
});