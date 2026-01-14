const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentSlide = 0;

slides[currentSlide].classList.add("active");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {
    currentSlide =
        (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

function scrollToSection(sectionId){
    document.getElementById(sectionId).scrollIntoView({behavior:"smooth"})
}