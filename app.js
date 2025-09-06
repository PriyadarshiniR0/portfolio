(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


// ===== Portfolio Filter =====
// ===== PORTFOLIO FILTER FUNCTIONALITY =====
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // remove active class from all
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    portfolioItems.forEach(item => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});


// ===== Sidebar Navigation =====
const sections = document.querySelectorAll(".container");
const controls = document.querySelectorAll(".control");

controls.forEach(control => {
  control.addEventListener("click", () => {
    // remove active-btn class from all controls
    document.querySelector(".active-btn").classList.remove("active-btn");
    control.classList.add("active-btn");

    // hide all sections
    sections.forEach(section => section.classList.remove("active"));

    // show selected section
    const sectionId = control.getAttribute("data-id");
    document.getElementById(sectionId).classList.add("active");
  });
});



// ===== THEME TOGGLE =====
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

