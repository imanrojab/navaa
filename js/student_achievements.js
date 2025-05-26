// Sample data for student achievements
const achievementData = [
  {
    id: 1,
    nisn: "1234567890",
    name: "Ahmad Fauzi",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    class: "XI IPA 2",
    type: "academic",
    achievementName: "Juara 1 Olimpiade Matematika",
    level: "national",
    date: "2023-05-15",
    certificate:
      "https://via.placeholder.com/800x600.png?text=Piagam+Olimpiade+Matematika",
    description:
      "Meraih juara pertama dalam Olimpiade Matematika Tingkat Nasional yang diselenggarakan oleh Kementerian Pendidikan dan Kebudayaan.",
    organizer: "Kementerian Pendidikan dan Kebudayaan",
    location: "Jakarta Convention Center",
    teacher: "Budi Santoso, M.Pd",
    badge: "https://via.placeholder.com/200x200.png?text=Badge+Olimpiade",
    gallery: [
      "https://via.placeholder.com/400x300.png?text=Foto+Penyerahan+Piagam",
      "https://via.placeholder.com/400x300.png?text=Foto+Bersama+Juri",
      "https://via.placeholder.com/400x300.png?text=Foto+Saat+Kompetisi",
      "https://via.placeholder.com/400x300.png?text=Foto+Bersama+Tim",
    ],
  },
  {
    id: 2,
    nisn: "2345678901",
    name: "Siti Nurhaliza",
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
    class: "X IPA 1",
    type: "non-academic",
    achievementName: "Juara 2 Lomba Menyanyi Solo",
    level: "province",
    date: "2023-04-20",
    certificate:
      "https://via.placeholder.com/800x600.png?text=Piagam+Lomba+Menyanyi",
    description:
      "Meraih juara kedua dalam Lomba Menyanyi Solo Tingkat Provinsi yang diselenggarakan oleh Dinas Pendidikan Provinsi.",
    organizer: "Dinas Pendidikan Provinsi",
    location: "Gedung Kesenian Provinsi",
    teacher: "Dewi Lestari, S.Sn",
    badge: "https://via.placeholder.com/200x200.png?text=Badge+Menyanyi",
    gallery: [
      "https://via.placeholder.com/400x300.png?text=Foto+Penampilan",
      "https://via.placeholder.com/400x300.png?text=Foto+Penyerahan+Piagam",
      "https://via.placeholder.com/400x300.png?text=Foto+Bersama+Juri",
    ],
  },
  {
    id: 3,
    nisn: "3456789012",
    name: "Muhammad Rizki",
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
    class: "XII IPS 1",
    type: "academic",
    achievementName: "Juara 1 Debat Bahasa Inggris",
    level: "international",
    date: "2023-03-10",
    certificate:
      "https://via.placeholder.com/800x600.png?text=Piagam+Debat+Bahasa+Inggris",
    description:
      "Meraih juara pertama dalam Kompetisi Debat Bahasa Inggris Tingkat Internasional yang diselenggarakan oleh British Council.",
    organizer: "British Council",
    location: "Singapore International Convention Center",
    teacher: "Sarah Johnson, M.Ed",
    badge: "https://via.placeholder.com/200x200.png?text=Badge+Debat",
    gallery: [
      "https://via.placeholder.com/400x300.png?text=Foto+Saat+Debat",
      "https://via.placeholder.com/400x300.png?text=Foto+Penyerahan+Piagam",
      "https://via.placeholder.com/400x300.png?text=Foto+Bersama+Tim",
      "https://via.placeholder.com/400x300.png?text=Foto+Bersama+Juri",
    ],
  },
  {
    id: 4,
    nisn: "4567890123",
    name: "Anisa Rahma",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    class: "XI IPA 1",
    type: "non-academic",
    achievementName: "Juara 1 Hafalan Al-Quran 30 Juz",
    level: "district",
    date: "2023-02-25",
    certificate:
      "https://via.placeholder.com/800x600.png?text=Piagam+Hafalan+Al-Quran",
    description:
      "Meraih juara pertama dalam Lomba Hafalan Al-Quran 30 Juz Tingkat Kabupaten yang diselenggarakan oleh Kementerian Agama Kabupaten.",
    organizer: "Kementerian Agama Kabupaten",
    location: "Masjid Agung Kabupaten",
    teacher: "Ustadz Ahmad Fathoni, Lc",
    badge: "https://via.placeholder.com/200x200.png?text=Badge+Hafalan",
    gallery: [
      "https://via.placeholder.com/400x300.png?text=Foto+Saat+Lomba",
      "https://via.placeholder.com/400x300.png?text=Foto+Penyerahan+Piagam",
      "https://via.placeholder.com/400x300.png?text=Foto+Bersama+Dewan+Juri",
    ],
  },
  {
    id: 5,
    nisn: "5678901234",
    name: "Budi Santoso",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    class: "X IPS 2",
    type: "academic",
    achievementName: "Juara 3 Olimpiade Ekonomi",
    level: "school",
    date: "2023-01-15",
    certificate:
      "https://via.placeholder.com/800x600.png?text=Piagam+Olimpiade+Ekonomi",
    description:
      "Meraih juara ketiga dalam Olimpiade Ekonomi Tingkat Sekolah yang diselenggarakan oleh OSIS.",
    organizer: "OSIS SMA Negeri 1",
    location: "Aula SMA Negeri 1",
    teacher: "Rina Wulandari, S.E",
    badge: "https://via.placeholder.com/200x200.png?text=Badge+Ekonomi",
    gallery: [
      "https://via.placeholder.com/400x300.png?text=Foto+Saat+Olimpiade",
      "https://via.placeholder.com/400x300.png?text=Foto+Penyerahan+Piagam",
    ],
  },
  {
    id: 6,
    nisn: "6789012345",
    name: "Dewi Lestari",
    photo: "https://randomuser.me/api/portraits/women/3.jpg",
    class: "XII IPA 2",
    type: "non-academic",
    achievementName: "Juara 1 Lomba Tari Tradisional",
    level: "province",
    date: "2022-12-10",
    certificate:
      "https://via.placeholder.com/800x600.png?text=Piagam+Lomba+Tari",
    description:
      "Meraih juara pertama dalam Lomba Tari Tradisional Tingkat Provinsi yang diselenggarakan oleh Dinas Kebudayaan Provinsi.",
    organizer: "Dinas Kebudayaan Provinsi",
    location: "Gedung Kesenian Provinsi",
    teacher: "Sri Wahyuni, S.Sn",
    badge: "https://via.placeholder.com/200x200.png?text=Badge+Tari",
    gallery: [
      "https://via.placeholder.com/400x300.png?text=Foto+Penampilan",
      "https://via.placeholder.com/400x300.png?text=Foto+Penyerahan+Piagam",
      "https://via.placeholder.com/400x300.png?text=Foto+Bersama+Tim",
      "https://via.placeholder.com/400x300.png?text=Foto+Bersama+Juri",
    ],
  },
  {
    id: 7,
    nisn: "7890123456",
    name: "Eko Prasetyo",
    photo: "https://randomuser.me/api/portraits/men/4.jpg",
    class: "XI IPS 1",
    type: "academic",
    achievementName: "Juara 2 Lomba Karya Tulis Ilmiah",
    level: "national",
    date: "2022-11-20",
    certificate:
      "https://via.placeholder.com/800x600.png?text=Piagam+Karya+Tulis+Ilmiah",
    description:
      "Meraih juara kedua dalam Lomba Karya Tulis Ilmiah Tingkat Nasional yang diselenggarakan oleh Kementerian Riset dan Teknologi.",
    organizer: "Kementerian Riset dan Teknologi",
    location: "Gedung Kementerian Riset dan Teknologi, Jakarta",
    teacher: "Dr. Hendra Wijaya, M.Si",
    badge: "https://via.placeholder.com/200x200.png?text=Badge+KTI",
    gallery: [
      "https://via.placeholder.com/400x300.png?text=Foto+Presentasi",
      "https://via.placeholder.com/400x300.png?text=Foto+Penyerahan+Piagam",
      "https://via.placeholder.com/400x300.png?text=Foto+Bersama+Tim",
    ],
  },
  {
    id: 8,
    nisn: "8901234567",
    name: "Fitri Handayani",
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
    class: "X IPA 2",
    type: "academic",
    achievementName: "Juara 1 Olimpiade Fisika",
    level: "district",
    date: "2022-10-15",
    certificate:
      "https://via.placeholder.com/800x600.png?text=Piagam+Olimpiade+Fisika",
    description:
      "Meraih juara pertama dalam Olimpiade Fisika Tingkat Kabupaten yang diselenggarakan oleh Dinas Pendidikan Kabupaten.",
    organizer: "Dinas Pendidikan Kabupaten",
    location: "SMA Negeri 1 Kabupaten",
    teacher: "Ir. Bambang Sutrisno, M.Pd",
    badge: "https://via.placeholder.com/200x200.png?text=Badge+Fisika",
    gallery: [
      "https://via.placeholder.com/400x300.png?text=Foto+Saat+Olimpiade",
      "https://via.placeholder.com/400x300.png?text=Foto+Penyerahan+Piagam",
      "https://via.placeholder.com/400x300.png?text=Foto+Bersama+Juri",
    ],
  },
  {
    id: 9,
    nisn: "9012345678",
    name: "Gunawan Wibisono",
    photo: "https://randomuser.me/api/portraits/men/5.jpg",
    class: "XII IPA 1",
    type: "non-academic",
    achievementName: "Juara 3 Lomba Fotografi",
    level: "national",
    date: "2022-09-05",
    certificate:
      "https://via.placeholder.com/800x600.png?text=Piagam+Lomba+Fotografi",
    description:
      "Meraih juara ketiga dalam Lomba Fotografi Tingkat Nasional yang diselenggarakan oleh Asosiasi Fotografer Indonesia.",
    organizer: "Asosiasi Fotografer Indonesia",
    location: "Galeri Nasional Indonesia, Jakarta",
    teacher: "Rudi Hartono, S.Sn",
    badge: "https://via.placeholder.com/200x200.png?text=Badge+Fotografi",
    gallery: [
      "https://via.placeholder.com/400x300.png?text=Foto+Karya+Pemenang",
      "https://via.placeholder.com/400x300.png?text=Foto+Penyerahan+Piagam",
      "https://via.placeholder.com/400x300.png?text=Foto+Bersama+Juri",
    ],
  },
  {
    id: 10,
    nisn: "0123456789",
    name: "Hani Permata",
    photo: "https://randomuser.me/api/portraits/women/5.jpg",
    class: "XI IPS 2",
    type: "academic",
    achievementName: "Juara 2 Hafalan Hadits",
    level: "school",
    date: "2022-08-20",
    certificate:
      "https://via.placeholder.com/800x600.png?text=Piagam+Hafalan+Hadits",
    description:
      "Meraih juara kedua dalam Lomba Hafalan Hadits Tingkat Sekolah yang diselenggarakan oleh Rohis.",
    organizer: "Rohis SMA Negeri 1",
    location: "Musholla SMA Negeri 1",
    teacher: "Ustadzah Fatimah, S.Ag",
    badge: "https://via.placeholder.com/200x200.png?text=Badge+Hadits",
    gallery: [
      "https://via.placeholder.com/400x300.png?text=Foto+Saat+Lomba",
      "https://via.placeholder.com/400x300.png?text=Foto+Penyerahan+Piagam",
    ],
  },
];

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  populateTable();
  setupModalEvents();
});

// Populate table with achievement data
function populateTable() {
  const tableBody = document.getElementById("achievement-table");
  tableBody.innerHTML = "";

  achievementData.forEach((achievement, index) => {
    const row = document.createElement("tr");

    // Type badge class
    let typeBadgeClass = "";
    let typeText = "";

    switch (achievement.type) {
      case "academic":
        typeBadgeClass = "badge-academic";
        typeText = "Akademik";
        break;
      case "non-academic":
        typeBadgeClass = "badge-non-academic";
        typeText = "Non-Akademik";
        break;
    }

    // Level badge class
    let levelBadgeClass = "";
    let levelText = "";

    switch (achievement.level) {
      case "school":
        levelBadgeClass = "badge-school";
        levelText = "Sekolah";
        break;
      case "district":
        levelBadgeClass = "badge-district";
        levelText = "Kabupaten";
        break;
      case "province":
        levelBadgeClass = "badge-province";
        levelText = "Provinsi";
        break;
      case "national":
        levelBadgeClass = "badge-national";
        levelText = "Nasional";
        break;
      case "international":
        levelBadgeClass = "badge-international";
        levelText = "Internasional";
        break;
    }

    row.innerHTML = `
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-900">${
                    index + 1
                  }</td>
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-900">${
                    achievement.nisn
                  }</td>
                  <td class="px-4 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                          <div class="flex-shrink-0 h-8 w-8">
                              <img class="h-8 w-8 rounded-full" src="${
                                achievement.photo
                              }" alt="${achievement.name}">
                          </div>
                          <div class="ml-3">
                              <p class="text-sm font-medium text-gray-900">${
                                achievement.name
                              }</p>
                          </div>
                      </div>
                  </td>
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">${
                    achievement.class
                  }</td>
                  <td class="px-4 py-4 whitespace-nowrap">
                      <span class="badge ${typeBadgeClass}">${typeText}</span>
                  </td>
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-900">${
                    achievement.achievementName
                  }</td>
                  <td class="px-4 py-4 whitespace-nowrap">
                      <span class="badge ${levelBadgeClass}">${levelText}</span>
                  </td>
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">${formatDate(
                    achievement.date
                  )}</td>
                  <td class="px-4 py-4 whitespace-nowrap">
                      <button onclick="viewCertificate('${
                        achievement.certificate
                      }')" class="text-blue-600 hover:text-blue-900">
                          <i class="fas fa-file-alt mr-1"></i> Lihat
                      </button>
                  </td>
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div class="flex space-x-2">
                          <button onclick="showDetail(${
                            achievement.id
                          })" class="text-indigo-600 hover:text-indigo-900 tooltip">
                              <i class="fas fa-eye"></i>
                              <span class="tooltip-text">Lihat Detail</span>
                          </button>
                          <button onclick="showEditModal(${
                            achievement.id
                          })" class="text-green-600 hover:text-green-900 tooltip">
                              <i class="fas fa-edit"></i>
                              <span class="tooltip-text">Edit</span>
                          </button>
                          <button onclick="showDeleteModal(${
                            achievement.id
                          })" class="text-red-600 hover:text-red-900 tooltip">
                              <i class="fas fa-trash-alt"></i>
                              <span class="tooltip-text">Hapus</span>
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

// Show achievement detail
function showDetail(id) {
  const achievement = achievementData.find((a) => a.id === id);
  if (!achievement) return;

  // Set student info
  document.getElementById("detail-photo").src = achievement.photo;
  document.getElementById("detail-name").textContent = achievement.name;
  document.getElementById(
    "detail-nisn"
  ).textContent = `NISN: ${achievement.nisn}`;
  document.getElementById("detail-class").textContent = achievement.class;
  document.getElementById("detail-badge").src = achievement.badge;

  // Set achievement info
  document.getElementById("detail-achievement-name").textContent =
    achievement.achievementName;

  // Set type badge
  const typeContainer = document.getElementById("detail-type-container");
  let typeBadgeClass = "";
  let typeText = "";

  switch (achievement.type) {
    case "akademik":
      typeBadgeClass = "badge-academic";
      typeText = "Akademik";
      break;
    case "non-akademik":
      typeBadgeClass = "badge-non-academic";
      typeText = "Non-Akademik";
      break;
  }

  typeContainer.innerHTML = `<span class="badge ${typeBadgeClass}">${typeText}</span>`;

  // Set level badge
  const levelContainer = document.getElementById("detail-level-container");
  let levelBadgeClass = "";
  let levelText = "";

  switch (achievement.level) {
    case "school":
      levelBadgeClass = "badge-school";
      levelText = "Sekolah";
      break;
    case "district":
      levelBadgeClass = "badge-district";
      levelText = "Kabupaten";
      break;
    case "province":
      levelBadgeClass = "badge-province";
      levelText = "Provinsi";
      break;
    case "national":
      levelBadgeClass = "badge-national";
      levelText = "Nasional";
      break;
    case "international":
      levelBadgeClass = "badge-international";
      levelText = "Internasional";
      break;
  }

  levelContainer.innerHTML = `<span class="badge ${levelBadgeClass}">${levelText}</span>`;

  // Set other achievement info
  document.getElementById("detail-description").textContent =
    achievement.description;
  document.getElementById("detail-organizer").textContent =
    achievement.organizer;
  document.getElementById("detail-location").textContent = achievement.location;
  document.getElementById("detail-date").textContent = formatDate(
    achievement.date
  );
  document.getElementById("detail-teacher").textContent = achievement.teacher;

  // Set certificate
  document.getElementById("detail-certificate").innerHTML = `
              <div class="flex items-center justify-between">
                  <div class="flex items-center">
                      <i class="fas fa-file-alt text-indigo-600 mr-2"></i>
                      <span class="text-sm text-gray-800">Piagam Penghargaan</span>
                  </div>
                  <button onclick="viewCertificate('${achievement.certificate}')" class="text-blue-600 hover:text-blue-900 text-sm">
                      <i class="fas fa-eye mr-1"></i> Lihat
                  </button>
              </div>
          `;

  // Set gallery
  const galleryContainer = document.getElementById("detail-gallery");
  galleryContainer.innerHTML = "";

  achievement.gallery.forEach((image) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";
    galleryItem.innerHTML = `
                  <img src="${image}" alt="Dokumentasi" class="w-full h-24 object-cover rounded-lg" onclick="previewImage('${image}')">
              `;
    galleryContainer.appendChild(galleryItem);
  });

  // Show modal
  document.getElementById("detailModal").style.display = "block";
}

// Show add modal
function showAddModal() {
  // Reset form
  document.getElementById("achievementForm").reset();

  // Set modal title
  document.getElementById("modal-title").textContent = "Tambah Prestasi";

  // Show modal
  document.getElementById("addEditModal").style.display = "block";
}

// Show edit modal
function showEditModal(id) {
  const achievement = achievementData.find((a) => a.id === id);
  if (!achievement) return;

  // Set form values
  document.getElementById("form-nisn").value = achievement.nisn;
  document.getElementById("form-name").value = achievement.name;
  document.getElementById("form-class").value = achievement.class;
  document.getElementById("form-achievement-name").value =
    achievement.achievementName;
  document.getElementById("form-type").value = achievement.type;
  document.getElementById("form-level").value = achievement.level;
  document.getElementById("form-date").value = achievement.date;
  document.getElementById("form-organizer").value = achievement.organizer;
  document.getElementById("form-location").value = achievement.location;
  document.getElementById("form-teacher").value = achievement.teacher;
  document.getElementById("form-description").value = achievement.description;

  // Set modal title
  document.getElementById("modal-title").textContent = "Edit Prestasi";

  // Show modal
  document.getElementById("addEditModal").style.display = "block";
}

// Show delete modal
function showDeleteModal(id) {
  // Store the ID to be deleted
  window.deleteId = id;

  // Show modal
  document.getElementById("deleteModal").style.display = "block";
}

// Confirm delete
function confirmDelete() {
  // In a real app, you would delete the data from the server
  // For now, we'll just show a notification and close the modal

  // Close modal
  document.getElementById("deleteModal").style.display = "none";

  // Show notification
  showNotification("Data prestasi berhasil dihapus!");
}

// Save achievement
function saveAchievement() {
  // In a real app, you would save the data to the server
  // For now, we'll just show a notification and close the modal

  // Close modal
  document.getElementById("addEditModal").style.display = "none";

  // Show notification
  showNotification("Data prestasi berhasil disimpan!");
}

// View certificate
function viewCertificate(url) {
  previewImage(url);
}

// Preview image
function previewImage(url) {
  document.getElementById("previewImage").src = url;
  document.getElementById("imagePreviewModal").style.display = "block";
}

// Apply filters
function applyFilters() {
  // In a real app, you would filter the data based on the selected filters
  // For now, we'll just show a notification
  showNotification("Filter diterapkan!");
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
        "window.__CF$cv$params={r:'9414a5baa7b49e2c',t:'MTc0NzUwMDk3OC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
