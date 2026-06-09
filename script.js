document.addEventListener("DOMContentLoaded", () => {

    // ===== LOADER =====
    window.addEventListener("load", () => {
        const loader = document.getElementById("loader");
        if (loader) loader.style.display = "none";
    });


    // ===== AOS =====
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000
        });
    }


    // ===== FORM =====
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name")?.value.trim();
            const phone = document.getElementById("phone")?.value.trim();
            const messageBox = document.getElementById("message");

            if (!name || !phone) {
                if (messageBox) {
                    messageBox.innerText = "Заповніть всі поля ⚠️";
                    messageBox.style.color = "red";
                }
                return;
            }

            let requests = JSON.parse(localStorage.getItem("requests")) || [];
            requests.push({ name, phone, date: new Date().toISOString() });

            localStorage.setItem("requests", JSON.stringify(requests));

            if (messageBox) {
                messageBox.innerText = "Заявка збережена 💾";
                messageBox.style.color = "green";
            }

            form.reset();
        });
    }


    // ===== LIGHTBOX (ВАЖЛИВО) =====
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".lightbox .close");
    const images = document.querySelectorAll(".gallery img");

    if (lightbox && lightboxImg && closeBtn) {

        images.forEach(img => {
            img.addEventListener("click", () => {
                lightbox.style.display = "flex";
                lightboxImg.src = img.src;
            });
        });

        closeBtn.addEventListener("click", () => {
            lightbox.style.display = "none";
        });

        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = "none";
            }
        });
    }

});