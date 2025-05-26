// Action Menu Dropdowns
const actionButtons = document.querySelectorAll(".action-button");
actionButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const index = this.getAttribute("data-index");
    const menu = document.getElementById(`action-menu-${index}`);

    // Close all other menus first
    document.querySelectorAll(".action-menu").forEach((m) => {
      if (m.id !== `action-menu-${index}`) {
        m.classList.add("hidden");
      }
    });

    menu.classList.toggle("hidden");
  });
});

// Close dropdowns when clicking outside
document.addEventListener("click", function (event) {
  // Action menus
  if (!event.target.closest(".action-button")) {
    document.querySelectorAll(".action-menu").forEach((menu) => {
      if (!menu.contains(event.target)) {
        menu.classList.add("hidden");
      }
    });
  }
});

// Payment Chart
const paymentCtx = document.getElementById("paymentChart").getContext("2d");
const paymentChart = new Chart(paymentCtx, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Ags",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ],
    datasets: [
      {
        label: "Total Pembayaran (dalam juta Rupiah)",
        data: [125, 132, 121, 134, 120, 132, 145, 150, 142, 138, 152, 148],
        backgroundColor: "rgba(59, 130, 246, 0.7)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value + " jt";
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Rp ${context.raw} juta`;
          },
        },
      },
    },
  },
});

// Gender Chart
const genderCtx = document.getElementById("genderChart").getContext("2d");
const genderChart = new Chart(genderCtx, {
  type: "doughnut",
  data: {
    labels: ["Laki-laki", "Perempuan"],
    datasets: [
      {
        data: [680, 570],
        backgroundColor: ["rgba(59, 130, 246, 0.8)", "rgba(236, 72, 153, 0.8)"],
        borderColor: ["rgba(59, 130, 246, 1)", "rgba(236, 72, 153, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.raw || 0;
            const total = context.dataset.data.reduce(
              (acc, data) => acc + data,
              0
            );
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${value} siswa (${percentage}%)`;
          },
        },
      },
    },
    cutout: "65%",
  },
});

// Search functionality for Incident table
const incidentSearch = document.getElementById("incident-search");
const clearIncidentSearch = document.getElementById("clear-incident-search");
const incidentRows = document.querySelectorAll(".incident-row");
const incidentNoResults = document.getElementById("incident-no-results");
const incidentShowing = document.getElementById("incident-showing");
const incidentTotal = document.getElementById("incident-total");

incidentSearch.addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase().trim();
  let visibleCount = 0;

  if (searchTerm !== "") {
    clearIncidentSearch.classList.remove("hidden");
  } else {
    clearIncidentSearch.classList.add("hidden");
  }

  incidentRows.forEach((row) => {
    const name = row.querySelector(".incident-name").textContent.toLowerCase();
    const className = row
      .querySelector(".incident-class")
      .textContent.toLowerCase();
    const description = row
      .querySelector(".incident-description")
      .textContent.toLowerCase();

    if (
      name.includes(searchTerm) ||
      className.includes(searchTerm) ||
      description.includes(searchTerm)
    ) {
      row.style.display = "";
      visibleCount++;

      // Highlight matching text
      if (searchTerm !== "") {
        highlightText(row.querySelector(".incident-name"), name, searchTerm);
        highlightText(
          row.querySelector(".incident-class"),
          className,
          searchTerm
        );
        highlightText(
          row.querySelector(".incident-description"),
          description,
          searchTerm
        );
      } else {
        // Remove highlights if search is cleared
        row.querySelector(".incident-name").innerHTML = name;
        row.querySelector(".incident-class").innerHTML = className;
        row.querySelector(".incident-description").innerHTML = description;
      }
    } else {
      row.style.display = "none";
    }
  });

  // Update counter and show/hide no results message
  if (visibleCount === 0) {
    incidentNoResults.style.display = "block";
    incidentShowing.textContent = "0";
  } else {
    incidentNoResults.style.display = "none";
    incidentShowing.textContent = `1-${visibleCount}`;
  }
});

clearIncidentSearch.addEventListener("click", function () {
  incidentSearch.value = "";
  incidentSearch.dispatchEvent(new Event("input"));
  this.classList.add("hidden");
});

// Search functionality for Payment table
const paymentSearch = document.getElementById("payment-search");
const clearPaymentSearch = document.getElementById("clear-payment-search");
const paymentRows = document.querySelectorAll(".payment-row");
const paymentNoResults = document.getElementById("payment-no-results");
const paymentShowing = document.getElementById("payment-showing");
const paymentTotal = document.getElementById("payment-total");

paymentSearch.addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase().trim();
  let visibleCount = 0;

  if (searchTerm !== "") {
    clearPaymentSearch.classList.remove("hidden");
  } else {
    clearPaymentSearch.classList.add("hidden");
  }

  paymentRows.forEach((row) => {
    const name = row.querySelector(".payment-name").textContent.toLowerCase();
    const className = row
      .querySelector(".payment-class")
      .textContent.toLowerCase();
    const paymentType = row
      .querySelector(".payment-type")
      .textContent.toLowerCase();

    if (
      name.includes(searchTerm) ||
      className.includes(searchTerm) ||
      paymentType.includes(searchTerm)
    ) {
      row.style.display = "";
      visibleCount++;

      // Highlight matching text
      if (searchTerm !== "") {
        highlightText(row.querySelector(".payment-name"), name, searchTerm);
        highlightText(
          row.querySelector(".payment-class"),
          className,
          searchTerm
        );
        highlightText(
          row.querySelector(".payment-type"),
          paymentType,
          searchTerm
        );
      } else {
        // Remove highlights if search is cleared
        row.querySelector(".payment-name").innerHTML = name;
        row.querySelector(".payment-class").innerHTML = className;
        row.querySelector(".payment-type").innerHTML = paymentType;
      }
    } else {
      row.style.display = "none";
    }
  });

  // Update counter and show/hide no results message
  if (visibleCount === 0) {
    paymentNoResults.style.display = "block";
    paymentShowing.textContent = "0";
  } else {
    paymentNoResults.style.display = "none";
    paymentShowing.textContent = `1-${visibleCount}`;
  }
});

clearPaymentSearch.addEventListener("click", function () {
  paymentSearch.value = "";
  paymentSearch.dispatchEvent(new Event("input"));
  this.classList.add("hidden");
});

// Function to highlight matching text
function highlightText(element, originalText, searchTerm) {
  if (!searchTerm) return;

  const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, "gi");
  const newText = originalText.replace(
    regex,
    '<span class="search-highlight">$1</span>'
  );
  element.innerHTML = newText;
}

// Helper function to escape special characters in regex
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Add keyboard shortcut for search
document.addEventListener("keydown", function (event) {
  // Ctrl+F or Cmd+F (Mac)
  if ((event.ctrlKey || event.metaKey) && event.key === "f") {
    // Determine which search box to focus based on scroll position
    const incidentSection = document
      .querySelector(".incident-row")
      .closest(".bg-white");
    const paymentSection = document
      .querySelector(".payment-row")
      .closest(".bg-white");

    const incidentRect = incidentSection.getBoundingClientRect();
    const paymentRect = paymentSection.getBoundingClientRect();

    // If incident section is more visible, focus its search box
    if (
      incidentRect.top > -incidentRect.height / 2 &&
      incidentRect.top < window.innerHeight / 2
    ) {
      incidentSearch.focus();
    } else {
      paymentSearch.focus();
    }

    event.preventDefault(); // Prevent browser's default search
  }
});

// Add animation when search results are found
function animateResults(element) {
  element.classList.add("animate-pulse");
  setTimeout(() => {
    element.classList.remove("animate-pulse");
  }, 1000);
}

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'94246a0157349b96',t:'MTc0NzY2NjMwNC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
