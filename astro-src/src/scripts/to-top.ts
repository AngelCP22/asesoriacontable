// Botón "volver arriba".
export function initToTop() {
  const btn = document.querySelector<HTMLButtonElement>("[data-to-top]");
  if (!btn) return;
  const onScroll = () => btn.classList.toggle("show", window.scrollY > 600);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  btn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
}
