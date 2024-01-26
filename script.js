document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");
    const menuToggleBtn = document.getElementById("menu-toggle-btn");
    const restaurantButton = document.getElementById("restaurant-button");
    const Richmond1Button = document.getElementById("Richmond1-button");
    const decouverteButton = document.getElementById("decouverte-button");
    const bestPlaceButton = document.getElementById("best-place-button");
    const galleryImages = document.querySelectorAll('#gallery img');
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');

    let isMenuActive = false;

    function openModal(imageSrc) {
        modalContent.innerHTML = `<img src="${imageSrc}" alt="Modal Image">`;
        modal.style.display = 'block';

        const closeBtn = document.createElement('span');
        closeBtn.innerHTML = '&times;';
        closeBtn.className = 'close';
        closeBtn.addEventListener('click', function () {
            modal.style.display = 'none';
            modalContent.innerHTML = '';
        });

        modalContent.appendChild(closeBtn);
    }

    function toggleMenu() {
        isMenuActive = !isMenuActive;
        menu.classList.toggle("hidden", !isMenuActive);

        if (isMenuActive && window.innerWidth <= 767) {
            menu.style.display = "flex";
            menu.style.flexDirection = "column";
            menu.style.justifyContent = "center";
            menu.style.alignItems = "center";
            menu.style.transform = "translate(-50%, -50%)";
            menu.style.top = "25%";
            menu.style.left = "50%";
            menu.style.backgroundColor = "transparent";
            menu.style.position = "fixed";
        } else {
            menu.style.display = "none";
        }
    }

    window.addEventListener("scroll", function () {
        if (isMenuActive && window.innerWidth <= 767) {
            return;
        }

        if (window.scrollY === 0) {
            document.body.classList.remove("scrolled");
            menu.style.top = "-100px";
        } else if (window.scrollY > window.innerHeight / 3) {
            document.body.classList.add("scrolled");
            menu.style.top = "0";
        } else {
            menu.style.top = "-50px";
        }
    });

    galleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            openModal(image.src);
        });
    });

    restaurantButton.addEventListener("click", function () {
        const restaurantImage = document.querySelector('img[src*="restaurant"]');
        if (restaurantImage) {
            restaurantImage.scrollIntoView({ behavior: "smooth" });
        }
    });

    Richmond1Button.addEventListener("click", function () {
        const Richmond1Image = document.querySelector('img[src*="Richmond1.jpg"]');
        if (Richmond1Image) {
            Richmond1Image.scrollIntoView({ behavior: "smooth" });
        }
    });

    decouverteButton.addEventListener("click", function () {
        const welcomeSection = document.querySelector("h1");
        welcomeSection.scrollIntoView({ behavior: "smooth" });
    });

    bestPlaceButton.addEventListener("click", function () {
        const bestPlaceImage = document.querySelector('img[src*="best1"]');
        if (bestPlaceImage) {
            bestPlaceImage.scrollIntoView({ behavior: "smooth" });
        }
    });

    menuToggleBtn.addEventListener("click", toggleMenu);
});
