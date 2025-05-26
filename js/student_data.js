// Sample data
const students = [
  {
    id: 1,
    nisn: "1234567890",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Ahmad Fauzi",
    gender: "L",
    class: "VII A",
    address: "Kec. Cilandak, Jakarta Selatan",
    phone: "081234567890",
    fatherPhone: "081234567890",
    motherPhone: "087654321098",
    guardianPhone: "",
  },
  {
    id: 2,
    nisn: "2345678901",
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Siti Nurhaliza",
    gender: "P",
    class: "VII A",
    address: "Kec. Kebayoran Baru, Jakarta Selatan",
    phone: "082345678901",
    fatherPhone: "082345678901",
    motherPhone: "089876543210",
    guardianPhone: "",
  },
  {
    id: 3,
    nisn: "3456789012",
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Muhammad Rizki",
    gender: "L",
    class: "VIII B",
    address: "Kec. Pancoran, Jakarta Selatan",
    phone: "083456789012",
    fatherPhone: "083456789012",
    motherPhone: "081234567890",
    guardianPhone: "087654321098",
  },
  {
    id: 4,
    nisn: "4567890123",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Anisa Rahma",
    gender: "P",
    class: "VIII A",
    address: "Kec. Tebet, Jakarta Selatan",
    phone: "084567890123",
    fatherPhone: "084567890123",
    motherPhone: "089876543210",
    guardianPhone: "",
  },
  {
    id: 5,
    nisn: "5678901234",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Budi Santoso",
    gender: "L",
    class: "IX A",
    address: "Kec. Mampang Prapatan, Jakarta Selatan",
    phone: "085678901234",
    fatherPhone: "085678901234",
    motherPhone: "081234567890",
    guardianPhone: "",
  },
  {
    id: 6,
    nisn: "6789012345",
    photo: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Dewi Lestari",
    gender: "P",
    class: "IX B",
    address: "Kec. Pasar Minggu, Jakarta Selatan",
    phone: "086789012345",
    fatherPhone: "086789012345",
    motherPhone: "089876543210",
    guardianPhone: "087654321098",
  },
  {
    id: 7,
    nisn: "7890123456",
    photo: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Eko Prasetyo",
    gender: "L",
    class: "VII B",
    address: "Kec. Jagakarsa, Jakarta Selatan",
    phone: "087890123456",
    fatherPhone: "087890123456",
    motherPhone: "081234567890",
    guardianPhone: "",
  },
  {
    id: 8,
    nisn: "8901234567",
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Fitri Handayani",
    gender: "P",
    class: "VIII B",
    address: "Kec. Pesanggrahan, Jakarta Selatan",
    phone: "088901234567",
    fatherPhone: "088901234567",
    motherPhone: "089876543210",
    guardianPhone: "",
  },
  {
    id: 9,
    nisn: "9012345678",
    photo: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Gunawan Wibisono",
    gender: "L",
    class: "IX A",
    address: "Kec. Kebayoran Lama, Jakarta Selatan",
    phone: "089012345678",
    fatherPhone: "089012345678",
    motherPhone: "081234567890",
    guardianPhone: "087654321098",
  },
  {
    id: 10,
    nisn: "0123456789",
    photo: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Hani Permata",
    gender: "P",
    class: "IX B",
    address: "Kec. Setiabudi, Jakarta Selatan",
    phone: "080123456789",
    fatherPhone: "080123456789",
    motherPhone: "089876543210",
    guardianPhone: "",
  },
];

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  populateTable();

  // Set up photo upload preview
  document
    .getElementById("edit-photo-upload")
    .addEventListener("change", function (e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById("edit-photo-preview").src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
});

// Populate table
function populateTable() {
  const tableBody = document.getElementById("student-table-body");
  tableBody.innerHTML = "";

  students.forEach((student, index) => {
    const row = document.createElement("tr");

    // Gender badge class
    let genderBadgeClass =
      student.gender === "L" ? "gender-male" : "gender-female";
    let genderIcon = student.gender === "L" ? "fa-male" : "fa-female";
    let genderText = student.gender === "L" ? "Laki-laki" : "Perempuan";

    row.innerHTML = `
                 <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${
                   index + 1
                 }</td>
                 <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${
                   student.nisn
                 }</td>
                 <td class="px-6 py-4 whitespace-nowrap">
                     <img src="${student.photo}" alt="Foto ${
      student.name
    }" class="student-photo">
                 </td>
                 <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${
                   student.name
                 }</td>
                 <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                     <span class="gender-badge ${genderBadgeClass}">
                         <i class="fas ${genderIcon} mr-1"></i> ${genderText}
                     </span>
                 </td>
                 <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${
                   student.class
                 }</td>
                 <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${
                   student.address
                 }</td>
                 <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                     <div class="phone-tooltip">
                         ${student.phone}
                         <div class="tooltip-content">
                             <div class="mb-1"><i class="fas fa-user mr-1"></i> Siswa: ${
                               student.phone
                             }</div>
                             <div class="mb-1"><i class="fas fa-male mr-1"></i> Ayah: ${
                               student.fatherPhone
                             }</div>
                             <div class="mb-1"><i class="fas fa-female mr-1"></i> Ibu: ${
                               student.motherPhone
                             }</div>
                             ${
                               student.guardianPhone
                                 ? `<div><i class="fas fa-user-friends mr-1"></i> Wali: ${student.guardianPhone}</div>`
                                 : ""
                             }
                         </div>
                     </div>
                 </td>
                 <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                     <div class="dropdown">
                         <button onclick="toggleDropdown(${index})" class="text-gray-500 hover:text-gray-700">
                             <i class="fas fa-ellipsis-v"></i>
                         </button>
                         <div id="dropdown-${index}" class="dropdown-content">
                             <a href="#" onclick="showStudentDetail(${
                               student.id
                             })"><i class="fas fa-eye mr-2"></i> Detail</a>
                             <a href="#" onclick="showEditModal(${
                               student.id
                             })"><i class="fas fa-edit mr-2"></i> Ubah</a>
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

// Show student detail
function showStudentDetail(id) {
  // In a real app, you would fetch the student details from the server
  // For now, we'll just show the modal with sample data
  const student = students.find((s) => s.id === id) || students[0];

  // Set student photo
  document.getElementById("detail-photo").src = student.photo;

  // Set student name and NISN
  document.getElementById("detail-name").textContent = student.name;
  document.getElementById("detail-nisn").textContent = `NISN: ${student.nisn}`;

  // Set gender badge
  const genderBadge = document.getElementById("detail-gender-badge");
  if (student.gender === "L") {
    genderBadge.className = "gender-badge gender-male";
    genderBadge.innerHTML = '<i class="fas fa-male mr-1"></i> Laki-laki';
  } else {
    genderBadge.className = "gender-badge gender-female";
    genderBadge.innerHTML = '<i class="fas fa-female mr-1"></i> Perempuan';
  }

  // Set class
  document.getElementById(
    "detail-class"
  ).textContent = `Kelas: ${student.class}`;

  showModal("modal-detail-student");
}

// Show edit modal
function showEditModal(id) {
  // In a real app, you would populate the form with the student's data
  hideModal("modal-detail-student");
  showModal("modal-edit-student");
}

// Save student data
function saveStudentData() {
  // Logic to save student data would go here
  hideModal("modal-edit-student");
  // Show success notification
  showNotification("Data siswa berhasil disimpan!");
}

// Export data
function exportData() {
  // Logic to export data would go here
  showNotification("Data berhasil diekspor!");
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
        "window.__CF$cv$params={r:'9414918ec299d439',t:'MTc0NzUwMDE1Mi4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
