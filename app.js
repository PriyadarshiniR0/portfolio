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

 
  const filterBtns = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active from all
      document.querySelector(".filter-btn.active")?.classList.remove("active");
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      portfolioItems.forEach(item => {
        const category = item.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          item.style.display = "block";
          item.classList.remove("hide");
          item.classList.add("show");
        } else {
          item.style.display = "none";
          item.classList.remove("show");
          item.classList.add("hide");
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

//changes
// === Smooth Scroll for Nav Links ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// === Back to Top Button ===
const backToTopBtn = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


