const STATUS_LABEL = { done: "完成", wip: "进行中", planned: "计划中" };
const STATUS_CLASS = { done: "status-done", wip: "status-wip", planned: "status-planned" };

function getDaysElapsed() {
  const start = new Date(CHALLENGE.startDate);
  const now = new Date();
  const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24)) + 1;
  return Math.min(Math.max(diff, 1), CHALLENGE.totalDays);
}

function getStats() {
  const done = projects.filter(p => p.status === "done").length;
  const wip = projects.filter(p => p.status === "wip").length;
  return { done, wip };
}

function renderStats() {
  const days = getDaysElapsed();
  const { done } = getStats();
  const pct = Math.round((done / CHALLENGE.totalProjects) * 100);

  document.getElementById("daysElapsed").textContent = days;
  document.getElementById("dayTotal").textContent = CHALLENGE.totalDays;
  document.getElementById("projectsDone").textContent = done;
  document.getElementById("projectsTotal").textContent = CHALLENGE.totalProjects;
  document.getElementById("progressFill").style.width = pct + "%";
  document.getElementById("progressPct").textContent = pct + "%";
}

function renderCards(filter) {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = "";

  const list = filter === "all" ? projects : projects.filter(p => p.status === filter);

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "card card-" + p.status;

    const hasRepo = p.repo && p.repo.trim();
    const hasDemo = p.demo && p.demo.trim();
    const hasName = p.name && p.name.trim();

    card.innerHTML = `
      <div class="card-header">
        <span class="card-id">#${String(p.id).padStart(2, "0")}</span>
        <span class="card-status ${STATUS_CLASS[p.status]}">${STATUS_LABEL[p.status]}</span>
      </div>
      <div class="card-body">
        <h3 class="card-name">${hasName ? p.name : "—"}</h3>
        <p class="card-desc">${p.description || "等待开始..."}</p>
      </div>
      <div class="card-footer">
        ${hasRepo ? `<a class="card-link" href="${p.repo}" target="_blank" rel="noopener">Repo →</a>` : `<span class="card-link-disabled">Repo</span>`}
        ${hasDemo ? `<a class="card-link" href="${p.demo}" target="_blank" rel="noopener">Demo →</a>` : `<span class="card-link-disabled">Demo</span>`}
      </div>
    `;

    grid.appendChild(card);
  });
}

function initFilters() {
  const btns = document.querySelectorAll(".filter-btn");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderCards(btn.dataset.filter);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderStats();
  renderCards("all");
  initFilters();
});
