document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".research-track");
  const slides = document.querySelectorAll(".research-slide");
  const dots = document.querySelectorAll(".slider-dots span");

  let index = 0;

  function updateSlider() {
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");

    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  // ✅ dot navigation
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      index = Number(dot.dataset.index);
      updateSlider();
    });
  });

  // ✅ ✅ MOBILE SWIPE SUPPORT (add this here)
  let startX = 0;

  track.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  track.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;

    if (endX < startX - 50) index++;
    if (endX > startX + 50) index--;

    // ✅ clamp index
    index = Math.max(0, Math.min(index, slides.length - 1));

    updateSlider();
  });

  updateSlider();
});
