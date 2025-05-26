// Sample data for student health records
const studentHealthData = [
  {
    id: 1,
    nisn: "1234567890",
    name: "Ahmad Fauzi",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    room: "A-101",
    phone: "081234567890",
    specialTreatment: {
      type: "alergi",
      details: "Alergi debu dan makanan laut",
    },
    status: "sakit",
    complaint: "Demam tinggi dan sakit kepala",
    diagnosis: "Demam berdarah",
    treatment: "Pemberian cairan infus dan obat penurun panas",
    startDate: "2023-05-15",
    endDate: null,
    notes: "Perlu pemantauan ketat terhadap trombosit",
  },
  {
    id: 2,
    nisn: "2345678901",
    name: "Siti Nurhaliza",
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
    room: "B-205",
    phone: "082345678901",
    specialTreatment: {
      type: "kronis",
      details: "Asma",
    },
    status: "sakit",
    complaint: "Sesak napas dan batuk",
    diagnosis: "Serangan asma",
    treatment: "Nebulizer dan obat asma",
    startDate: "2023-05-16",
    endDate: null,
    notes: "Hindari aktivitas berat dan debu",
  },
  {
    id: 3,
    nisn: "3456789012",
    name: "Muhammad Rizki",
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
    room: "A-103",
    phone: "083456789012",
    specialTreatment: null,
    status: "pulang",
    complaint: "Sakit perut dan mual",
    diagnosis: "Gastroenteritis",
    treatment: "Obat anti mual dan diare",
    startDate: "2023-05-14",
    endDate: "2023-05-16",
    notes: "Perlu istirahat di rumah selama 3 hari",
  },
  {
    id: 4,
    nisn: "4567890123",
    name: "Anisa Rahma",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    room: "B-210",
    phone: "084567890123",
    specialTreatment: {
      type: "alergi",
      details: "Alergi kacang",
    },
    status: "sehat",
    complaint: "Ruam kulit dan gatal",
    diagnosis: "Reaksi alergi",
    treatment: "Antihistamin dan salep",
    startDate: "2023-05-10",
    endDate: "2023-05-12",
    notes: "Hindari makanan yang mengandung kacang",
  },
  {
    id: 5,
    nisn: "5678901234",
    name: "Budi Santoso",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    room: "A-105",
    phone: "085678901234",
    specialTreatment: {
      type: "lainnya",
      details: "Diabetes tipe 1",
    },
    status: "sakit",
    complaint: "Lemas dan pusing",
    diagnosis: "Hipoglikemia",
    treatment: "Pemberian glukosa dan pemantauan gula darah",
    startDate: "2023-05-16",
    endDate: null,
    notes: "Perlu pemantauan gula darah secara teratur",
  },
  {
    id: 6,
    nisn: "6789012345",
    name: "Dewi Lestari",
    photo: "https://randomuser.me/api/portraits/women/3.jpg",
    room: "B-215",
    phone: "086789012345",
    specialTreatment: null,
    status: "pulang",
    complaint: "Demam dan batuk",
    diagnosis: "Influenza",
    treatment: "Obat penurun panas dan antivirus",
    startDate: "2023-05-13",
    endDate: "2023-05-15",
    notes: "Perlu istirahat di rumah",
  },
  {
    id: 7,
    nisn: "7890123456",
    name: "Eko Prasetyo",
    photo: "https://randomuser.me/api/portraits/men/4.jpg",
    room: "A-107",
    phone: "087890123456",
    specialTreatment: null,
    status: "sakit",
    complaint: "Sakit tenggorokan dan demam",
    diagnosis: "Faringitis",
    treatment: "Antibiotik dan obat kumur",
    startDate: "2023-05-15",
    endDate: null,
    notes: "Hindari makanan pedas dan minuman dingin",
  },
  {
    id: 8,
    nisn: "8901234567",
    name: "Fitri Handayani",
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
    room: "B-220",
    phone: "088901234567",
    specialTreatment: {
      type: "kronis",
      details: "Epilepsi",
    },
    status: "sehat",
    complaint: "Kejang",
    diagnosis: "Serangan epilepsi",
    treatment: "Obat anti kejang",
    startDate: "2023-05-08",
    endDate: "2023-05-10",
    notes: "Perlu pemantauan rutin dan hindari pemicu kejang",
  },
  {
    id: 9,
    nisn: "9012345678",
    name: "Gunawan Wibisono",
    photo: "https://randomuser.me/api/portraits/men/5.jpg",
    room: "A-109",
    phone: "089012345678",
    specialTreatment: {
      type: "alergi",
      details: "Alergi obat penisilin",
    },
    status: "pulang",
    complaint: "Demam dan nyeri sendi",
    diagnosis: "Demam tifoid",
    treatment: "Antibiotik non-penisilin dan cairan infus",
    startDate: "2023-05-10",
    endDate: "2023-05-14",
    notes: "Perlu istirahat di rumah selama seminggu",
  },
  {
    id: 10,
    nisn: "0123456789",
    name: "Hani Permata",
    photo: "https://randomuser.me/api/portraits/women/5.jpg",
    room: "B-225",
    phone: "080123456789",
    specialTreatment: null,
    status: "sakit",
    complaint: "Nyeri perut bagian bawah",
    diagnosis: "Dismenore",
    treatment: "Analgesik dan kompres hangat",
    startDate: "2023-05-16",
    endDate: null,
    notes: "Perlu istirahat dan hindari aktivitas berat",
  },
];

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  populateTable();
  setupModalEvents();
});

// Populate table with student health data
function populateTable() {
  const tableBody = document.getElementById("student-health-table");
  tableBody.innerHTML = "";

  studentHealthData.forEach((student, index) => {
    const row = document.createElement("tr");

    // Status badge class
    let statusBadgeClass = "";
    let statusText = "";

    switch (student.status) {
      case "sehat":
        statusBadgeClass = "status-healthy";
        statusText = "Sehat";
        break;
      case "sakit":
        statusBadgeClass = "status-sick";
        statusText = "Sakit";
        break;
      case "pulang":
        statusBadgeClass = "status-sick-leave";
        statusText = "Pulang Karena Sakit";
        break;
    }

    // Special treatment display
    let specialTreatmentDisplay = "";
    if (student.specialTreatment) {
      let typeText = "";
      switch (student.specialTreatment.type) {
        case "alergi":
          typeText = "Alergi";
          break;
        case "kronis":
          typeText = "Penyakit Kronis";
          break;
        case "lainnya":
          typeText = "Lainnya";
          break;
      }

      specialTreatmentDisplay = `
                      <div class="tooltip">
                          <span class="condition-special text-xs font-medium px-2 py-0.5 rounded-full">${typeText}</span>
                          <span class="tooltip-text">${student.specialTreatment.details}</span>
                      </div>
                  `;
    } else {
      specialTreatmentDisplay = '<span class="text-gray-500">-</span>';
    }

    row.innerHTML = `
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-900">${
                    index + 1
                  }</td>
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-900">${
                    student.nisn
                  }</td>
                  <td class="px-4 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                          <div class="flex-shrink-0 h-8 w-8">
                              <img class="h-8 w-8 rounded-full" src="${
                                student.photo
                              }" alt="${student.name}">
                          </div>
                          <div class="ml-3">
                              <p class="text-sm font-medium text-gray-900">${
                                student.name
                              }</p>
                          </div>
                      </div>
                  </td>
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">${
                    student.room
                  }</td>
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">${
                    student.phone
                  }</td>
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">${specialTreatmentDisplay}</td>
                  <td class="px-4 py-4 whitespace-nowrap">
                      <span class="status-badge ${statusBadgeClass}">${statusText}</span>
                  </td>
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div class="flex space-x-2">
                          <button onclick="showDetail(${
                            student.id
                          })" class="text-indigo-600 hover:text-indigo-900">
                              <i class="fas fa-eye"></i>
                          </button>
                          <button onclick="showUpdateModal(${
                            student.id
                          })" class="text-green-600 hover:text-green-900">
                              <i class="fas fa-edit"></i>
                          </button>
                      </div>
                  </td>
              `;

    tableBody.appendChild(row);
  });
}

// Set up modal events
function setupModalEvents() {
  // Get all modals
  const modals = document.getElementsByClassName("modal");

  // Get all close buttons
  const closeButtons = document.getElementsByClassName("close");
  const closeModalButtons = document.getElementsByClassName("close-modal");

  // When the user clicks on the close button, close the modal
  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function () {
      for (let j = 0; j < modals.length; j++) {
        modals[j].style.display = "none";
      }
    };
  }

  // When the user clicks on the close modal button, close the modal
  for (let i = 0; i < closeModalButtons.length; i++) {
    closeModalButtons[i].onclick = function () {
      for (let j = 0; j < modals.length; j++) {
        modals[j].style.display = "none";
      }
    };
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    for (let i = 0; i < modals.length; i++) {
      if (event.target == modals[i]) {
        modals[i].style.display = "none";
      }
    }
  };
}

// Show student health detail
function showDetail(id) {
  const student = studentHealthData.find((s) => s.id === id);
  if (!student) return;

  // Set basic info
  document.getElementById("detail-photo").src = student.photo;
  document.getElementById("detail-name").textContent = student.name;
  document.getElementById("detail-nisn").textContent = `NISN: ${student.nisn}`;
  document.getElementById("detail-room").textContent = student.room;
  document.getElementById("detail-phone").textContent = student.phone;

  // Set status badge
  const statusContainer = document.getElementById("detail-status-container");
  let statusBadgeClass = "";
  let statusText = "";

  switch (student.status) {
    case "sehat":
      statusBadgeClass = "status-healthy";
      statusText = "Sehat";
      break;
    case "sakit":
      statusBadgeClass = "status-sick";
      statusText = "Sakit";
      break;
    case "pulang":
      statusBadgeClass = "status-sick-leave";
      statusText = "Pulang Karena Sakit";
      break;
  }

  statusContainer.innerHTML = `<span class="status-badge ${statusBadgeClass}">${statusText}</span>`;

  // Set health info
  document.getElementById("detail-complaint").textContent = student.complaint;
  document.getElementById("detail-diagnosis").textContent = student.diagnosis;
  document.getElementById("detail-treatment").textContent = student.treatment;
  document.getElementById("detail-start-date").textContent = formatDate(
    student.startDate
  );

  // Show/hide end date based on status
  const endDateContainer = document.getElementById("detail-end-date-container");
  if (student.endDate) {
    endDateContainer.style.display = "block";
    document.getElementById("detail-end-date").textContent = formatDate(
      student.endDate
    );
  } else {
    endDateContainer.style.display = "none";
  }

  // Set special treatment info
  const specialTreatmentContainer = document.getElementById(
    "detail-special-treatment-container"
  );
  if (student.specialTreatment) {
    let typeText = "";
    switch (student.specialTreatment.type) {
      case "alergi":
        typeText = "Alergi";
        break;
      case "kronis":
        typeText = "Penyakit Kronis";
        break;
      case "lainnya":
        typeText = "Lainnya";
        break;
    }

    specialTreatmentContainer.innerHTML = `
                  <div class="bg-purple-50 p-3 rounded-md">
                      <span class="condition-special text-xs font-medium px-2 py-0.5 rounded-full">${typeText}</span>
                      <p class="text-sm text-gray-800 mt-2">${student.specialTreatment.details}</p>
                  </div>
              `;
  } else {
    specialTreatmentContainer.innerHTML =
      '<p class="text-sm text-gray-500">Tidak ada penanganan khusus</p>';
  }

  // Set notes
  document.getElementById("detail-notes").textContent = student.notes || "-";

  // Show modal
  document.getElementById("detailModal").style.display = "block";
}

// Show update modal
function showUpdateModal(id) {
  const student = studentHealthData.find((s) => s.id === id);
  if (!student) return;

  // Hide detail modal if open
  document.getElementById("detailModal").style.display = "none";

  // Set form values
  document.getElementById("update-name").value = student.name;
  document.getElementById("update-nisn").value = student.nisn;
  document.getElementById("update-status").value = student.status;
  document.getElementById("update-date").value = new Date()
    .toISOString()
    .split("T")[0];
  document.getElementById("update-complaint").value = student.complaint;
  document.getElementById("update-diagnosis").value = student.diagnosis;
  document.getElementById("update-treatment").value = student.treatment;
  document.getElementById("update-notes").value = student.notes || "";

  // Show modal
  document.getElementById("updateModal").style.display = "block";
}

// Open update modal from detail modal
function openUpdateModal() {
  // Get current student name from detail modal
  const studentName = document.getElementById("detail-name").textContent;
  const student = studentHealthData.find((s) => s.name === studentName);

  if (student) {
    showUpdateModal(student.id);
  }
}

// Save update
function saveUpdate() {
  // In a real app, you would save the data to the server
  // For now, we'll just show a notification and close the modal

  // Close modal
  document.getElementById("updateModal").style.display = "none";

  // Show notification
  showNotification("Status kesehatan siswa berhasil diperbarui!");
}

// Export data
function exportData() {
  // In a real app, you would export the data to a file
  // For now, we'll just show a notification
  showNotification("Data berhasil diekspor!");
}

// Format date
function formatDate(dateString) {
  if (!dateString) return "-";

  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Show notification
function showNotification(message) {
  const notification = document.createElement("div");
  notification.className =
    "fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-opacity duration-300";
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.opacity = "0";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'941499e7060df916',t:'MTc0NzUwMDQ5NC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
