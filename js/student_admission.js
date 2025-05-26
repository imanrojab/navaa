// Sample data
const students = [
  {
    id: "PPDB-2023-001",
    nisn: "1234567890",
    name: "Ahmad Fauzi",
    level: "SMP/MTs",
    batch: "1",
    status: "partial",
    remaining: "Rp 5.000.000",
  },
  {
    id: "PPDB-2023-002",
    nisn: "2345678901",
    name: "Siti Nurhaliza",
    level: "SMA/MA",
    batch: "1",
    status: "unpaid",
    remaining: "Rp 7.500.000",
  },
  {
    id: "PPDB-2023-003",
    nisn: "3456789012",
    name: "Muhammad Rizki",
    level: "SD/MI",
    batch: "2",
    status: "paid",
    remaining: "Rp 0",
  },
  {
    id: "PPDB-2023-004",
    nisn: "4567890123",
    name: "Anisa Rahma",
    level: "SMP/MTs",
    batch: "2",
    status: "partial",
    remaining: "Rp 4.000.000",
  },
  {
    id: "PPDB-2023-005",
    nisn: "5678901234",
    name: "Budi Santoso",
    level: "SMA/MA",
    batch: "1",
    status: "unpaid",
    remaining: "Rp 7.500.000",
  },
  {
    id: "PPDB-2023-006",
    nisn: "6789012345",
    name: "Dewi Lestari",
    level: "SD/MI",
    batch: "3",
    status: "paid",
    remaining: "Rp 0",
  },
  {
    id: "PPDB-2023-007",
    nisn: "7890123456",
    name: "Eko Prasetyo",
    level: "SMP/MTs",
    batch: "2",
    status: "unpaid",
    remaining: "Rp 6.500.000",
  },
  {
    id: "PPDB-2023-008",
    nisn: "8901234567",
    name: "Fitri Handayani",
    level: "SMA/MA",
    batch: "3",
    status: "partial",
    remaining: "Rp 3.500.000",
  },
  {
    id: "PPDB-2023-009",
    nisn: "9012345678",
    name: "Gunawan Wibisono",
    level: "SD/MI",
    batch: "1",
    status: "paid",
    remaining: "Rp 0",
  },
  {
    id: "PPDB-2023-010",
    nisn: "0123456789",
    name: "Hani Permata",
    level: "SMP/MTs",
    batch: "3",
    status: "unpaid",
    remaining: "Rp 6.500.000",
  },
];

// Current active tab
let activeTab = "all";

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  populateTable();
});

// Tab switching
function switchTab(tab) {
  const tabs = ["all", "unpaid", "partial", "paid"];
  tabs.forEach((t) => {
    document.getElementById(`tab-${t}`).classList.remove("tab-active");
  });
  document.getElementById(`tab-${tab}`).classList.add("tab-active");
  activeTab = tab;
  populateTable();
}

// Populate table based on active tab
function populateTable() {
  const tableBody = document.getElementById("student-table-body");
  tableBody.innerHTML = "";

  let filteredStudents = students;
  if (activeTab !== "all") {
    filteredStudents = students.filter(
      (student) => student.status === activeTab
    );
  }

  filteredStudents.forEach((student, index) => {
    const row = document.createElement("tr");

    // Status badge class
    let statusBadgeClass = "";
    let statusText = "";

    if (student.status === "unpaid") {
      statusBadgeClass = "status-unpaid";
      statusText = "Belum Bayar";
    } else if (student.status === "partial") {
      statusBadgeClass = "status-partial";
      statusText = "Uang Muka";
    } else if (student.status === "paid") {
      statusBadgeClass = "status-paid";
      statusText = "Lunas";
    }

    row.innerHTML = `
               <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${student.id}</td>
               <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${student.nisn}</td>
               <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${student.name}</td>
               <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${student.level}</td>
               <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Gelombang ${student.batch}</td>
               <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                   <span class="status-badge ${statusBadgeClass}">${statusText}</span>
               </td>
               <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${student.remaining}</td>
               <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                   <div class="dropdown">
                       <button onclick="toggleDropdown(${index})" class="text-gray-500 hover:text-gray-700">
                           <i class="fas fa-ellipsis-v"></i>
                       </button>
                       <div id="dropdown-${index}" class="dropdown-content">
                           <a href="#" onclick="showStudentDetail('${student.id}')"><i class="fas fa-eye mr-2"></i> Detail</a>
                           <a href="#" onclick="showPaymentModal('${student.id}')"><i class="fas fa-money-bill-wave mr-2"></i> Input Pembayaran</a>
                           <a href="#" onclick="showReminderModal('${student.id}')"><i class="fas fa-bell mr-2"></i> Kirim Pengingat</a>
                           <a href="#" onclick="showEditModal('${student.id}')"><i class="fas fa-edit mr-2"></i> Ubah</a>
                           <a href="#" onclick="showDeleteModal('${student.id}')"><i class="fas fa-trash-alt mr-2"></i> Hapus</a>
                       </div>
                   </div>
               </td>
           `;

    tableBody.appendChild(row);
  });
}

// Dropdown toggle
function toggleDropdown(id) {
  document.getElementById(`dropdown-${id}`).classList.toggle("show");
}

// Close dropdowns when clicking outside
window.onclick = function (event) {
  if (!event.target.matches(".fa-ellipsis-v")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains("show")) {
        dropdowns[i].classList.remove("show");
      }
    }
  }
};

// Modal functions
function showModal(id) {
  document.getElementById(id).classList.remove("hidden");
}

function hideModal(id) {
  document.getElementById(id).classList.add("hidden");
}

// Copy registration link
function copyRegistrationLink() {
  const copyText = document.getElementById("registration-link");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");

  const tooltip = document.getElementById("copy-tooltip");
  tooltip.innerHTML = "Tersalin!";

  setTimeout(function () {
    tooltip.innerHTML = "Salin link";
  }, 2000);
}

// Show student detail
function showStudentDetail(id) {
  // In a real app, you would fetch the student details from the server
  // For now, we'll just show the modal
  showModal("modal-detail-student");
}

// Show payment modal
function showPaymentModal(id) {
  showModal("modal-payment");
}

// Show reminder modal
function showReminderModal(id) {
  showModal("modal-reminder");
}

// Show edit modal
function showEditModal(id) {
  // In a real app, you would populate the form with the student's data
  showModal("modal-add-student");
}

// Show delete modal
function showDeleteModal(id) {
  // Find the student by id
  const student = students.find((s) => s.id === id);
  if (student) {
    document.getElementById("delete-student-name").textContent = student.name;
  }
  showModal("modal-delete");
}

// Add new student
function addStudent() {
  // Logic to add student would go here
  hideModal("modal-add-student");
  // Show success notification
  showNotification("Data calon siswa berhasil ditambahkan!");
}

// Save payment
function savePayment() {
  // Logic to save payment would go here
  hideModal("modal-payment");
  // Show success notification
  showNotification("Pembayaran berhasil disimpan!");
  // Refresh the table
  populateTable();
}

// Send reminder
function sendReminder() {
  // Logic to send reminder would go here
  hideModal("modal-reminder");
  // Show success notification
  showNotification("Pengingat pembayaran berhasil dikirim!");
}

// Delete student
function deleteStudent() {
  // Logic to delete student would go here
  hideModal("modal-delete");
  // Show success notification
  showNotification("Data calon siswa berhasil dihapus!");
  // Refresh the table
  populateTable();
}

// Export data
function exportData() {
  // Logic to export data would go here
  showNotification("Data berhasil diekspor!");
}

// Update reminder message based on template
function updateReminderMessage() {
  const template = document.getElementById("reminder-template").value;
  const messageField = document.getElementById("reminder-message");

  if (template === "default") {
    messageField.value =
      "Yth. Bapak/Ibu Budi Santoso, kami mengingatkan bahwa masih terdapat tagihan pembayaran PPDB untuk Ahmad Fauzi sebesar Rp 5.000.000. Mohon segera melakukan pembayaran. Terima kasih.";
  } else if (template === "urgent") {
    messageField.value =
      "PENTING: Yth. Bapak/Ibu Budi Santoso, kami mengingatkan kembali bahwa tagihan pembayaran PPDB untuk Ahmad Fauzi sebesar Rp 5.000.000 sudah mendekati tenggat waktu. Mohon segera melakukan pembayaran untuk menghindari pembatalan pendaftaran. Terima kasih.";
  } else if (template === "final") {
    messageField.value =
      "PENGINGAT TERAKHIR: Yth. Bapak/Ibu Budi Santoso, ini adalah pengingat terakhir untuk tagihan pembayaran PPDB Ahmad Fauzi sebesar Rp 5.000.000. Jika tidak dilakukan pembayaran dalam 3 hari, pendaftaran akan dibatalkan. Terima kasih.";
  }
}

// Success notification
function showNotification(message) {
  const notification = document.createElement("div");
  notification.className =
    "fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition-opacity duration-300";
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
        "window.__CF$cv$params={r:'941487cf12568196',t:'MTc0NzQ5OTc1NS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
