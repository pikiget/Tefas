document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".paper");
    const button = document.querySelector("button");
    let flipped = false;

    // Aplicamos la clase de bienvenida al inicio
    card.classList.add("welcome");

    button.addEventListener("click", function () {
        gsap.to(card, {
            duration: 0.5,
            y: -200,  // Mueve el cartel hacia arriba
            opacity: 0,
            ease: "power2.inOut",
            onComplete: () => {
                if (!flipped) {
                    card.innerHTML = "Tefas, este día es para que recuerdes lo increíble que eres. Siempre fuiste mi ejemplo a seguir, y hoy quiero que recuerdes lo fuerte y valiente que eres. A pesar de las adversidades que la vida te ha puesto en el camino, sigues adelante, y eso es digno de admirar y aplaudir. Eres muy valiosa para nuestra familia. Te quiero mucho. 💜✨";
                    card.classList.remove("welcome");
                    card.classList.add("final-message");
                    button.textContent = "Volver";
                } else {
                    card.innerHTML = "Hoy celebramos la fuerza, la valentía y la determinación de todas las mujeres. 💜 Da la vuelta y descubre un mensaje especial para ti. ✨";
                    card.classList.remove("final-message");
                    card.classList.add("welcome");
                    button.textContent = "Click aquí";
                }
                flipped = !flipped;

                // Hace aparecer la nueva carta con rebote
                gsap.fromTo(card, 
                    { y: 200, opacity: 0, scale: 0.8 },
                    { duration: 0.8, y: 0, opacity: 1, scale: 1, ease: "elastic.out(1, 0.5)" }
                );
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const heartContainer = document.getElementById("heart-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💜";
        heart.style.left = Math.random() * 100 + "vw"; // Posición aleatoria en el ancho
        heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Diferentes velocidades
        heartContainer.appendChild(heart);

        // Elimina el corazón después de que termine la animación
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Generar corazones cada 300ms
    setInterval(createHeart, 300);
});
