// Attendez que la page soit complètement chargée
document.addEventListener("DOMContentLoaded", function () {
    // Obtenez la barre de menu
    const menu = document.getElementById("menu");

    // Retirez la classe "hidden" pour afficher la barre de menu avec animation
    menu.classList.remove("hidden");

    // Ajoutez un événement de défilement pour déplacer la barre de menu
    window.addEventListener("scroll", function () {
        if (window.scrollY === 0) {
            document.body.classList.remove("scrolled"); // Supprimer la classe lorsqu'on est en haut de la page
            menu.style.top = "-100px"; // Masquez la barre de menu en haut de la page
        } else if (window.scrollY > window.innerHeight / 3) {
            document.body.classList.add("scrolled"); // Ajouter la classe lorsque l'utilisateur fait défiler la page
            menu.style.top = "0"; // Afficher la barre de menu en faisant défiler la page
        } else {
            menu.style.top = "-50px"; // Cacher la barre de menu en faisant défiler la page vers le haut
        }
    });

    // Sélectionnez le bouton "Restaurant"
    const restaurantButton = document.getElementById("restaurant-button");

    // Écoutez l'événement de clic sur le bouton "Restaurant"
    restaurantButton.addEventListener("click", function () {
        // Sélectionnez la première image dont le nom contient "restaurant"
        const restaurantImage = document.querySelector('img[src*="restaurant"]');

        if (restaurantImage) {
            // Faites défiler la page jusqu'à l'emplacement de l'image
            restaurantImage.scrollIntoView({ behavior: "smooth" });
        }
    });

    // Sélectionnez le bouton "YCS"
    const ycsButton = document.getElementById("ycs-button");

    // Écoutez l'événement de clic sur le bouton "YCS"
    ycsButton.addEventListener("click", function () {
        // Sélectionnez l'image "YCS.jpg"
        const ycsImage = document.querySelector('img[src*="YCS.jpg"]');

        if (ycsImage) {
            // Faites défiler la page jusqu'à l'emplacement de l'image
            ycsImage.scrollIntoView({ behavior: "smooth" });
        }
    });

    // Sélectionnez le bouton "Découverte"
    const decouverteButton = document.getElementById("decouverte-button");

    // Écoutez l'événement de clic sur le bouton "Découverte"
    decouverteButton.addEventListener("click", function () {
        // Faites défiler la page jusqu'à l'emplacement de l'élément "welcome-section"
        const welcomeSection = document.querySelector("h1");
        welcomeSection.scrollIntoView({ behavior: "smooth" });
    });

    // Sélectionnez le bouton "Meilleur endroit"
    const bestPlaceButton = document.getElementById("best-place-button");

    // Sélectionnez l'image "best1"
    const bestPlaceImage = document.querySelector('img[src*="best1"]');

    // Écoutez l'événement de clic sur le bouton "Meilleur endroit"
    bestPlaceButton.addEventListener("click", function () {
        if (bestPlaceImage) {
            // Faites défiler la page jusqu'à l'emplacement de l'image "best1"
            bestPlaceImage.scrollIntoView({ behavior: "smooth" });
        }
    });
});
