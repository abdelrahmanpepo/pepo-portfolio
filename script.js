const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const assignmentSearch = document.getElementById("assignmentSearch");
const assignmentList = document.getElementById("assignmentList");
const assignmentCount = document.getElementById("assignmentCount");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  const isLight = document.body.classList.contains("light-theme");
  themeToggle.textContent = isLight ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
});

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    navLinks.querySelectorAll("a").forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

function filterAssignments() {
  const query = assignmentSearch.value.trim().toLowerCase();
  const rows = [...assignmentList.querySelectorAll(".assignment-row")];
  let visible = 0;
  rows.forEach((row) => {
    const matches = (row.dataset.search + " " + row.textContent).toLowerCase().includes(query);
    row.hidden = !matches;
    if (matches) visible++;
  });
  assignmentCount.textContent = `${visible} ${visible === 1 ? "item" : "items"}`;
  let empty = assignmentList.querySelector(".empty-state");
  if (visible === 0 && !empty) {
    empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No assignments match your search.";
    assignmentList.appendChild(empty);
  } else if (visible > 0 && empty) {
    empty.remove();
  }
}
assignmentSearch.addEventListener("input", filterAssignments);

document.getElementById("year").textContent = new Date().getFullYear();
