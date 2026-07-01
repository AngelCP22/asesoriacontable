// Añade sombra/fondo compacto al header al hacer scroll.
export function initHeaderShadow() {
  const header = document.querySelector<HTMLElement>("[data-header]");
  if (!header) return;
  const onScroll = () =>
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}
