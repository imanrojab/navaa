// Sample data
let letters = [
  {
    id: 1,
    title: "Undangan Rapat Wali Murid",
    description:
      "Undangan rapat wali murid untuk membahas program semester genap tahun ajaran 2023/2024.",
    category: "Wali siswa SMP VII",
    document: "undangan_rapat_wali_murid.pdf",
    publishDate: "2023-06-15",
    expiryDate: "2023-06-30",
    publisher: "Kepala Sekolah",
  },
  {
    id: 2,
    title: "Pengumuman Libur Hari Raya",
    description:
      "Pengumuman mengenai jadwal libur hari raya dan tanggal masuk kembali sekolah.",
    category: "Semua",
    document: "pengumuman_libur.pdf",
    publishDate: "2023-06-10",
    expiryDate: "2023-07-15",
    publisher: "Admin",
  },
  {
    id: 3,
    title: "Surat Edaran Pembayaran SPP",
    description:
      "Surat edaran mengenai pembayaran SPP untuk semester genap tahun ajaran 2023/2024.",
    category: "Wali siswa SMA XI IPA",
    document: "surat_edaran_spp.pdf",
    publishDate: "2023-06-05",
    expiryDate: "2023-07-05",
    publisher: "Wakil Kepala Sekolah",
  },
  {
    id: 4,
    title: "Undangan Workshop Pengembangan Kurikulum",
    description:
      "Undangan workshop pengembangan kurikulum untuk guru-guru sekolah.",
    category: "Guru Sekolah",
    document: "undangan_workshop.pdf",
    publishDate: "2023-06-01",
    expiryDate: "2023-06-20",
    publisher: "Kepala Sekolah",
  },
  {
    id: 5,
    title: "Pengumuman Jadwal Ujian Akhir Semester",
    description:
      "Pengumuman jadwal ujian akhir semester genap tahun ajaran 2023/2024.",
    category: "Wali siswa SMK XII AKUNTANSI",
    document: "jadwal_ujian.pdf",
    publishDate: "2023-05-25",
    expiryDate: "2023-06-25",
    publisher: "Admin",
  },
];

// Current user (for demo purposes)
const currentUser = {
  name: "Admin",
  role: "Administrator",
};

// DOM Elements
const letterForm = document.getElementById("letterForm");
const dropArea = document.getElementById("dropArea");
const fileInput = document.getElementById("document");
const filePreview = document.getElementById("filePreview");
const fileName = document.getElementById("fileName");
const removeFile = document.getElementById("removeFile");
const publishDate = document.getElementById("publishDate");
const expiryDate = document.getElementById("expiryDate");
const publisher = document.getElementById("publisher");
const lettersList = document.getElementById("lettersList");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const filterCategory = document.getElementById("filterCategory");
const filterPublisher = document.getElementById("filterPublisher");
const confirmModal = document.getElementById("confirmModal");
const confirmModalContent = document.getElementById("confirmModalContent");
const cancelConfirm = document.getElementById("cancelConfirm");
const confirmSubmit = document.getElementById("confirmSubmit");
const detailModal = document.getElementById("detailModal");
const detailModalContent = document.getElementById("detailModalContent");
const closeDetail = document.getElementById("closeDetail");
const closeDetailBtn = document.getElementById("closeDetailBtn");
const detailTitle = document.getElementById("detailTitleContent");
const detailDescription = document.getElementById("detailDescription");
const detailCategory = document.getElementById("detailCategory");
const detailPublisher = document.getElementById("detailPublisher");
const detailPublishDate = document.getElementById("detailPublishDate");
const detailExpiryDate = document.getElementById("detailExpiryDate");
const detailDocument = document.getElementById("detailDocument");
const deleteModal = document.getElementById("deleteModal");
const deleteModalContent = document.getElementById("deleteModalContent");
const deleteLetterTitle = document.getElementById("deleteLetterTitle");
const cancelDelete = document.getElementById("cancelDelete");
const confirmDelete = document.getElementById("confirmDelete");

// Initialize
initForm();
updateLettersList();

// Event Listeners
letterForm.addEventListener("submit", handleFormSubmit);
dropArea.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", handleFileSelect);
removeFile.addEventListener("click", removeSelectedFile);
searchInput.addEventListener("input", updateLettersList);
filterCategory.addEventListener("change", updateLettersList);
filterPublisher.addEventListener("change", updateLettersList);
cancelConfirm.addEventListener("click", closeConfirmModal);
confirmSubmit.addEventListener("click", submitLetter);
closeDetail.addEventListener("click", closeDetailModal);
closeDetailBtn.addEventListener("click", closeDetailModal);
cancelDelete.addEventListener("click", closeDeleteModal);
confirmDelete.addEventListener("click", handleDeleteConfirm);

// Drag and drop functionality
["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

["dragenter", "dragover"].forEach((eventName) => {
  dropArea.addEventListener(eventName, highlight, false);
});

["dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, unhighlight, false);
});

function highlight() {
  dropArea.classList.add("border-blue-500", "bg-blue-50");
}

function unhighlight() {
  dropArea.classList.remove("border-blue-500", "bg-blue-50");
}

dropArea.addEventListener("drop", handleDrop, false);

function handleDrop(e) {
  const dt = e.dataTransfer;
  const file = dt.files[0];
  handleFile(file);
}

// Functions
function initForm() {
  // Set today's date as publish date
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];
  publishDate.value = formattedDate;

  // Set minimum date for expiry date
  expiryDate.min = formattedDate;

  // Set current user as publisher
  publisher.value = currentUser.name;
}

function handleFileSelect(e) {
  const file = e.target.files[0];
  handleFile(file);
}

function handleFile(file) {
  if (!file) return;

  const validTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  if (!validTypes.includes(file.type)) {
    alert("Format file tidak didukung. Silakan pilih file PDF atau DOC.");
    fileInput.value = "";
    return;
  }

  fileName.textContent = file.name;
  filePreview.classList.remove("hidden");

  // Set icon based on file type
  const fileIcon = filePreview.querySelector("i");
  if (file.type === "application/pdf") {
    fileIcon.className = "fas fa-file-pdf mr-2 text-red-500";
  } else {
    fileIcon.className = "fas fa-file-word mr-2 text-blue-500";
  }
}

function removeSelectedFile() {
  fileInput.value = "";
  filePreview.classList.add("hidden");
}

function handleFormSubmit(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;
  const file = fileInput.files[0];
  const expiryDateValue = document.getElementById("expiryDate").value;

  if (!title || !description || !category || !file || !expiryDateValue) {
    alert("Silakan lengkapi semua field yang diperlukan.");
    return;
  }

  // Show confirmation modal
  openConfirmModal();
}

function openConfirmModal() {
  confirmModal.classList.remove("invisible", "opacity-0");
  setTimeout(() => {
    confirmModalContent.classList.remove("scale-95", "opacity-0");
  }, 10);
}

function closeConfirmModal() {
  confirmModalContent.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    confirmModal.classList.add("invisible", "opacity-0");
  }, 300);
}

function submitLetter() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;
  const file = fileInput.files[0];
  const publishDateValue = document.getElementById("publishDate").value;
  const expiryDateValue = document.getElementById("expiryDate").value;
  const publisherValue = document.getElementById("publisher").value;

  // Create new letter object
  const newLetter = {
    id: letters.length + 1,
    title: title,
    description: description,
    category: category,
    document: file.name,
    publishDate: publishDateValue,
    expiryDate: expiryDateValue,
    publisher: publisherValue,
  };

  // Add to letters array
  letters.unshift(newLetter);

  // Update display
  updateLettersList();

  // Close modal
  closeConfirmModal();

  // Reset form
  letterForm.reset();
  initForm();
  filePreview.classList.add("hidden");

  // Show success message
  showToast("Surat resmi berhasil diterbitkan!");
}

function updateLettersList() {
  // Apply filters
  let filteredLetters = [...letters];

  // Search filter
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm) {
    filteredLetters = filteredLetters.filter(
      (letter) =>
        letter.title.toLowerCase().includes(searchTerm) ||
        letter.category.toLowerCase().includes(searchTerm) ||
        letter.publisher.toLowerCase().includes(searchTerm)
    );
  }

  // Category filter
  if (filterCategory.value) {
    filteredLetters = filteredLetters.filter((letter) =>
      letter.category.includes(filterCategory.value)
    );
  }

  // Publisher filter
  if (filterPublisher.value) {
    filteredLetters = filteredLetters.filter(
      (letter) => letter.publisher === filterPublisher.value
    );
  }

  // Clear container
  lettersList.innerHTML = "";

  // Show empty state if no letters
  if (filteredLetters.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");

    // Generate letter rows
    filteredLetters.forEach((letter) => {
      const row = createLetterRow(letter);
      lettersList.appendChild(row);
    });
  }
}

function createLetterRow(letter) {
  const row = document.createElement("tr");

  // Format dates
  const publishDate = new Date(letter.publishDate);
  const formattedPublishDate = publishDate.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const expiryDate = new Date(letter.expiryDate);
  const formattedExpiryDate = expiryDate.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // Check if current user can delete this letter
  const canDelete =
    currentUser.name === letter.publisher ||
    currentUser.role === "Administrator";

  // Create category badge
  let badgeColor = "bg-gray-100 text-gray-800";
  if (letter.category.includes("SMP")) {
    badgeColor = "bg-green-100 text-green-800";
  } else if (letter.category.includes("SMA")) {
    badgeColor = "bg-blue-100 text-blue-800";
  } else if (letter.category.includes("SMK")) {
    badgeColor = "bg-purple-100 text-purple-800";
  } else if (letter.category.includes("Guru")) {
    badgeColor = "bg-yellow-100 text-yellow-800";
  } else if (letter.category === "Semua") {
    badgeColor = "bg-red-100 text-red-800";
  }

  row.innerHTML = `
           <td class="py-3 px-4">
               <div class="font-medium text-gray-900">${letter.title}</div>
           </td>
           <td class="py-3 px-4">
               <span class="category-badge ${badgeColor}">${
    letter.category
  }</span>
           </td>
           <td class="py-3 px-4 text-gray-500">${formattedPublishDate}</td>
           <td class="py-3 px-4 text-gray-500">${formattedExpiryDate}</td>
           <td class="py-3 px-4 text-gray-500">${letter.publisher}</td>
           <td class="py-3 px-4">
               <div class="flex space-x-2">
                   <button class="view-btn text-blue-600 hover:text-blue-800" data-id="${
                     letter.id
                   }">
                       <i class="fas fa-eye"></i>
                   </button>
                   ${
                     canDelete
                       ? `
                   <button class="delete-btn text-red-600 hover:text-red-800" data-id="${letter.id}">
                       <i class="fas fa-trash-alt"></i>
                   </button>
                   `
                       : ""
                   }
               </div>
           </td>
       `;

  // Add event listeners
  setTimeout(() => {
    const viewBtn = row.querySelector(".view-btn");
    const deleteBtn = row.querySelector(".delete-btn");

    viewBtn.addEventListener("click", () => {
      openDetailModal(letter);
    });

    if (deleteBtn) {
      deleteBtn.addEventListener("click", () => {
        openDeleteModal(letter);
      });
    }
  }, 0);

  return row;
}

function openDetailModal(letter) {
  // Format dates
  const publishDate = new Date(letter.publishDate);
  const formattedPublishDate = publishDate.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const expiryDate = new Date(letter.expiryDate);
  const formattedExpiryDate = expiryDate.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Populate modal content
  detailTitle.textContent = letter.title;
  detailDescription.textContent = letter.description;
  detailCategory.textContent = letter.category;
  detailPublisher.textContent = letter.publisher;
  detailPublishDate.textContent = formattedPublishDate;
  detailExpiryDate.textContent = formattedExpiryDate;

  // Set document link
  const documentLink = detailDocument.querySelector("span");
  documentLink.textContent = letter.document;
  documentLink.addEventListener("click", () => {
    // In a real app, this would open the document
    showToast(`Membuka dokumen: ${letter.document}`);
  });

  // Show modal
  detailModal.classList.remove("invisible", "opacity-0");
  setTimeout(() => {
    detailModalContent.classList.remove("scale-95", "opacity-0");
  }, 10);
}

function closeDetailModal() {
  detailModalContent.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    detailModal.classList.add("invisible", "opacity-0");
  }, 300);
}

function openDeleteModal(letter) {
  deleteLetterTitle.textContent = letter.title;
  confirmDelete.setAttribute("data-id", letter.id);

  deleteModal.classList.remove("invisible", "opacity-0");
  setTimeout(() => {
    deleteModalContent.classList.remove("scale-95", "opacity-0");
  }, 10);
}

function closeDeleteModal() {
  deleteModalContent.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    deleteModal.classList.add("invisible", "opacity-0");
  }, 300);
}

function handleDeleteConfirm() {
  const letterId = parseInt(confirmDelete.getAttribute("data-id"));

  // Find letter in array
  const letterIndex = letters.findIndex((letter) => letter.id === letterId);
  if (letterIndex !== -1) {
    // Remove letter
    letters.splice(letterIndex, 1);

    // Update display
    updateLettersList();

    // Close modal
    closeDeleteModal();

    // Show success message
    showToast("Surat resmi berhasil dihapus!");
  }
}

function showToast(message) {
  // Create toast element
  const toast = document.createElement("div");
  toast.className =
    "fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg transform transition-all duration-300 translate-y-4 opacity-0";
  toast.textContent = message;
  document.body.appendChild(toast);

  // Show toast
  setTimeout(() => {
    toast.classList.remove("translate-y-4", "opacity-0");
  }, 10);

  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.classList.add("translate-y-4", "opacity-0");
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
}

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'941836fad10f401a',t:'MTc0NzUzODM4NS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
