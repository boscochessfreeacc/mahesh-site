const animated = document.querySelectorAll(".card, img, table");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

animated.forEach(el => {
  el.classList.add("fade");
  observer.observe(el);
});