document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");

    menu.classList.remove("hidden");

    window.addEventListener("scroll", function () {
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

    const restaurantButton = document.getElementById("restaurant-button");

    restaurantButton.addEventListener("click", function () {
        const restaurantImage = document.querySelector('img[src*="restaurant"]');

        if (restaurantImage) {
            restaurantImage.scrollIntoView({ behavior: "smooth" });
        }
    });

    const ycsButton = document.getElementById("ycs-button");

    ycsButton.addEventListener("click", function () {
        const ycsImage = document.querySelector('img[src*="YCS.jpg"]');

        if (ycsImage) {
            ycsImage.scrollIntoView({ behavior: "smooth" });
        }
    });

    const decouverteButton = document.getElementById("decouverte-button");

    decouverteButton.addEventListener("click", function () {
        const welcomeSection = document.querySelector("h1");
        welcomeSection.scrollIntoView({ behavior: "smooth" });
    });

    const bestPlaceButton = document.getElementById("best-place-button");

    const bestPlaceImage = document.querySelector('img[src*="best1"]');

    bestPlaceButton.addEventListener("click", function () {
        if (bestPlaceImage) {
            bestPlaceImage.scrollIntoView({ behavior: "smooth" });
        }
    });

    const galleryImages = document.querySelectorAll('#gallery img');

    galleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            openModal(image.src);
        });
    });

    function openModal(imageSrc) {
        const modal = document.querySelector('.modal');
        const modalContent = document.querySelector('.modal-content');

        modalContent.innerHTML = `<img src="${imageSrc}" alt="Modal Image">`;
        modal.style.display = 'block';

        const closeBtn = document.createElement('span');
        closeBtn.innerHTML = '&times;';
        closeBtn.className = 'close';
        closeBtn.addEventListener('click', closeModal);

        modalContent.appendChild(closeBtn);
    }

    function closeModal() {
        const modal = document.querySelector('.modal');
        modal.style.display = 'none';
        const modalContent = document.querySelector('.modal-content');
        modalContent.innerHTML = '';
    }
});
