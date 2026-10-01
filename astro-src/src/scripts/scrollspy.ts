// Resalta el enlace de navegación de la sección visible.
export function initScrollspy() {
  const links = Array.from(
    document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]")
  );
  if (!links.length) return;

  // Solo las anclas participan del scrollspy. El enlace de una ruta (p. ej.
  // /sire/) mantiene su "is-active" y no debe apagarse al hacer scroll.
  const spyLinks = links.filter((l) => l.dataset.spy);
  const map = new Map<string, HTMLAnchorElement>();
  const sections: HTMLElement[] = [];
  links.forEach((link) => {
    const id = link.dataset.spy;
    if (!id) return;
    const section = document.getElementById(id);
    if (section) {
      map.set(id, link);
      sections.push(section);
    }
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          spyLinks.forEach((l) => l.classList.remove("is-active"));
          map.get(entry.target.id)?.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((s) => io.observe(s));
}
