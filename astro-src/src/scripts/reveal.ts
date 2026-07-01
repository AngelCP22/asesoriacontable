// Revela elementos [.reveal] cuando entran en el viewport.
export function initReveal() {
  const els = document.querySelectorAll<HTMLElement>(".reveal");
  if (!els.length) return;

  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  els.forEach((el) => io.observe(el));
}
