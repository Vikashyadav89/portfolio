/* =====================================================
   PORTFOLIO JAVASCRIPT
===================================================== */


/* =====================================================
   TYPING EFFECT
===================================================== */

const words = [

    "Artificial Intelligence.",

    "Python Development.",

    "Web Development.",

    "Machine Learning.",

    "creative digital experiences."

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


const typingElement =
    document.querySelector(".typing");


function typeEffect() {

    if (!typingElement) return;


    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1)
                % words.length;

        }

    }


    setTimeout(

        typeEffect,

        deleting
            ? 45
            : 80

    );

}


typeEffect();


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


if (menuBtn) {

    menuBtn.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle(
                "show"
            );

        }
    );

}


/* =====================================================
   CLOSE MOBILE MENU
   WHEN LINK IS CLICKED
===================================================== */

const navLinks =
    document.querySelectorAll(
        "#navMenu a"
    );


navLinks.forEach(
    link => {

        link.addEventListener(
            "click",
            () => {

                navMenu.classList.remove(
                    "show"
                );

            }
        );

    }
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "active"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    element => {

        observer.observe(
            element
        );

    }
);


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar =
    document.querySelector(
        ".navbar"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 50
        ) {

            navbar.style.background =
                "rgba(7,7,7,0.92)";

        } else {

            navbar.style.background =
                "rgba(9,9,9,0.72)";

        }

    }
);


/* =====================================================
   ACTIVE NAVIGATION LINK
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop - 150;

                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >=
                    sectionTop
                    &&
                    window.scrollY <
                    sectionTop +
                    sectionHeight
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            link => {

                link.classList.remove(
                    "active-link"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    "#" + current
                ) {

                    link.classList.add(
                        "active-link"
                    );

                }

            }
        );

    }
);

/* =====================================================
   CERTIFICATE IMAGE VIEWER
===================================================== */

const certificateImages =
    document.querySelectorAll(".certificate-image img");

certificateImages.forEach(image => {

    image.addEventListener("click", () => {

        window.open(image.src, "_blank");

    });

});

/* =====================================================
   HERO PARALLAX EFFECT
===================================================== */

const heroImage =
    document.querySelector(
        ".hero-image"
    );


const heroBg =
    document.querySelector(
        ".hero-bg-text"
    );


window.addEventListener(
    "mousemove",
    (event) => {

        if (
            window.innerWidth <= 850
        ) return;


        const x =
            (event.clientX /
                window.innerWidth
            - 0.5);


        const y =
            (event.clientY /
                window.innerHeight
            - 0.5);


        if (heroImage) {

            heroImage.style.transform =
                `translate(${x * 12}px, ${y * 8}px)`;

        }


        if (heroBg) {

            heroBg.style.transform =
                `translate(${x * -20}px, ${y * -10}px)`;

        }

    }
);


/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log(
    "%cWelcome to Vikash Yadav's Portfolio 🚀",
    "color:#ff3b30;font-size:18px;font-weight:bold;"
);
/* ===============================
   GET IN TOUCH MENU
================================ */

const contactBtn =
    document.getElementById("contactBtn");

const contactOptions =
    document.getElementById("contactOptions");


if (contactBtn && contactOptions) {

    contactBtn.addEventListener("click", function(event) {

        event.stopPropagation();

        contactOptions.classList.toggle("show");

    });


    document.addEventListener("click", function() {

        contactOptions.classList.remove("show");

    });

}
/* =====================================================
   HIRE ME FORM
===================================================== */

const hireBtn =
    document.getElementById("hireBtn");

const hireModal =
    document.getElementById("hireModal");

const closeHire =
    document.getElementById("closeHire");

const hireForm =
    document.getElementById("hireForm");


/* OPEN FORM */

if (hireBtn) {

    hireBtn.addEventListener("click", function() {

        hireModal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

}


/* CLOSE FORM */

if (closeHire) {

    closeHire.addEventListener("click", function() {

        hireModal.classList.remove("show");

        document.body.style.overflow = "";

    });

}


/* CLOSE BY CLICKING OUTSIDE */

if (hireModal) {

    hireModal.addEventListener("click", function(event) {

        if (event.target === hireModal) {

            hireModal.classList.remove("show");

            document.body.style.overflow = "";

        }

    });

}


/* ESC KEY */

document.addEventListener("keydown", function(event) {

    if (
        event.key === "Escape" &&
        hireModal.classList.contains("show")
    ) {

        hireModal.classList.remove("show");

        document.body.style.overflow = "";

    }

});


/* =====================================================
   SEND FORM DETAILS TO WHATSAPP
===================================================== */

if (hireForm) {

    hireForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("clientName").value.trim();

        const email =
            document.getElementById("clientEmail").value.trim();

        const phone =
            document.getElementById("clientPhone").value.trim();

        const project =
            document.getElementById("projectType").value;

        const message =
            document.getElementById("clientMessage").value.trim();


        const whatsappMessage =

`Hello Vikash! 👋

I am interested in working with you.

━━━━━━━━━━━━━━━━━━

👤 Name:
${name}

📧 Email:
${email}

📱 Phone:
${phone}

💼 Project:
${project}

📝 Project Details:
${message}

━━━━━━━━━━━━━━━━━━

Sent from Vikash Yadav's Portfolio.`;


        const whatsappURL =

            "https://wa.me/918817425513?text="
            + encodeURIComponent(whatsappMessage);


        window.open(
            whatsappURL,
            "_blank"
        );


        /* Reset form */

        hireForm.reset();


        /* Close modal */

        hireModal.classList.remove("show");

        document.body.style.overflow = "";

    });

}