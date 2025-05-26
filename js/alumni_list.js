document.addEventListener("DOMContentLoaded", function () {
  // Tab switching functionality
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all tabs
      tabBtns.forEach((b) => b.classList.remove("tab-active"));
      tabContents.forEach((c) => c.classList.add("hidden"));

      // Add active class to clicked tab
      btn.classList.add("tab-active");
      const tabId = btn.getAttribute("data-tab");
      document.getElementById(tabId).classList.remove("hidden");
    });
  });

  // Filter panel toggle
  const filterBtn = document.getElementById("filterBtn");
  const filterPanel = document.getElementById("filterPanel");

  filterBtn.addEventListener("click", () => {
    filterPanel.classList.toggle("hidden");
  });

  // Dropdown menu functionality
  const dropBtns = document.querySelectorAll(".dropbtn");

  dropBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const dropdown = btn.nextElementSibling;

      // Close all other dropdowns first
      document.querySelectorAll(".dropdown-content").forEach((content) => {
        if (content !== dropdown) {
          content.classList.remove("show");
        }
      });

      // Toggle current dropdown
      dropdown.classList.toggle("show");
    });
  });

  // Close dropdowns when clicking elsewhere
  window.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-content").forEach((content) => {
      content.classList.remove("show");
    });
  });

  // Modal functionality for Tambah Alumni
  const modalTambahAlumni = document.getElementById("modalTambahAlumni");
  const tambahAlumni = document.getElementById("tambahAlumni");
  const closeTambahAlumni = document.getElementById("closeTambahAlumni");
  const cancelTambahAlumni = document.getElementById("cancelTambahAlumni");

  tambahAlumni.addEventListener("click", () => {
    modalTambahAlumni.style.display = "block";
    document.getElementById("overlay").style.display = "block";
  });

  closeTambahAlumni.addEventListener("click", () => {
    modalTambahAlumni.style.display = "none";
    document.getElementById("overlay").style.display = "none";
  });

  cancelTambahAlumni.addEventListener("click", () => {
    modalTambahAlumni.style.display = "none";
    document.getElementById("overlay").style.display = "none";
  });

  // Modal functionality for Detail Alumni
  const modalDetailAlumni = document.getElementById("modalDetailAlumni");
  const closeDetailAlumni = document.getElementById("closeDetailAlumni");
  const closeDetailBtn = document.getElementById("closeDetailBtn");

  // Add event listeners to all detail buttons
  document
    .querySelectorAll(".dropdown-content a:first-child")
    .forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        modalDetailAlumni.style.display = "block";
        document.getElementById("overlay").style.display = "block";

        // Here you would typically fetch data based on the alumni ID
        // For demo purposes, we're just showing the modal with pre-filled data
      });
    });

  closeDetailAlumni.addEventListener("click", () => {
    modalDetailAlumni.style.display = "none";
    document.getElementById("overlay").style.display = "none";
  });

  closeDetailBtn.addEventListener("click", () => {
    modalDetailAlumni.style.display = "none";
    document.getElementById("overlay").style.display = "none";
  });
});

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'94181e6363188f82',t:'MTc0NzUzNzM3OC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();

// Do Not Delete

// Update current date and time
function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  document.getElementById("current-datetime").textContent =
    now.toLocaleDateString("id-ID", options);
}

updateDateTime();
setInterval(updateDateTime, 60000); // Update every minute

// Toggle sidebar on mobile
document
  .getElementById("sidebar-toggle")
  .addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("open");
  });

// Toggle submenu
function toggleSubmenu(id) {
  const submenu = document.getElementById(id);
  const icon = document.getElementById(id.split("-")[0] + "-icon");

  if (submenu.classList.contains("active")) {
    submenu.classList.remove("active");
    icon.style.transform = "rotate(0deg)";
  } else {
    submenu.classList.add("active");
    icon.style.transform = "rotate(180deg)";
  }
}
// Toggle profile dropdown
document
  .getElementById("profile-menu-button")
  .addEventListener("click", function () {
    document.getElementById("profile-dropdown").classList.toggle("show");
  });

// Close dropdown when clicking outside
window.addEventListener("click", function (event) {
  if (!event.target.closest("#profile-menu-button")) {
    const dropdown = document.getElementById("profile-dropdown");
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  }

  // Close action dropdowns when clicking outside
  if (!event.target.closest(".action-button")) {
    const actionDropdowns = document.querySelectorAll(".action-dropdown");
    actionDropdowns.forEach((dropdown) => {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    });
  }
});
