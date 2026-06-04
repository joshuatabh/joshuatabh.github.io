const images = document.querySelectorAll(".split-image");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.3,
  },
);

images.forEach((img) => observer.observe(img));
