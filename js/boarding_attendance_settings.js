// Toggle dropdown menu
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  const allDropdowns = document.querySelectorAll(".dropdown-menu");

  // Close all other dropdowns
  allDropdowns.forEach((menu) => {
    if (menu.id !== id && menu.style.display === "block") {
      menu.style.display = "none";
    }
  });

  // Toggle current dropdown
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

// Close dropdowns when clicking outside
document.addEventListener("click", function (event) {
  if (
    !event.target.closest(".dropdown-menu") &&
    !event.target.closest("button")
  ) {
    const allDropdowns = document.querySelectorAll(".dropdown-menu");
    allDropdowns.forEach((menu) => {
      menu.style.display = "none";
    });
  }
});

// Show modal
function showModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove("hidden");
  setTimeout(() => {
    modal.classList.add("opacity-100");
  }, 10);

  // If showing hasilAbsensiModal from detailModal, hide detailModal
  if (id === "hasilAbsensiModal") {
    hideModal("detailModal");
  }
}

// Hide modal
function hideModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove("opacity-100");
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300);
}

// Event listeners for main buttons
document
  .getElementById("tambahAbsensiBtn")
  .addEventListener("click", function () {
    showModal("tambahAbsensiModal");
  });

document
  .getElementById("eksporAbsensiBtn")
  .addEventListener("click", function () {
    alert("Mengekspor data absensi pondok...");
  });

document.getElementById("cariBtn").addEventListener("click", function () {
  alert("Mencari data dengan filter yang dipilih...");
});

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'9417c267f4c6fd3b',t:'MTc0NzUzMzYxMC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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

// <!-- Jangan dihapus -->

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
