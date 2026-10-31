// Certificate filters, shared by the home page and /certificates.
// Without JavaScript, every certificate is simply shown and the buttons do nothing.
document.querySelectorAll<HTMLElement>("[data-filter-group]").forEach((group) => {
  const name = group.dataset.filterGroup;
  const buttons = group.querySelectorAll<HTMLButtonElement>(".filter");
  const items = document.querySelectorAll<HTMLElement>(`[data-filter-list="${name}"] [data-type]`);
  const sections = document.querySelectorAll<HTMLElement>(`[data-filter-section="${name}"]`);
  const status = document.querySelector<HTMLElement>(`[data-filter-status="${name}"]`);
  // On the home page only the first few cards show at first, with a button for the rest.
  const list = document.querySelector<HTMLElement>(`[data-filter-list="${name}"]`);
  const limit = Number(list?.dataset.collapse || 0);
  const more = document.querySelector<HTMLButtonElement>(`[data-show-all="${name}"]`);
  let expanded = !limit;
  const collapse = () => {
    if (expanded) return;
    items.forEach((el, i) => { if (i >= limit) el.hidden = true; });
    if (more) more.hidden = false;
  };
  more?.addEventListener("click", () => {
    expanded = true;
    more.hidden = true;
    items.forEach((el, i) => { if (i >= limit) el.hidden = false; });
    items[limit]?.querySelector<HTMLElement>("a:not([tabindex])")?.focus();
  });
  collapse();

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.filter;
      buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      items.forEach((el) => { el.hidden = id !== "all" && el.dataset.type !== id; });
      // On /certificates, whole type sections are hidden too
      sections.forEach((s) => { s.hidden = id !== "all" && s.dataset.type !== id; });
      // A filter shows every match. "All" goes back to the short list until "Show all" is used.
      if (id === "all") collapse();
      else if (more) more.hidden = true;
      const shown = Array.from(items).filter((el) => !el.hidden).length;
      if (status) status.textContent = `Showing ${shown} ${shown === 1 ? "document" : "documents"}`;
    });
  });
});
