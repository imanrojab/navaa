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

      // Show/hide jenis kejadian filter based on tab
      const jenisKejadianFilter = document.getElementById(
        "jenisKejadianFilter"
      );
      if (tabId === "semua") {
        jenisKejadianFilter.style.display = "block";
      } else {
        jenisKejadianFilter.style.display = "none";
      }
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

  // Modal functionality
  const modalTambahLaporan = document.getElementById("modalTambahLaporan");
  const tambahLaporan = document.getElementById("tambahLaporan");
  const closeTambahLaporan = document.getElementById("closeTambahLaporan");
  const cancelTambahLaporan = document.getElementById("cancelTambahLaporan");

  tambahLaporan.addEventListener("click", () => {
    modalTambahLaporan.style.display = "block";
    document.getElementById("overlay").style.display = "block";
  });

  closeTambahLaporan.addEventListener("click", () => {
    modalTambahLaporan.style.display = "none";
    document.getElementById("overlay").style.display = "none";
  });

  cancelTambahLaporan.addEventListener("click", () => {
    modalTambahLaporan.style.display = "none";
    document.getElementById("overlay").style.display = "none";
  });

  // Kirim ke Wali functionality
  const modalKirimWali = document.getElementById("modalKirimWali");
  const closeKirimWali = document.getElementById("closeKirimWali");
  const cancelKirimWali = document.getElementById("cancelKirimWali");
  const modalKonfirmasi = document.getElementById("modalKonfirmasi");
  const closeKonfirmasi = document.getElementById("closeKonfirmasi");
  const btnTidak = document.getElementById("btnTidak");
  const btnYa = document.getElementById("btnYa");

  // Sample data for demonstration
  const kejadianData = {
    1: {
      nisn: "1234567890",
      nama: "Ahmad Fauzi",
      kelas: "11 IPA 2",
      jenis: "Pelanggaran",
      tanggal: "20 Jun 2023",
      deskripsi:
        "Siswa terlambat masuk kelas selama 30 menit tanpa alasan yang jelas.",
    },
    2: {
      nisn: "0987654321",
      nama: "Siti Nurhaliza",
      kelas: "10 IPS 1",
      jenis: "Peristiwa",
      tanggal: "19 Jun 2023",
      deskripsi:
        "Siswa mengalami sakit perut dan dibawa ke UKS selama jam pelajaran.",
    },
    3: {
      nisn: "2345678901",
      nama: "Budi Santoso",
      kelas: "12 IPA 1",
      jenis: "Pelanggaran",
      tanggal: "18 Jun 2023",
      deskripsi:
        "Siswa tidak mengerjakan tugas yang diberikan oleh guru mata pelajaran Matematika.",
    },
  };

  // Handle Kirim ke Wali button click
  document.querySelectorAll(".kirim-wali").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = btn.getAttribute("data-id");
      const reported = btn.getAttribute("data-reported") === "true";
      const reportDate = btn.getAttribute("data-date");

      if (reported) {
        // Show confirmation modal
        document.getElementById(
          "konfirmasiText"
        ).textContent = `Laporan kejadian ini sebelumnya sudah dilaporkan pada tanggal ${reportDate}, apakah anda yakin untuk melaporkannya kembali?`;
        modalKonfirmasi.style.display = "block";
        document.getElementById("overlay").style.display = "block";

        // Store the ID for later use
        modalKonfirmasi.setAttribute("data-id", id);
      } else {
        // Show Kirim ke Wali modal directly
        showKirimWaliModal(id);
      }
    });
  });

  closeKirimWali.addEventListener("click", () => {
    modalKirimWali.style.display = "none";
    document.getElementById("overlay").style.display = "none";
  });

  cancelKirimWali.addEventListener("click", () => {
    modalKirimWali.style.display = "none";
    document.getElementById("overlay").style.display = "none";
  });

  closeKonfirmasi.addEventListener("click", () => {
    modalKonfirmasi.style.display = "none";
    document.getElementById("overlay").style.display = "none";
  });

  btnTidak.addEventListener("click", () => {
    modalKonfirmasi.style.display = "none";
    document.getElementById("overlay").style.display = "none";
  });

  btnYa.addEventListener("click", () => {
    const id = modalKonfirmasi.getAttribute("data-id");
    modalKonfirmasi.style.display = "none";
    showKirimWaliModal(id);
  });

  function showKirimWaliModal(id) {
    const data = kejadianData[id];

    // Fill the form with data
    document.getElementById("kirimNisn").value = data.nisn;
    document.getElementById("kirimNama").value = data.nama;
    document.getElementById("kirimKelas").value = data.kelas;
    document.getElementById("kirimJenis").value = data.jenis;
    document.getElementById("kirimTanggal").value = data.tanggal;
    document.getElementById("kirimDeskripsi").value = data.deskripsi;

    modalKirimWali.style.display = "block";
    document.getElementById("overlay").style.display = "block";
  }
});

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'941806f6b4b2401d',t:'MTc0NzUzNjQxOC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
