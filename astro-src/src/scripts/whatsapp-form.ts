// Formulario de contacto: valida y arma un mensaje de WhatsApp.
export function initWhatsappForm() {
  const form = document.querySelector<HTMLFormElement>("[data-wa-form]");
  if (!form) return;

  const number = form.dataset.wa || "";
  const status = form.querySelector<HTMLElement>("[data-form-status]");

  const showError = (field: HTMLInputElement | HTMLTextAreaElement, msg: string) => {
    field.setAttribute("aria-invalid", "true");
    const hint = field.parentElement?.querySelector<HTMLElement>("[data-error]");
    if (hint) hint.textContent = msg;
  };

  const clearError = (field: HTMLInputElement | HTMLTextAreaElement) => {
    field.removeAttribute("aria-invalid");
    const hint = field.parentElement?.querySelector<HTMLElement>("[data-error]");
    if (hint) hint.textContent = "";
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.elements.namedItem("name") as HTMLInputElement;
    const phone = form.elements.namedItem("phone") as HTMLInputElement;
    const message = form.elements.namedItem("message") as HTMLTextAreaElement;

    let ok = true;
    [name, phone, message].forEach(clearError);

    if (!name.value.trim()) {
      showError(name, "Escribe tu nombre.");
      ok = false;
    }
    // Teléfono peruano: 9 dígitos empezando en 9.
    const digits = phone.value.replace(/\D/g, "");
    if (!/^9\d{8}$/.test(digits)) {
      showError(phone, "Ingresa un celular válido de 9 dígitos.");
      ok = false;
    }
    if (!message.value.trim()) {
      showError(message, "Cuéntanos brevemente qué necesitas.");
      ok = false;
    }

    if (!ok) {
      if (status) status.textContent = "Revisa los campos marcados.";
      return;
    }

    const text = `Hola, soy ${name.value.trim()} (Cel: ${digits}).%0A${encodeURIComponent(
      message.value.trim()
    )}`;
    if (status) status.textContent = "Abriendo WhatsApp…";
    window.open(`https://wa.me/${number}?text=${text}`, "_blank", "noopener");
    form.reset();
  });
}
