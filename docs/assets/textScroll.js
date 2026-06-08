document.addEventListener("DOMContentLoaded", () => {
  const strips = document.querySelectorAll(".feature-strip");

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

  strips.forEach((el) => observer.observe(el));
});
