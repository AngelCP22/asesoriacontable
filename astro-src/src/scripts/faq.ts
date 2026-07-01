// Acordeón de preguntas frecuentes (una abierta a la vez).
export function initFaq() {
  const items = document.querySelectorAll<HTMLButtonElement>("[data-faq-btn]");
  items.forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      items.forEach((b) => {
        b.setAttribute("aria-expanded", "false");
        const p = b.parentElement?.querySelector<HTMLElement>("[data-faq-panel]");
        if (p) p.style.maxHeight = "";
      });
      if (!expanded) {
        btn.setAttribute("aria-expanded", "true");
        const panel = btn.parentElement?.querySelector<HTMLElement>(
          "[data-faq-panel]"
        );
        if (panel) panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
}
