document.addEventListener("DOMContentLoaded", () => {

    const signupModal = document.getElementById("signupModal");
    const joinButton = document.getElementById("joinButton");
    const ctaButton = document.getElementById("ctaButton");
    const modalClose = document.getElementById("modalClose");
    const modalOverlay = document.querySelector(".modal-overlay");
    const signupForm = document.getElementById("signupForm");
    const mobileMenu = document.getElementById("mobileMenu");
    const navLinks = document.querySelector(".nav-links");


    /*
    ==========================================
    MODAL
    ==========================================
    */

    function openModal() {
        signupModal.classList.add("active");

        document.body.style.overflow = "hidden";

        setTimeout(() => {
            document.getElementById("name").focus();
        }, 200);
    }


    function closeModal() {
        signupModal.classList.remove("active");

        document.body.style.overflow = "";
    }


    joinButton.addEventListener("click", openModal);

    ctaButton.addEventListener("click", openModal);

    modalClose.addEventListener("click", closeModal);

    modalOverlay.addEventListener("click", closeModal);


    /*
    ==========================================
    ESC FECHA O MODAL
    ==========================================
    */

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            signupModal.classList.contains("active")
        ) {
            closeModal();
        }

    });


    /*
    ==========================================
    FORMULÁRIO
    ==========================================
    */

    signupForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();


        if (!name || !email) {
            return;
        }


        const button = signupForm.querySelector("button");

        const originalText = button.innerHTML;


        button.disabled = true;

        button.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            Criando conta...
        `;


        setTimeout(() => {

            button.innerHTML = `
                <i class="fa-solid fa-check"></i>
                Conta criada!
            `;


            setTimeout(() => {

                closeModal();

                signupForm.reset();

                button.disabled = false;

                button.innerHTML = originalText;

            }, 1200);

        }, 1200);

    });


    /*
    ==========================================
    MOBILE MENU
    ==========================================
    */

    mobileMenu.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("mobile-open");

        mobileMenu.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    });


    /*
    ==========================================
    FECHAR MENU AO CLICAR EM LINK
    ==========================================
    */

    document.querySelectorAll(".nav-links a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("mobile-open");

            mobileMenu.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });


    /*
    ==========================================
    ANIMAÇÃO AO ENTRAR NA TELA
    ==========================================
    */

    const animatedElements = document.querySelectorAll(
        ".feature-card, .community-card"
    );


    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    animatedElements.forEach((element) => {

        element.style.opacity = "0";

        element.style.transform = "translateY(20px)";

        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(element);

    });


    /*
    ==========================================
    ANIMAÇÃO DOS CARDS
    ==========================================
    */

    document.querySelectorAll(".feature-card, .community-card")
        .forEach((card) => {

            card.addEventListener("mouseenter", () => {

                card.style.transform = "translateY(-5px)";

            });


            card.addEventListener("mouseleave", () => {

                if (card.classList.contains("visible")) {

                    card.style.transform = "translateY(0)";

                }

            });

        });


    /*
    ==========================================
    SMOOTH SCROLL
    ==========================================
    */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (targetId === "#") {
                return;
            }


            const target = document.querySelector(targetId);


            if (target) {

                event.preventDefault();

                const navbarHeight = 72;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    navbarHeight;


                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            }

        });

    });


    /*
    ==========================================
    HEADER AO ROLAR
    ==========================================
    */

    const navbar = document.querySelector(".navbar");


    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(9, 9, 11, 0.95)";

        } else {

            navbar.style.background =
                "rgba(9, 9, 11, 0.82)";

        }

    });


});