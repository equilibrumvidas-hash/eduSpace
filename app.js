// ================================
// Navigation
// ================================

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".navbar nav");

menuButton?.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// ================================
// Course card interaction
// ================================

const courseCards = document.querySelectorAll(".course-card");

courseCards.forEach((card) => {
    card.addEventListener("click", () => {
        const courseId = card.dataset.courseId;

        console.log("Opening course:", courseId);

        // Later:
        // window.location.href = `/course.html?id=${courseId}`;
    });
});


// ================================
// 3D mouse effect
// ================================

const cards = document.querySelectorAll(".course-card");

cards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 10;
        const rotateX = ((y / rect.height) - 0.5) * -10;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
            scale(1.02)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
});
