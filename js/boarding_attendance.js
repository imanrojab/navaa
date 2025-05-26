// Sample data - Students with SVG photos
const students = [
  {
    id: 1,
    nisn: "1001",
    name: "Ahmad Farhan",
    class: "10A",
    photo: `<svg class="w-full h-full text-blue-500" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="7" r="4" fill="#4B5563"/><path d="M2 18C2 14.5 5 12 10 12C15 12 18 14.5 18 18" fill="#4B5563"/></svg>`,
  },
  {
    id: 2,
    nisn: "1002",
    name: "Budi Santoso",
    class: "10A",
    photo: `<svg class="w-full h-full text-green-500" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="7" r="4" fill="#4B5563"/><path d="M2 18C2 14.5 5 12 10 12C15 12 18 14.5 18 18" fill="#4B5563"/></svg>`,
  },
  {
    id: 3,
    nisn: "1003",
    name: "Citra Dewi",
    class: "10A",
    photo: `<svg class="w-full h-full text-pink-500" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="7" r="4" fill="#4B5563"/><path d="M2 18C2 14.5 5 12 10 12C15 12 18 14.5 18 18" fill="#4B5563"/></svg>`,
  },
  {
    id: 4,
    nisn: "1004",
    name: "Dian Purnama",
    class: "10A",
    photo: `<svg class="w-full h-full text-purple-500" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="7" r="4" fill="#4B5563"/><path d="M2 18C2 14.5 5 12 10 12C15 12 18 14.5 18 18" fill="#4B5563"/></svg>`,
  },
  {
    id: 5,
    nisn: "1005",
    name: "Eko Prasetyo",
    class: "10A",
    photo: `<svg class="w-full h-full text-yellow-500" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="7" r="4" fill="#4B5563"/><path d="M2 18C2 14.5 5 12 10 12C15 12 18 14.5 18 18" fill="#4B5563"/></svg>`,
  },
  {
    id: 6,
    nisn: "1006",
    name: "Faisal Rahman",
    class: "10A",
    photo: `<svg class="w-full h-full text-red-500" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="7" r="4" fill="#4B5563"/><path d="M2 18C2 14.5 5 12 10 12C15 12 18 14.5 18 18" fill="#4B5563"/></svg>`,
  },
  {
    id: 7,
    nisn: "1007",
    name: "Gita Nirmala",
    class: "10A",
    photo: `<svg class="w-full h-full text-indigo-500" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="7" r="4" fill="#4B5563"/><path d="M2 18C2 14.5 5 12 10 12C15 12 18 14.5 18 18" fill="#4B5563"/></svg>`,
  },
  {
    id: 8,
    nisn: "1008",
    name: "Hadi Wijaya",
    class: "10A",
    photo: `<svg class="w-full h-full text-blue-500" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="7" r="4" fill="#4B5563"/><path d="M2 18C2 14.5 5 12 10 12C15 12 18 14.5 18 18" fill="#4B5563"/></svg>`,
  },
  {
    id: 9,
    nisn: "1009",
    name: "Indah Permata",
    class: "10A",
    photo: `<svg class="w-full h-full text-pink-500" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="7" r="4" fill="#4B5563"/><path d="M2 18C2 14.5 5 12 10 12C15 12 18 14.5 18 18" fill="#4B5563"/></svg>`,
  },
  {
    id: 10,
    nisn: "1010",
    name: "Joko Susilo",
    class: "10A",
    photo: `<svg class="w-full h-full text-green-500" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="7" r="4" fill="#4B5563"/><path d="M2 18C2 14.5 5 12 10 12C15 12 18 14.5 18 18" fill="#4B5563"/></svg>`,
  },
  {
    id: 11,
    nisn: "1011",
    name: "Kartika Sari",
    class: "10B",
    photo: `<svg class="w-full h-full text-purple-500" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="7" r="4" fill="#4B5563"/><path d="M2 18C2 14.5 5 12 10 12C15 12 18 14.5 18 18" fill="#4B5563"/></svg>`,
  },
  {
    id: 12,
    nisn: "1012",
    name: "Lukman Hakim",
    class: "10B",
    photo: `<svg class="w-full h-full text-yellow-500" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="7" r="4" fill="#4B5563"/><path d="M2 18C2 14.5 5 12 10 12C15 12 18 14.5 18 18" fill="#4B5563"/></svg>`,
  },
  {
    id: 13,
    nisn: "1013",
    name: "Mawar Indah",
    class: "10B",
    photo: `<svg class="w-full h-full text-red-500" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="7" r="4" fill="#4B5563"/><path d="M2 18C2 14.5 5 12 10 12C15 12 18 14.5 18 18" fill="#4B5563"/></svg>`,
  },
  {
    id: 14,
    nisn: "1014",
    name: "Nadia Putri",
    class: "10B",
    photo: `<svg class="w-full h-full text-indigo-500" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="7" r="4" fill="#4B5563"/><path d="M2 18C2 14.5 5 12 10 12C15 12 18 14.5 18 18" fill="#4B5563"/></svg>`,
  },
  {
    id: 15,
    nisn: "1015",
    name: "Oki Gunawan",
    class: "10B",
    photo: `<svg class="w-full h-full text-blue-500" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="7" r="4" fill="#4B5563"/><path d="M2 18C2 14.5 5 12 10 12C15 12 18 14.5 18 18" fill="#4B5563"/></svg>`,
  },
  {
    id: 16,
    nisn: "1016",
    name: "Putri Rahayu",
    class: "11A",
    photo: `<svg class="w-full h-full text-pink-500" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="7" r="4" fill="#4B5563"/><path d="M2 18C2 14.5 5 12 10 12C15 12 18 14.5 18 18" fill="#4B5563"/></svg>`,
  },
  {
    id: 17,
    nisn: "1017",
    name: "Qori Hidayat",
    class: "11A",
    photo: `<svg class="w-full h-full text-green-500" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="7" r="4" fill="#4B5563"/><path d="M2 18C2 14.5 5 12 10 12C15 12 18 14.5 18 18" fill="#4B5563"/></svg>`,
  },
  {
    id: 18,
    nisn: "1018",
    name: "Rudi Hartono",
    class: "11A",
    photo: `<svg class="w-full h-full text-purple-500" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="7" r="4" fill="#4B5563"/><path d="M2 18C2 14.5 5 12 10 12C15 12 18 14.5 18 18" fill="#4B5563"/></svg>`,
  },
  {
    id: 19,
    nisn: "1019",
    name: "Siti Nurhaliza",
    class: "11B",
    photo: `<svg class="w-full h-full text-yellow-500" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="7" r="4" fill="#4B5563"/><path d="M2 18C2 14.5 5 12 10 12C15 12 18 14.5 18 18" fill="#4B5563"/></svg>`,
  },
  {
    id: 20,
    nisn: "1020",
    name: "Tono Sucipto",
    class: "11B",
    photo: `<svg class="w-full h-full text-red-500" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="7" r="4" fill="#4B5563"/><path d="M2 18C2 14.5 5 12 10 12C15 12 18 14.5 18 18" fill="#4B5563"/></svg>`,
  },
];

// Sample data - Wali Kelas
const waliKelasData = {
  "10A": "Ustadz Ahmad Fauzi, S.Pd",
  "10B": "Ustadzah Siti Aminah, S.Pd",
  "11A": "Ustadz Budi Santoso, M.Pd",
  "11B": "Ustadzah Dewi Kartika, S.Pd",
  "12A": "Ustadz Hasan Basri, S.Pd.I",
  "12B": "Ustadzah Nur Hidayah, M.Pd",
};

// Attendance data
let attendanceData = [];
let currentStudentIndex = 0;
let selectedClass = "";
let selectedMapel = "";

// DOM Elements
const modalMulaiAbsensi = document.getElementById("modalMulaiAbsensi");
const modalProsesAbsensi = document.getElementById("modalProsesAbsensi");
const modalRevisiAbsensi = document.getElementById("modalRevisiAbsensi");
const btnMulaiAbsensi = document.getElementById("btnMulaiAbsensi");
const btnRevisiAbsensi = document.getElementById("btnRevisiAbsensi");
const formMulaiAbsensi = document.getElementById("formMulaiAbsensi");
const absensiTable = document.getElementById("absensiTable");
const searchInput = document.getElementById("searchInput");
const filterKelas = document.getElementById("filterKelas");
const filterMapel = document.getElementById("filterMapel");
const filterStatus = document.getElementById("filterStatus");
const tanggalAbsensi = document.getElementById("tanggalAbsensi");
const selectKelas = document.getElementById("selectKelas");
const selectMapel = document.getElementById("selectMapel");
const waliKelas = document.getElementById("waliKelas");
const pengabsen = document.getElementById("pengabsen");

// Set default date to today
const today = new Date();
const maxDate = today.toISOString().split("T")[0];
tanggalAbsensi.value = maxDate;
tanggalAbsensi.max = maxDate;

// Initialize with some sample attendance data
initializeSampleData();

function initializeSampleData() {
  // Create sample attendance data for today
  const sampleAttendanceData = students.slice(0, 15).map((student) => ({
    ...student,
    mapel: "Matematika",
    pengajar: "Ustadz Muhammad Rizki, S.Pd",
    status:
      Math.random() > 0.2
        ? "hadir"
        : Math.random() > 0.5
        ? "sakit"
        : Math.random() > 0.5
        ? "ijin"
        : "alpha",
    date: maxDate,
  }));

  attendanceData = sampleAttendanceData;
  updateAttendanceTable();
  updateAttendanceCounts();
}

// Open modal functions
btnMulaiAbsensi.addEventListener("click", () => {
  modalMulaiAbsensi.classList.remove("hidden");
  modalMulaiAbsensi.classList.add("fade-in");
});

btnRevisiAbsensi.addEventListener("click", () => {
  if (attendanceData.length === 0) {
    showNotification("Belum ada data absensi untuk direvisi", "warning");
    return;
  }
  currentStudentIndex = 0;
  updateRevisiStudentUI();
  modalRevisiAbsensi.classList.remove("hidden");
  modalRevisiAbsensi.classList.add("fade-in");
});

// Close modal functions
document.querySelectorAll(".closeModal").forEach((btn) => {
  btn.addEventListener("click", () => {
    modalMulaiAbsensi.classList.add("hidden");
    modalProsesAbsensi.classList.add("hidden");
    modalRevisiAbsensi.classList.add("hidden");
  });
});

// Form submission
formMulaiAbsensi.addEventListener("submit", (e) => {
  e.preventDefault();
  selectedClass = selectKelas.value;
  selectedMapel = selectMapel.value;

  // Filter students by selected class
  const filteredStudents = students.filter(
    (student) => student.class === selectedClass
  );

  if (filteredStudents.length === 0) {
    showNotification("Tidak ada siswa di kelas ini", "warning");
    return;
  }

  // Reset attendance data
  attendanceData = filteredStudents.map((student) => ({
    ...student,
    mapel: selectedMapel,
    pengajar: pengabsen.value,
    status: null,
    date: tanggalAbsensi.value,
  }));

  currentStudentIndex = 0;
  modalMulaiAbsensi.classList.add("hidden");
  updateStudentUI();
  modalProsesAbsensi.classList.remove("hidden");
  modalProsesAbsensi.classList.add("fade-in");

  showNotification(`Memulai absensi untuk kelas ${selectedClass}`, "success");
});

// Update student UI in absensi process
function updateStudentUI() {
  const student = attendanceData[currentStudentIndex];
  document.getElementById("nomorAbsen").textContent = currentStudentIndex + 1;
  document.getElementById("studentName").textContent = student.name;
  document.getElementById(
    "studentClass"
  ).textContent = `Kelas ${student.class}`;

  // Handle student photo
  if (student.photo) {
    document.getElementById("studentPhotoContainer").innerHTML = student.photo;
  } else {
    document.getElementById("studentPhotoContainer").innerHTML = `
                  <svg class="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                  </svg>
              `;
  }

  // Update navigation buttons
  document.getElementById("prevStudent").disabled = currentStudentIndex === 0;
  document
    .getElementById("prevStudent")
    .classList.toggle("opacity-50", currentStudentIndex === 0);
  document.getElementById("nextStudent").disabled =
    currentStudentIndex === attendanceData.length - 1;
  document
    .getElementById("nextStudent")
    .classList.toggle(
      "opacity-50",
      currentStudentIndex === attendanceData.length - 1
    );
}

// Update student UI in revisi process
function updateRevisiStudentUI() {
  const student = attendanceData[currentStudentIndex];
  document.getElementById("nomorAbsenRevisi").textContent =
    currentStudentIndex + 1;
  document.getElementById("studentNameRevisi").textContent = student.name;
  document.getElementById(
    "studentClassRevisi"
  ).textContent = `Kelas ${student.class}`;
  document.getElementById("currentStatus").textContent = student.status
    ? capitalizeFirstLetter(student.status)
    : "Belum diabsen";

  // Update status class
  document.getElementById("currentStatus").className = "font-medium";
  if (student.status) {
    document
      .getElementById("currentStatus")
      .classList.add(`text-${getStatusColor(student.status)}-600`);
  }

  // Handle student photo
  if (student.photo) {
    document.getElementById("studentPhotoContainerRevisi").innerHTML =
      student.photo;
  } else {
    document.getElementById("studentPhotoContainerRevisi").innerHTML = `
                  <svg class="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                  </svg>
              `;
  }

  // Update navigation buttons
  document.getElementById("prevStudentRevisi").disabled =
    currentStudentIndex === 0;
  document
    .getElementById("prevStudentRevisi")
    .classList.toggle("opacity-50", currentStudentIndex === 0);
  document.getElementById("nextStudentRevisi").disabled =
    currentStudentIndex === attendanceData.length - 1;
  document
    .getElementById("nextStudentRevisi")
    .classList.toggle(
      "opacity-50",
      currentStudentIndex === attendanceData.length - 1
    );

  // Highlight current status button
  document.querySelectorAll(".status-btn-revisi").forEach((btn) => {
    const btnStatus = btn.getAttribute("data-status");
    btn.classList.toggle("ring-2", btnStatus === student.status);
    btn.classList.toggle("ring-offset-2", btnStatus === student.status);
    btn.classList.toggle("ring-blue-500", btnStatus === student.status);
  });
}

// Navigation buttons
document.getElementById("prevStudent").addEventListener("click", () => {
  if (currentStudentIndex > 0) {
    currentStudentIndex--;
    updateStudentUI();
  }
});

document.getElementById("nextStudent").addEventListener("click", () => {
  if (currentStudentIndex < attendanceData.length - 1) {
    currentStudentIndex++;
    updateStudentUI();
  }
});

document.getElementById("prevStudentRevisi").addEventListener("click", () => {
  if (currentStudentIndex > 0) {
    currentStudentIndex--;
    updateRevisiStudentUI();
  }
});

document.getElementById("nextStudentRevisi").addEventListener("click", () => {
  if (currentStudentIndex < attendanceData.length - 1) {
    currentStudentIndex++;
    updateRevisiStudentUI();
  }
});

// Status buttons
document.querySelectorAll(".status-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const status = btn.getAttribute("data-status");
    attendanceData[currentStudentIndex].status = status;

    // Add animation
    btn.classList.add("ring-2", "ring-offset-2", "ring-blue-500");
    setTimeout(() => {
      btn.classList.remove("ring-2", "ring-offset-2", "ring-blue-500");
    }, 300);

    if (currentStudentIndex < attendanceData.length - 1) {
      currentStudentIndex++;
      updateStudentUI();
    } else {
      modalProsesAbsensi.classList.add("hidden");
      updateAttendanceTable();
      updateAttendanceCounts();
      showNotification("Absensi telah selesai", "success");
    }
  });
});

// Revisi status buttons
document.querySelectorAll(".status-btn-revisi").forEach((btn) => {
  btn.addEventListener("click", () => {
    const status = btn.getAttribute("data-status");
    const oldStatus = attendanceData[currentStudentIndex].status;
    attendanceData[currentStudentIndex].status = status;

    // Add animation
    btn.classList.add("ring-2", "ring-offset-2", "ring-blue-500");
    setTimeout(() => {
      btn.classList.remove("ring-2", "ring-offset-2", "ring-blue-500");
    }, 300);

    if (currentStudentIndex < attendanceData.length - 1) {
      currentStudentIndex++;
      updateRevisiStudentUI();
    } else {
      modalRevisiAbsensi.classList.add("hidden");
      updateAttendanceTable();
      updateAttendanceCounts();
      showNotification(
        `Status absensi berhasil direvisi dari ${capitalizeFirstLetter(
          oldStatus
        )} menjadi ${capitalizeFirstLetter(status)}`,
        "success"
      );
    }
  });
});

// Update attendance table
function updateAttendanceTable() {
  absensiTable.innerHTML = "";

  const filteredData = filterAttendanceData();

  if (filteredData.length === 0) {
    const emptyRow = document.createElement("tr");
    emptyRow.innerHTML = `
                  <td colspan="6" class="px-6 py-4 text-center text-gray-500">Tidak ada data absensi</td>
              `;
    absensiTable.appendChild(emptyRow);
    return;
  }

  filteredData.forEach((student) => {
    const row = document.createElement("tr");
    row.className = "hover:bg-gray-50 transition-colors";

    const statusClass = getStatusClass(student.status);

    row.innerHTML = `
                  <td class="px-6 py-4 whitespace-nowrap">${student.nisn}</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
                              ${
                                student.photo ||
                                `
                                  <svg class="h-10 w-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                                  </svg>
                              `
                              }
                          </div>
                          <div class="ml-4">
                              <div class="text-sm font-medium text-gray-900">${
                                student.name
                              }</div>
                          </div>
                      </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">Kelas ${
                    student.class
                  }</td>
                  <td class="px-6 py-4 whitespace-nowrap">${student.mapel}</td>
                  <td class="px-6 py-4 whitespace-nowrap">${
                    student.pengajar
                  }</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClass}">
                          ${
                            student.status
                              ? capitalizeFirstLetter(student.status)
                              : "Belum diabsen"
                          }
                      </span>
                  </td>
              `;

    absensiTable.appendChild(row);
  });
}

// Filter attendance data based on search and filters
function filterAttendanceData() {
  const searchTerm = searchInput.value.toLowerCase();
  const classFilter = filterKelas.value;
  const mapelFilter = filterMapel.value;
  const statusFilter = filterStatus.value;

  return attendanceData.filter((student) => {
    const matchSearch =
      student.name.toLowerCase().includes(searchTerm) ||
      student.class.toLowerCase().includes(searchTerm) ||
      (student.pengajar && student.pengajar.toLowerCase().includes(searchTerm));

    const matchClass = classFilter ? student.class === classFilter : true;
    const matchMapel = mapelFilter ? student.mapel === mapelFilter : true;
    const matchStatus = statusFilter ? student.status === statusFilter : true;

    return matchSearch && matchClass && matchMapel && matchStatus;
  });
}

// Update attendance counts
function updateAttendanceCounts() {
  const hadirCount = attendanceData.filter((s) => s.status === "hadir").length;
  const sakitCount = attendanceData.filter((s) => s.status === "sakit").length;
  const ijinCount = attendanceData.filter((s) => s.status === "ijin").length;
  const alphaCount = attendanceData.filter((s) => s.status === "alpha").length;

  document.getElementById("hadirCount").textContent = hadirCount;
  document.getElementById("sakitCount").textContent = sakitCount;
  document.getElementById("izinCount").textContent = ijinCount;
  document.getElementById("alphaCount").textContent = alphaCount;

  // Add animation
  document.querySelectorAll(".card").forEach((card) => {
    card.classList.add("scale-105");
    setTimeout(() => {
      card.classList.remove("scale-105");
    }, 300);
  });
}

// Search and filter event listeners
searchInput.addEventListener("input", updateAttendanceTable);
filterKelas.addEventListener("change", updateAttendanceTable);
filterMapel.addEventListener("change", updateAttendanceTable);
filterStatus.addEventListener("change", updateAttendanceTable);

// Auto-populate wali kelas based on selected class
selectKelas.addEventListener("change", () => {
  const selectedClass = selectKelas.value;
  waliKelas.value = waliKelasData[selectedClass] || "";
});

// Show notification
function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg text-white z-50 transform transition-all duration-500 translate-y-20 opacity-0`;

  // Set background color based on type
  switch (type) {
    case "success":
      notification.classList.add("bg-green-500");
      break;
    case "warning":
      notification.classList.add("bg-yellow-500");
      break;
    case "error":
      notification.classList.add("bg-red-500");
      break;
    default:
      notification.classList.add("bg-blue-500");
  }

  notification.innerHTML = `
              <div class="flex items-center">
                  <i class="fas ${
                    type === "success"
                      ? "fa-check-circle"
                      : type === "warning"
                      ? "fa-exclamation-triangle"
                      : type === "error"
                      ? "fa-times-circle"
                      : "fa-info-circle"
                  } mr-2"></i>
                  <span>${message}</span>
              </div>
          `;

  document.body.appendChild(notification);

  // Show notification
  setTimeout(() => {
    notification.classList.remove("translate-y-20", "opacity-0");
  }, 100);

  // Hide and remove notification
  setTimeout(() => {
    notification.classList.add("translate-y-20", "opacity-0");
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 500);
  }, 3000);
}

// Helper functions
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getStatusClass(status) {
  switch (status) {
    case "hadir":
      return "status-hadir";
    case "sakit":
      return "status-sakit";
    case "ijin":
      return "status-ijin";
    case "alpha":
      return "status-alpha";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

function getStatusColor(status) {
  switch (status) {
    case "hadir":
      return "green";
    case "sakit":
      return "red";
    case "ijin":
      return "yellow";
    case "alpha":
      return "gray";
    default:
      return "gray";
  }
}

// Initialize with sample data
updateAttendanceTable();

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'941738b99523ba3d',t:'MTc0NzUyNzk3MS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
