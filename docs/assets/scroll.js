document.addEventListener("DOMContentLoaded", () => {
  // FIX: Target the new layout container class instead of the old split-image class
  const items = document.querySelectorAll(".three-col-layout");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          // Optional: Keep this if you want it to fade out when scrolling away,
          // or remove it if you want it to stay visible after the first reveal.
          entry.target.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.15, // Lowered slightly so it triggers a bit faster as it enters the frame
      rootMargin: "0px 0px -10% 0px",
    },
  );

  items.forEach((item) => observer.observe(item));
});
