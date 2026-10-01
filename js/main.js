/* Renders the project grid (index.html) and the project page (project.html)
   from the PROJECTS list in projects.js. */

const TYPE_LABELS = { machine: "Machine", software: "Software", carpentry: "Carpentry" };

document.getElementById("year").textContent = new Date().getFullYear();

const grid = document.getElementById("project-grid");
const detail = document.getElementById("project");

if (grid) renderGrid();
if (detail) renderProject();

/* ---------- Overview ---------- */

function renderGrid() {
  grid.innerHTML = PROJECTS.map((p, i) => `
    <li class="card" data-type="${p.type}">
      <a href="project.html?id=${encodeURIComponent(p.id)}">
        <div class="card-img"><img src="${p.thumb || p.cover}" alt="" loading="lazy"></div>
        <h3 class="card-title"><span class="card-num">${pad(i + 1)}</span>${p.title}</h3>
      </a>
    </li>`).join("");

  const count = document.getElementById("project-count");
  const buttons = document.querySelectorAll(".filters button");

  function applyFilter(filter) {
    let visible = 0;
    grid.querySelectorAll(".card").forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.type !== filter;
      if (!card.hidden) visible++;
    });
    buttons.forEach((b) => b.classList.toggle("is-active", b.dataset.filter === filter));
    count.textContent = `[${pad(visible)}]`;
    document.getElementById("project-empty").hidden = visible > 0;
  }

  buttons.forEach((b) => b.addEventListener("click", () => applyFilter(b.dataset.filter)));
  applyFilter("all");
}

/* ---------- Project page ---------- */

function renderProject() {
  const id = new URLSearchParams(location.search).get("id");
  const index = PROJECTS.findIndex((p) => p.id === id);
  const p = PROJECTS[index];

  if (!p) {
    detail.innerHTML = `
      <a class="back" href="index.html">&larr; All projects</a>
      <div class="project-head">
        <p class="eyebrow">// Error 404</p>
        <h1>Project not found</h1>
      </div>`;
    return;
  }

  document.title = `${p.title} — Samuel`;

  // The cover is image 0 in the viewer, the extra pictures follow.
  const images = [p.cover, ...(p.images || [])].map((img) =>
    typeof img === "string" ? { src: img, caption: "" } : img
  );
  const prev = PROJECTS[index - 1];
  const next = PROJECTS[index + 1];

  detail.innerHTML = `
    <a class="back" href="index.html#projects">&larr; All projects</a>

    <header class="project-head">
      <p class="eyebrow">// ${TYPE_LABELS[p.type] || p.type}${p.year ? " · " + p.year : ""}</p>
      <h1>${p.title}</h1>
    </header>

    <button type="button" class="project-cover" data-lightbox="0" aria-label="Enlarge picture">
      <img src="${p.cover}" alt="${p.title}">
    </button>

    <div class="project-body">
      <div class="prose">${p.description || ""}</div>

      <aside class="specs">
        <p class="specs-title">// Spec sheet</p>
        <dl>
          <dt>Type</dt><dd>${TYPE_LABELS[p.type] || p.type}</dd>
          ${p.year ? `<dt>Year</dt><dd>${p.year}</dd>` : ""}
          ${p.tags && p.tags.length ? `
            <dt>Built with</dt>
            <dd><ul class="tags">${p.tags.map((t) => `<li>${t}</li>`).join("")}</ul></dd>` : ""}
          ${p.links && p.links.length ? `
            <dt>Links</dt>
            <dd class="links">${p.links.map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.label} &nearr;</a>`).join("")}</dd>` : ""}
        </dl>
      </aside>
    </div>

    ${images.length > 1 ? `
      <h2 class="gallery-title">Gallery <span class="count">[${pad(images.length - 1)}]</span></h2>
      <div class="gallery">
        ${images.slice(1).map((img, i) => `
          <button type="button" data-lightbox="${i + 1}" aria-label="Enlarge picture">
            <img src="${img.src}" alt="${img.caption || ""}" loading="lazy">
          </button>`).join("")}
      </div>` : ""}

    <nav class="pager">
      ${prev ? `<a href="project.html?id=${encodeURIComponent(prev.id)}"><span>&larr; Previous</span>${prev.title}</a>` : "<span></span>"}
      ${next ? `<a class="pager-next" href="project.html?id=${encodeURIComponent(next.id)}"><span>Next &rarr;</span>${next.title}</a>` : ""}
    </nav>`;

  setupLightbox(images);
}

/* ---------- Image viewer ---------- */

function setupLightbox(images) {
  const box = document.getElementById("lightbox");
  const img = box.querySelector("img");
  const caption = box.querySelector("figcaption");
  let current = 0;

  function show(i) {
    current = (i + images.length) % images.length;
    img.src = images[current].src;
    img.alt = images[current].caption || "";
    caption.textContent = `${pad(current + 1)} / ${pad(images.length)}` +
      (images[current].caption ? ` — ${images[current].caption}` : "");
  }

  box.querySelector(".lb-prev").hidden = images.length < 2;
  box.querySelector(".lb-next").hidden = images.length < 2;

  document.querySelectorAll("[data-lightbox]").forEach((el) =>
    el.addEventListener("click", () => {
      show(Number(el.dataset.lightbox));
      box.showModal();
    })
  );
  box.querySelector(".lb-prev").addEventListener("click", () => show(current - 1));
  box.querySelector(".lb-next").addEventListener("click", () => show(current + 1));
  box.querySelector(".lb-close").addEventListener("click", () => box.close());
  // Click on the dark area around the picture closes the viewer
  box.addEventListener("click", (e) => {
    if (e.target === box || e.target.tagName === "FIGURE") box.close();
  });
  box.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
}

function pad(n) {
  return String(n).padStart(2, "0");
}
