/* =========================================
   MONTHSARY WEBSITE
   FOR BABY ❤️
========================================= */


/* =========================================
   CHANGE THIS DATE
========================================= */

/*
   Put the date when your relationship started.

   Example:
   April 11, 2024

   Format:
   YYYY-MM-DD
*/

const relationshipDate = new Date("2024-04-11T00:00:00");


/* =========================================
   MUSIC
========================================= */

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

let musicPlaying = false;


function toggleMusic() {

    if (musicPlaying) {

        music.pause();

        musicButton.innerHTML = "🎵";

        musicPlaying = false;

    } else {

        music.play().then(() => {

            musicButton.innerHTML = "🔊";

            musicPlaying = true;

        }).catch(() => {

            alert("Please interact with the page first before playing the music.");

        });

    }

}


/* =========================================
   START ADVENTURE
========================================= */

function startAdventure() {

    music.play().then(() => {

        musicPlaying = true;

        musicButton.innerHTML = "🔊";

    }).catch(() => {

        console.log("Music requires user interaction.");
    });


    nextSection("counterSection");

}


/* =========================================
   SECTION NAVIGATION
========================================= */

function nextSection(sectionId) {

    const current = document.querySelector(".screen.active");

    const next = document.getElementById(sectionId);

    if (!next) return;

    if (current) {

        current.classList.remove("active");

    }

    next.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   LOVE COUNTER
========================================= */

function updateCounter() {

    const now = new Date();

    let difference = now - relationshipDate;

    if (difference < 0) {
        difference = 0;
    }

    const seconds = Math.floor(difference / 1000);

    const minutes = Math.floor(seconds / 60);

    const hours = Math.floor(minutes / 60);

    const days = Math.floor(hours / 24);


    const remainingHours = hours % 24;

    const remainingMinutes = minutes % 60;

    const remainingSeconds = seconds % 60;


    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent = remainingHours;

    document.getElementById("minutes").textContent = remainingMinutes;

    document.getElementById("seconds").textContent = remainingSeconds;

}


setInterval(updateCounter, 1000);

updateCounter();


/* =========================================
   PHOTO MEMORIES
========================================= */

const memories = {

    1: {
        title: "One of my favorite memories ❤️",
        text: "Every moment with you somehow becomes a memory I want to keep forever.",
        image: "images/photo1.jpg"
    },

    2: {
        title: "Look at us. 🥹",
        text: "I love looking back at the moments we've shared and realizing how much we've experienced together.",
        image: "images/photo2.jpg"
    },

    3: {
        title: "Another little memory. 💕",
        text: "Sometimes it's the simplest moments that end up becoming my favorites.",
        image: "images/photo3.jpg"
    },

    4: {
        title: "And another one. ❤️",
        text: "Here's to making many, many more memories together.",
        image: "images/photo4.jpg"
    }

};


function openPhoto(number) {

    const memory = memories[number];

    if (!memory) return;


    document.getElementById("modalImage").src = memory.image;

    document.getElementById("modalTitle").textContent = memory.title;

    document.getElementById("modalText").textContent = memory.text;


    document.getElementById("photoModal").classList.add("show");

}


function closePhoto() {

    document.getElementById("photoModal").classList.remove("show");

}


/* Close modal when clicking outside */

document.getElementById("photoModal").addEventListener("click", function(event) {

    if (event.target === this) {

        closePhoto();

    }

});


/* =========================================
   HEART GAME
========================================= */

const heartMessages = {

    1:
        "You are one of the most beautiful parts of my life. Thank you for being you. ❤️",

    2:
        "No matter how many people are in this world, somehow I still found my favorite person. That's you. 💜",

    3:
        "If I could choose again, I'd still choose you. Today, tomorrow, and every 24th after this. 💙"

};


function chooseHeart(number) {

    const message = document.getElementById("heartMessage");

    message.textContent = heartMessages[number];

    message.classList.add("show");

    document.getElementById("heartContinue").classList.remove("hidden");


    createHeartBurst();

}


/* =========================================
   HEART BURST
========================================= */

function createHeartBurst() {

    for (let i = 0; i < 15; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left = "50%";

        heart.style.top = "50%";

        heart.style.zIndex = "2000";

        heart.style.pointerEvents = "none";

        heart.style.fontSize = `${Math.random() * 15 + 15}px`;


        const x = (Math.random() - 0.5) * 400;

        const y = (Math.random() - 0.5) * 400;


        heart.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },

                {
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.5)`,
                    opacity: 0
                }
            ],
            {
                duration: 1000,
                easing: "ease-out"
            }
        );


        document.body.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 1000);

    }

}


/* =========================================
   THINGS I LOVE
========================================= */

const loveThings = [

    "Your smile. ❤️",

    "The way you laugh.",

    "The little things you do.",

    "The way you care about me.",

    "Your random messages.",

    "The way you make ordinary days special.",

    "Your hugs.",

    "The memories we create together.",

    "The person you are.",

    "Simply... you. ❤️"

];


let loveIndex = 0;


function nextLove() {

    loveIndex++;


    if (loveIndex >= loveThings.length) {

        nextSection("letterSection");

        return;

    }


    const loveText = document.getElementById("loveText");

    const loveNumber = document.querySelector(".love-number");


    loveText.style.opacity = 0;


    setTimeout(() => {

        loveText.textContent = loveThings[loveIndex];

        loveNumber.textContent =
            String(loveIndex + 1).padStart(2, "0");


        loveText.style.opacity = 1;

    }, 300);

}


/* =========================================
   ENVELOPE
========================================= */

function openLetter() {

    const envelope = document.getElementById("envelope");

    const letter = document.getElementById("letter");

    const continueButton =
        document.getElementById("letterContinue");


    if (envelope.classList.contains("open")) {

        return;

    }


    envelope.classList.add("open");


    setTimeout(() => {

        letter.classList.add("show");

        continueButton.classList.remove("hidden");

        createHeartBurst();

    }, 700);

}


/* =========================================
   FLOATING HEARTS
========================================= */

function createFloatingHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    const symbols = [
        "♥",
        "♡",
        "❤",
        "💕",
        "💗"
    ];

    heart.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        Math.random() * 20 + 10 + "px";


    heart.style.animationDuration =
        Math.random() * 6 + 6 + "s";


    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 12000);

}


setInterval(createFloatingHeart, 900);


/* =========================================
   RESTART
========================================= */

function restartSite() {

    document.querySelectorAll(".screen").forEach(screen => {

        screen.classList.remove("active");

    });


    document.getElementById("startScreen").classList.add("active");


    loveIndex = 0;


    document.getElementById("heartMessage").classList.remove("show");

    document.getElementById("heartContinue").classList.add("hidden");


    document.getElementById("letter").classList.remove("show");

    document.getElementById("letterContinue").classList.add("hidden");


    document.getElementById("envelope").classList.remove("open");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
