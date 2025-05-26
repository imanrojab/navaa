// Sample data
let documents = [
  {
    id: 1,
    name: "Laporan Keuangan Rahasia Q1 2023",
    type: "pdf",
    uploader: "Admin",
    uploadDate: "2023-04-15",
    tags: ["keuangan", "rahasia", "internal"],
    size: 1.2, // MB
    allowedUsers: ["Admin", "User 1"],
  },
  {
    id: 2,
    name: "Strategi Pemasaran 2023",
    type: "pptx",
    uploader: "User 1",
    uploadDate: "2023-03-22",
    tags: ["strategi", "pemasaran", "rahasia"],
    size: 5.7, // MB
    allowedUsers: ["Admin", "User 1", "User 2"],
  },
  {
    id: 3,
    name: "Data Gaji Karyawan 2023",
    type: "xlsx",
    uploader: "Admin",
    uploadDate: "2023-02-10",
    tags: ["gaji", "karyawan", "rahasia"],
    size: 0.8, // MB
    allowedUsers: ["Admin"],
  },
  {
    id: 4,
    name: "Rencana Akuisisi Perusahaan",
    type: "docx",
    uploader: "User 2",
    uploadDate: "2023-05-05",
    tags: ["akuisisi", "rahasia", "manajemen"],
    size: 2.3, // MB
    allowedUsers: ["Admin", "User 2"],
  },
  {
    id: 5,
    name: "Dokumen Legal Kontrak",
    type: "pdf",
    uploader: "User 1",
    uploadDate: "2023-05-12",
    tags: ["legal", "kontrak", "rahasia"],
    size: 3.5, // MB
    allowedUsers: ["Admin", "User 1"],
  },
  {
    id: 6,
    name: "Rencana Restrukturisasi",
    type: "pdf",
    uploader: "Admin",
    uploadDate: "2023-01-20",
    tags: ["restrukturisasi", "manajemen", "rahasia"],
    size: 4.2, // MB
    allowedUsers: ["Admin"],
  },
  {
    id: 7,
    name: "Proyeksi Keuangan 5 Tahun",
    type: "xlsx",
    uploader: "User 2",
    uploadDate: "2023-05-01",
    tags: ["keuangan", "proyeksi", "rahasia"],
    size: 0.5, // MB
    allowedUsers: ["Admin", "User 2"],
  },
  {
    id: 8,
    name: "Desain Produk Baru",
    type: "png",
    uploader: "User 1",
    uploadDate: "2023-04-28",
    tags: ["desain", "produk", "rahasia"],
    size: 1.8, // MB
    allowedUsers: ["Admin", "User 1", "User 2"],
  },
];

// Sample users
const users = [
  {
    id: 1,
    name: "Admin",
    email: "admin@example.com",
    role: "Administrator",
  },
  { id: 2, name: "User 1", email: "user1@example.com", role: "Manager" },
  { id: 3, name: "User 2", email: "user2@example.com", role: "Staff" },
  { id: 4, name: "User 3", email: "user3@example.com", role: "Staff" },
  { id: 5, name: "User 4", email: "user4@example.com", role: "Manager" },
  { id: 6, name: "User 5", email: "user5@example.com", role: "Staff" },
];

// Current user (for demo purposes)
const currentUser = "Admin";

// DOM Elements
const addDocBtn = document.getElementById("addDocBtn");
const addDocModal = document.getElementById("addDocModal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");
const cancelUpload = document.getElementById("cancelUpload");
const uploadForm = document.getElementById("uploadForm");
const dropArea = document.getElementById("dropArea");
const fileInput = document.getElementById("fileInput");
const filePreview = document.getElementById("filePreview");
const fileName = document.getElementById("fileName");
const removeFile = document.getElementById("removeFile");
const documentContainer = document.getElementById("documentContainer");
const totalDocs = document.getElementById("totalDocs");
const searchInput = document.getElementById("searchInput");
const filterName = document.getElementById("filterName");
const filterUploader = document.getElementById("filterUploader");
const filterType = document.getElementById("filterType");
const filterTag = document.getElementById("filterTag");
const storageText = document.getElementById("storageText");
const editDocModal = document.getElementById("editDocModal");
const editModalContent = document.getElementById("editModalContent");
const closeEditModal = document.getElementById("closeEditModal");
const cancelEdit = document.getElementById("cancelEdit");
const editForm = document.getElementById("editForm");
const editDocId = document.getElementById("editDocId");
const editDocName = document.getElementById("editDocName");
const editDocTags = document.getElementById("editDocTags");
const deleteModal = document.getElementById("deleteModal");
const deleteModalContent = document.getElementById("deleteModalContent");
const deleteDocName = document.getElementById("deleteDocName");
const cancelDelete = document.getElementById("cancelDelete");
const confirmDelete = document.getElementById("confirmDelete");
const userSearch = document.getElementById("userSearch");
const userDropdown = document.getElementById("userDropdown");
const selectedUsers = document.getElementById("selectedUsers");
const editUserSearch = document.getElementById("editUserSearch");
const editUserDropdown = document.getElementById("editUserDropdown");
const editSelectedUsers = document.getElementById("editSelectedUsers");

// Initialize
updateDocumentDisplay();
updateStorageInfo();
populateUserDropdown();

// Event Listeners
addDocBtn.addEventListener("click", openAddModal);
closeModal.addEventListener("click", closeAddModal);
cancelUpload.addEventListener("click", closeAddModal);
dropArea.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", handleFileSelect);
removeFile.addEventListener("click", removeSelectedFile);
uploadForm.addEventListener("submit", handleUpload);
searchInput.addEventListener("input", updateDocumentDisplay);
filterName.addEventListener("change", updateDocumentDisplay);
filterUploader.addEventListener("change", updateDocumentDisplay);
filterType.addEventListener("change", updateDocumentDisplay);
filterTag.addEventListener("change", updateDocumentDisplay);
closeEditModal.addEventListener("click", closeEditDocModal);
cancelEdit.addEventListener("click", closeEditDocModal);
editForm.addEventListener("submit", handleEditSubmit);
cancelDelete.addEventListener("click", closeDeleteModal);
confirmDelete.addEventListener("click", handleDeleteConfirm);
userSearch.addEventListener("input", handleUserSearch);
editUserSearch.addEventListener("input", handleEditUserSearch);

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
  dropArea.classList.add("border-purple-500", "bg-purple-50");
}

function unhighlight() {
  dropArea.classList.remove("border-purple-500", "bg-purple-50");
}

dropArea.addEventListener("drop", handleDrop, false);

function handleDrop(e) {
  const dt = e.dataTransfer;
  const file = dt.files[0];
  handleFile(file);
}

// Functions
function openAddModal() {
  addDocModal.classList.remove("invisible", "opacity-0");
  setTimeout(() => {
    modalContent.classList.remove("scale-95", "opacity-0");
  }, 10);
}

function closeAddModal() {
  modalContent.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    addDocModal.classList.add("invisible", "opacity-0");
    uploadForm.reset();
    filePreview.classList.add("hidden");
    selectedUsers.innerHTML = "";
  }, 300);
}

function handleFileSelect(e) {
  const file = e.target.files[0];
  handleFile(file);
}

function handleFile(file) {
  if (!file) return;

  const validTypes = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "image/png",
    "image/jpeg",
  ];

  if (!validTypes.includes(file.type)) {
    alert(
      "Format file tidak didukung. Silakan pilih file PDF, DOCX, Excel, PowerPoint, PNG, atau JPG."
    );
    fileInput.value = "";
    return;
  }

  fileName.textContent = file.name;
  filePreview.classList.remove("hidden");
}

function removeSelectedFile() {
  fileInput.value = "";
  filePreview.classList.add("hidden");
}

function populateUserDropdown() {
  userDropdown.innerHTML = "";
  editUserDropdown.innerHTML = "";

  users.forEach((user) => {
    const userItem = document.createElement("div");
    userItem.className = "px-3 py-2 hover:bg-gray-100 cursor-pointer";
    userItem.innerHTML = `
                  <div class="flex items-center">
                      <div class="user-avatar">${user.name.charAt(0)}</div>
                      <div class="ml-2">
                          <div class="text-sm font-medium">${user.name}</div>
                          <div class="text-xs text-gray-500">${user.role}</div>
                      </div>
                  </div>
              `;
    userItem.addEventListener("click", () => {
      addSelectedUser(user);
      userSearch.value = "";
      userDropdown.classList.add("hidden");
    });
    userDropdown.appendChild(userItem.cloneNode(true));

    const editUserItem = userItem.cloneNode(true);
    editUserItem.addEventListener("click", () => {
      addEditSelectedUser(user);
      editUserSearch.value = "";
      editUserDropdown.classList.add("hidden");
    });
    editUserDropdown.appendChild(editUserItem);
  });
}

function handleUserSearch(e) {
  const searchTerm = e.target.value.toLowerCase();

  if (searchTerm === "") {
    userDropdown.classList.add("hidden");
    return;
  }

  userDropdown.classList.remove("hidden");

  const userItems = userDropdown.querySelectorAll("div");
  let hasResults = false;

  userItems.forEach((item) => {
    const userName = item
      .querySelector(".font-medium")
      ?.textContent.toLowerCase();
    const userRole = item
      .querySelector(".text-gray-500")
      ?.textContent.toLowerCase();

    if (
      userName &&
      (userName.includes(searchTerm) ||
        (userRole && userRole.includes(searchTerm)))
    ) {
      item.style.display = "block";
      hasResults = true;
    } else {
      item.style.display = "none";
    }
  });

  if (!hasResults) {
    userDropdown.classList.add("hidden");
  }
}

function handleEditUserSearch(e) {
  const searchTerm = e.target.value.toLowerCase();

  if (searchTerm === "") {
    editUserDropdown.classList.add("hidden");
    return;
  }

  editUserDropdown.classList.remove("hidden");

  const userItems = editUserDropdown.querySelectorAll("div");
  let hasResults = false;

  userItems.forEach((item) => {
    const userName = item
      .querySelector(".font-medium")
      ?.textContent.toLowerCase();
    const userRole = item
      .querySelector(".text-gray-500")
      ?.textContent.toLowerCase();

    if (
      userName &&
      (userName.includes(searchTerm) ||
        (userRole && userRole.includes(searchTerm)))
    ) {
      item.style.display = "block";
      hasResults = true;
    } else {
      item.style.display = "none";
    }
  });

  if (!hasResults) {
    editUserDropdown.classList.add("hidden");
  }
}

function addSelectedUser(user) {
  // Check if user is already selected
  const existingUser = selectedUsers.querySelector(
    `[data-user-id="${user.id}"]`
  );
  if (existingUser) return;

  const userChip = document.createElement("div");
  userChip.className = "user-chip";
  userChip.setAttribute("data-user-id", user.id);
  userChip.innerHTML = `
              <div class="user-avatar">${user.name.charAt(0)}</div>
              <span class="text-xs">${user.name}</span>
              <button type="button" class="ml-1 text-gray-500 hover:text-gray-700 remove-user">
                  <i class="fas fa-times"></i>
              </button>
          `;

  userChip.querySelector(".remove-user").addEventListener("click", () => {
    selectedUsers.removeChild(userChip);
  });

  selectedUsers.appendChild(userChip);
}

function addEditSelectedUser(user) {
  // Check if user is already selected
  const existingUser = editSelectedUsers.querySelector(
    `[data-user-id="${user.id}"]`
  );
  if (existingUser) return;

  const userChip = document.createElement("div");
  userChip.className = "user-chip";
  userChip.setAttribute("data-user-id", user.id);
  userChip.innerHTML = `
              <div class="user-avatar">${user.name.charAt(0)}</div>
              <span class="text-xs">${user.name}</span>
              <button type="button" class="ml-1 text-gray-500 hover:text-gray-700 remove-user">
                  <i class="fas fa-times"></i>
              </button>
          `;

  userChip.querySelector(".remove-user").addEventListener("click", () => {
    editSelectedUsers.removeChild(userChip);
  });

  editSelectedUsers.appendChild(userChip);
}

function getSelectedUserNames() {
  const userChips = selectedUsers.querySelectorAll(".user-chip");
  const userNames = [];

  userChips.forEach((chip) => {
    const userName = chip.querySelector("span").textContent;
    userNames.push(userName);
  });

  return userNames;
}

function getEditSelectedUserNames() {
  const userChips = editSelectedUsers.querySelectorAll(".user-chip");
  const userNames = [];

  userChips.forEach((chip) => {
    const userName = chip.querySelector("span").textContent;
    userNames.push(userName);
  });

  return userNames;
}

function handleUpload(e) {
  e.preventDefault();

  const docNameValue = document.getElementById("docName").value;
  const docTagsValue = document.getElementById("docTags").value;
  const file = fileInput.files[0];
  const allowedUsers = getSelectedUserNames();

  if (!docNameValue || !file) {
    alert("Silakan isi nama dokumen dan pilih file.");
    return;
  }

  if (allowedUsers.length === 0) {
    alert(
      "Silakan pilih minimal satu pengguna yang diizinkan untuk mengakses dokumen ini."
    );
    return;
  }

  // Get file extension
  const fileExtension = file.name.split(".").pop().toLowerCase();
  let fileType;

  switch (fileExtension) {
    case "pdf":
      fileType = "pdf";
      break;
    case "docx":
      fileType = "docx";
      break;
    case "xlsx":
      fileType = "xlsx";
      break;
    case "pptx":
      fileType = "pptx";
      break;
    case "png":
      fileType = "png";
      break;
    case "jpg":
    case "jpeg":
      fileType = "jpg";
      break;
    default:
      fileType = "unknown";
  }

  // Create new document object
  const newDoc = {
    id: documents.length + 1,
    name: docNameValue,
    type: fileType,
    uploader: currentUser,
    uploadDate: new Date().toISOString().split("T")[0],
    tags: docTagsValue
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== ""),
    size: (file.size / (1024 * 1024)).toFixed(1), // Convert to MB
    allowedUsers: allowedUsers,
  };

  // Add to documents array
  documents.unshift(newDoc);

  // Update display
  updateDocumentDisplay();
  updateStorageInfo();

  // Close modal
  closeAddModal();

  // Show success message
  showToast("Dokumen terbatas berhasil diunggah!");
}

function updateDocumentDisplay() {
  // Update total documents count
  totalDocs.textContent = documents.length;

  // Apply filters
  let filteredDocs = [...documents];

  // Search filter
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm) {
    filteredDocs = filteredDocs.filter(
      (doc) =>
        doc.name.toLowerCase().includes(searchTerm) ||
        doc.uploader.toLowerCase().includes(searchTerm) ||
        doc.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
    );
  }

  // Name filter
  if (filterName.value) {
    filteredDocs.sort((a, b) => {
      if (filterName.value === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }

  // Uploader filter
  if (filterUploader.value) {
    filteredDocs = filteredDocs.filter(
      (doc) => doc.uploader === filterUploader.value
    );
  }

  // Type filter
  if (filterType.value) {
    filteredDocs = filteredDocs.filter((doc) => doc.type === filterType.value);
  }

  // Tag filter
  if (filterTag.value) {
    filteredDocs = filteredDocs.filter((doc) =>
      doc.tags.includes(filterTag.value)
    );
  }

  // Filter by access permission
  filteredDocs = filteredDocs.filter(
    (doc) =>
      doc.allowedUsers.includes(currentUser) || doc.uploader === currentUser
  );

  // Clear container
  documentContainer.innerHTML = "";

  // Generate document cards
  filteredDocs.forEach((doc) => {
    const card = createDocumentCard(doc);
    documentContainer.appendChild(card);
  });

  // Show empty state if no documents
  if (filteredDocs.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className =
      "col-span-full flex flex-col items-center justify-center py-12 text-center";
    emptyState.innerHTML = `
                  <div class="bg-gray-100 rounded-full p-4 mb-4">
                      <i class="fas fa-file-alt text-3xl text-gray-400"></i>
                  </div>
                  <h3 class="text-lg font-medium text-gray-700 mb-1">Tidak ada dokumen</h3>
                  <p class="text-sm text-gray-500">Tidak ada dokumen terbatas yang sesuai dengan filter yang dipilih</p>
              `;
    documentContainer.appendChild(emptyState);
  }
}

function createDocumentCard(doc) {
  const card = document.createElement("div");
  card.className = "file-card bg-white rounded-xl shadow-md overflow-hidden";

  // File icon based on type
  let iconClass, bgColor;
  switch (doc.type) {
    case "pdf":
      iconClass = "fa-file-pdf";
      bgColor = "bg-red-100 text-red-600";
      break;
    case "docx":
      iconClass = "fa-file-word";
      bgColor = "bg-blue-100 text-blue-600";
      break;
    case "xlsx":
      iconClass = "fa-file-excel";
      bgColor = "bg-green-100 text-green-600";
      break;
    case "pptx":
      iconClass = "fa-file-powerpoint";
      bgColor = "bg-orange-100 text-orange-600";
      break;
    case "png":
    case "jpg":
      iconClass = "fa-file-image";
      bgColor = "bg-purple-100 text-purple-600";
      break;
    default:
      iconClass = "fa-file";
      bgColor = "bg-gray-100 text-gray-600";
  }

  // Format date
  const uploadDate = new Date(doc.uploadDate);
  const formattedDate = uploadDate.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // Create tags HTML
  const tagsHTML = doc.tags
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");

  // Create allowed users preview
  const allowedUsersCount = doc.allowedUsers.length;
  let allowedUsersHTML = "";

  if (allowedUsersCount > 0) {
    allowedUsersHTML = `
                  <div class="mt-2 flex items-center">
                      <span class="text-xs text-gray-500 mr-1">Akses:</span>
                      <div class="flex -space-x-2">
              `;

    // Show up to 3 user avatars
    const maxAvatars = Math.min(3, allowedUsersCount);
    for (let i = 0; i < maxAvatars; i++) {
      allowedUsersHTML += `
                      <div class="user-avatar" title="${
                        doc.allowedUsers[i]
                      }">${doc.allowedUsers[i].charAt(0)}</div>
                  `;
    }

    // Show +X more if there are more than 3 users
    if (allowedUsersCount > 3) {
      allowedUsersHTML += `
                      <div class="user-avatar bg-gray-200 text-gray-600" title="${
                        allowedUsersCount - 3
                      } pengguna lainnya">+${allowedUsersCount - 3}</div>
                  `;
    }

    allowedUsersHTML += `
                      </div>
                  </div>
              `;
  }

  card.innerHTML = `
              <div class="p-4">
                  <div class="flex items-start justify-between mb-3">
                      <div class="relative">
                          <div class="file-icon ${bgColor}">
                              <i class="fas ${iconClass}"></i>
                          </div>
                          <div class="restricted-badge" title="Dokumen Terbatas">
                              <i class="fas fa-lock text-xs"></i>
                          </div>
                      </div>
                      <div class="relative" data-doc-id="${doc.id}">
                          <button class="action-menu-btn p-1 hover:bg-gray-100 rounded-full">
                              <i class="fas fa-ellipsis-v text-gray-500"></i>
                          </button>
                          <div class="dropdown absolute right-0 top-full mt-1 bg-white shadow-lg rounded-lg py-1 w-36 z-10 invisible opacity-0 transform -translate-y-2">
                              ${
                                doc.allowedUsers.includes(currentUser) ||
                                doc.uploader === currentUser
                                  ? `
                              <button class="download-btn w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
                                  <i class="fas fa-download mr-2 text-gray-600"></i> Download
                              </button>
                              `
                                  : ""
                              }
                              ${
                                doc.uploader === currentUser ||
                                currentUser === "Admin"
                                  ? `
                              <button class="edit-btn w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
                                  <i class="fas fa-edit mr-2 text-purple-600"></i> Ubah
                              </button>
                              <button class="delete-btn w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
                                  <i class="fas fa-trash-alt mr-2 text-red-600"></i> Hapus
                              </button>
                              `
                                  : ""
                              }
                          </div>
                      </div>
                  </div>
                  <h3 class="font-medium text-gray-800 mb-1 truncate" title="${
                    doc.name
                  }">${doc.name}</h3>
                  <div class="flex items-center text-xs text-gray-500 mb-2">
                      <span class="mr-2">${doc.uploader}</span>
                      <span>•</span>
                      <span class="ml-2">${formattedDate}</span>
                  </div>
                  <div class="text-xs text-gray-600 mb-1">
                      <i class="fas fa-hdd mr-1"></i> ${doc.size} MB
                  </div>
                  <div class="mt-2 flex flex-wrap">
                      ${tagsHTML}
                  </div>
                  ${allowedUsersHTML}
              </div>
          `;

  // Add event listeners
  setTimeout(() => {
    const actionBtn = card.querySelector(".action-menu-btn");
    const dropdown = card.querySelector(".dropdown");
    const downloadBtn = card.querySelector(".download-btn");
    const editBtn = card.querySelector(".edit-btn");
    const deleteBtn = card.querySelector(".delete-btn");

    // Toggle dropdown
    actionBtn.addEventListener("click", (e) => {
      e.stopPropagation();

      // Close all other dropdowns
      document.querySelectorAll(".dropdown:not(.invisible)").forEach((d) => {
        if (d !== dropdown) {
          d.classList.add("invisible", "opacity-0", "-translate-y-2");
        }
      });

      dropdown.classList.toggle("invisible");
      dropdown.classList.toggle("opacity-0");
      dropdown.classList.toggle("-translate-y-2");
    });

    // Download action
    if (downloadBtn) {
      downloadBtn.addEventListener("click", () => {
        downloadDocument(doc);
        dropdown.classList.add("invisible", "opacity-0", "-translate-y-2");
      });
    }

    // Edit action
    if (editBtn) {
      editBtn.addEventListener("click", () => {
        openEditModal(doc);
        dropdown.classList.add("invisible", "opacity-0", "-translate-y-2");
      });
    }

    // Delete action
    if (deleteBtn) {
      deleteBtn.addEventListener("click", () => {
        openDeleteModal(doc);
        dropdown.classList.add("invisible", "opacity-0", "-translate-y-2");
      });
    }
  }, 0);

  return card;
}

// Close dropdowns when clicking outside
document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    dropdown.classList.add("invisible", "opacity-0", "-translate-y-2");
  });

  userDropdown.classList.add("hidden");
  editUserDropdown.classList.add("hidden");
});

function downloadDocument(doc) {
  // In a real app, this would trigger a file download
  showToast(`Mengunduh ${doc.name}...`);

  // Simulate download delay
  setTimeout(() => {
    showToast(`${doc.name} berhasil diunduh!`);
  }, 1500);
}

function openEditModal(doc) {
  editDocId.value = doc.id;
  editDocName.value = doc.name;
  editDocTags.value = doc.tags.join(", ");

  // Clear and populate selected users
  editSelectedUsers.innerHTML = "";
  doc.allowedUsers.forEach((userName) => {
    const user = users.find((u) => u.name === userName);
    if (user) {
      addEditSelectedUser(user);
    }
  });

  editDocModal.classList.remove("invisible", "opacity-0");
  setTimeout(() => {
    editModalContent.classList.remove("scale-95", "opacity-0");
  }, 10);
}

function closeEditDocModal() {
  editModalContent.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    editDocModal.classList.add("invisible", "opacity-0");
    editForm.reset();
    editSelectedUsers.innerHTML = "";
  }, 300);
}

function handleEditSubmit(e) {
  e.preventDefault();

  const docId = parseInt(editDocId.value);
  const docNameValue = editDocName.value;
  const docTagsValue = editDocTags.value;
  const allowedUsers = getEditSelectedUserNames();

  if (!docNameValue) {
    alert("Silakan isi nama dokumen.");
    return;
  }

  if (allowedUsers.length === 0) {
    alert(
      "Silakan pilih minimal satu pengguna yang diizinkan untuk mengakses dokumen ini."
    );
    return;
  }

  // Find document in array
  const docIndex = documents.findIndex((doc) => doc.id === docId);
  if (docIndex !== -1) {
    // Update document
    documents[docIndex].name = docNameValue;
    documents[docIndex].tags = docTagsValue
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");
    documents[docIndex].allowedUsers = allowedUsers;

    // Update display
    updateDocumentDisplay();

    // Close modal
    closeEditDocModal();

    // Show success message
    showToast("Dokumen terbatas berhasil diperbarui!");
  }
}

function openDeleteModal(doc) {
  deleteDocName.textContent = doc.name;
  confirmDelete.setAttribute("data-doc-id", doc.id);

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
  const docId = parseInt(confirmDelete.getAttribute("data-doc-id"));

  // Find document in array
  const docIndex = documents.findIndex((doc) => doc.id === docId);
  if (docIndex !== -1) {
    // Remove document
    documents.splice(docIndex, 1);

    // Update display
    updateDocumentDisplay();
    updateStorageInfo();

    // Close modal
    closeDeleteModal();

    // Show success message
    showToast("Dokumen terbatas berhasil dihapus!");
  }
}

function updateStorageInfo() {
  // Calculate total storage used
  const totalSizeMB = documents.reduce(
    (total, doc) => total + parseFloat(doc.size),
    0
  );
  const totalSizeGB = (totalSizeMB / 1024).toFixed(1);
  const maxStorage = 10; // GB
  const usagePercentage = (totalSizeGB / maxStorage) * 100;

  // Update storage text
  storageText.textContent = `${totalSizeGB} GB / ${maxStorage} GB`;

  // Update progress bar
  document.querySelector(
    ".storage-progress"
  ).style.width = `${usagePercentage}%`;
}

function showToast(message) {
  // Create toast element
  const toast = document.createElement("div");
  toast.className =
    "fixed bottom-24 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg transform transition-all duration-300 translate-y-4 opacity-0";
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
        "window.__CF$cv$params={r:'94183033c7b14a71',t:'MTc0NzUzODEwNy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
