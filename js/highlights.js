// Sample data
let highlights = [
  {
    id: 1,
    title: "Prestasi Gemilang Siswa dalam Olimpiade Sains Nasional",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    content:
      "<p>Dengan bangga kami mengumumkan bahwa siswa-siswi kami telah meraih prestasi gemilang dalam Olimpiade Sains Nasional yang baru saja diselenggarakan di Jakarta. Tim kami berhasil membawa pulang 3 medali emas, 5 medali perak, dan 4 medali perunggu.</p><p>Prestasi ini merupakan hasil dari kerja keras dan dedikasi para siswa serta bimbingan intensif dari para guru. Kami mengucapkan selamat kepada seluruh peserta dan pembimbing atas pencapaian luar biasa ini.</p><h3>Daftar Peraih Medali:</h3><ul><li>Ahmad Fauzi - Medali Emas (Fisika)</li><li>Siti Nurhaliza - Medali Emas (Matematika)</li><li>Budi Santoso - Medali Emas (Kimia)</li></ul>",
    category: "Publik",
    featured: "Ya",
    publishDate: "2023-06-15",
    publisher: "Kepala Sekolah",
  },
  {
    id: 2,
    title: "Pembangunan Fasilitas Olahraga Baru",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    content:
      "<p>Kami dengan senang hati mengumumkan bahwa pembangunan fasilitas olahraga baru telah dimulai dan diperkirakan akan selesai pada akhir semester ini. Fasilitas baru ini akan mencakup lapangan basket indoor, kolam renang standar olimpiade, dan pusat kebugaran modern.</p><p>Pembangunan ini merupakan bagian dari komitmen kami untuk menyediakan fasilitas terbaik bagi pengembangan bakat dan potensi siswa di bidang olahraga.</p><h3>Fasilitas yang akan dibangun:</h3><ul><li>Lapangan basket indoor</li><li>Kolam renang standar olimpiade</li><li>Pusat kebugaran modern</li></ul>",
    category: "Internal",
    featured: "Ya",
    publishDate: "2023-06-10",
    publisher: "Admin",
  },
  {
    id: 3,
    title: "Kunjungan Menteri Pendidikan",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    content:
      "<p>Pada hari Senin, 5 Juni 2023, sekolah kita mendapat kehormatan dengan kunjungan Menteri Pendidikan dan Kebudayaan. Dalam kunjungannya, beliau mengapresiasi berbagai program inovatif yang telah kita implementasikan dan menyatakan bahwa sekolah kita dapat menjadi model bagi pengembangan pendidikan di Indonesia.</p><p>Menteri juga meresmikan laboratorium teknologi baru yang telah kita bangun dengan dukungan dari berbagai pihak. Laboratorium ini dilengkapi dengan peralatan canggih yang akan mendukung pembelajaran STEM (Science, Technology, Engineering, and Mathematics).</p>",
    category: "Publik",
    featured: "Tidak",
    publishDate: "2023-06-05",
    publisher: "Wakil Kepala Sekolah",
  },
  {
    id: 4,
    title: "Program Beasiswa untuk Siswa Berprestasi",
    image:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    content:
      "<p>Kami dengan bangga mengumumkan program beasiswa baru untuk siswa berprestasi yang akan dimulai pada tahun ajaran mendatang. Program ini akan memberikan kesempatan bagi siswa-siswi yang memiliki prestasi akademik maupun non-akademik untuk mendapatkan dukungan finansial dalam menempuh pendidikan di sekolah kita.</p><p>Beasiswa ini mencakup biaya SPP, biaya kegiatan ekstrakurikuler, dan bantuan pembelian buku pelajaran. Kami berharap program ini dapat memotivasi siswa untuk terus berprestasi dan mengembangkan potensi mereka secara maksimal.</p><h3>Persyaratan Beasiswa:</h3><ul><li>Memiliki nilai akademik minimal 85</li><li>Aktif dalam kegiatan ekstrakurikuler</li><li>Memiliki prestasi di tingkat kota/kabupaten</li></ul>",
    category: "Publik",
    featured: "Ya",
    publishDate: "2023-06-01",
    publisher: "Kepala Sekolah",
  },
  {
    id: 5,
    title: "Workshop Pengembangan Kompetensi Guru",
    image:
      "https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    content:
      "<p>Dalam rangka meningkatkan kualitas pembelajaran, sekolah kita akan menyelenggarakan workshop pengembangan kompetensi guru pada tanggal 20-22 Juni 2023. Workshop ini akan difasilitasi oleh para ahli pendidikan dari berbagai universitas terkemuka di Indonesia.</p><p>Materi yang akan dibahas dalam workshop ini meliputi metode pembelajaran inovatif, integrasi teknologi dalam pembelajaran, dan pengembangan asesmen berbasis kompetensi. Seluruh guru diwajibkan untuk mengikuti workshop ini.</p><h3>Jadwal Workshop:</h3><ul><li>20 Juni: Metode Pembelajaran Inovatif</li><li>21 Juni: Integrasi Teknologi dalam Pembelajaran</li><li>22 Juni: Pengembangan Asesmen Berbasis Kompetensi</li></ul>",
    category: "Internal",
    featured: "Tidak",
    publishDate: "2023-05-25",
    publisher: "Admin",
  },
];

// Current user (for demo purposes)
const currentUser = {
  name: "Admin",
  role: "Administrator",
};

// Initialize Quill editor
const quill = new Quill("#editor", {
  theme: "snow",
  modules: {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  },
  placeholder: "Tulis artikel di sini...",
});

// Initialize edit Quill editor
const editQuill = new Quill("#editEditor", {
  theme: "snow",
  modules: {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  },
});

// DOM Elements
const highlightForm = document.getElementById("highlightForm");
const dropArea = document.getElementById("dropArea");
const imageInput = document.getElementById("image");
const imagePreview = document.getElementById("imagePreview");
const previewImg = document.getElementById("previewImg");
const removeImage = document.getElementById("removeImage");
const publishDate = document.getElementById("publishDate");
const publisher = document.getElementById("publisher");
const highlightsGrid = document.getElementById("highlightsGrid");
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
const detailImage = document.getElementById("detailImage");
const detailFeaturedBadge = document.getElementById("detailFeaturedBadge");
const detailContent = document.getElementById("detailContent");
const detailCategory = document.getElementById("detailCategory");
const detailPublisher = document.getElementById("detailPublisher");
const detailPublishDate = document.getElementById("detailPublishDate");
const editModal = document.getElementById("editModal");
const editModalContent = document.getElementById("editModalContent");
const closeEdit = document.getElementById("closeEdit");
const cancelEdit = document.getElementById("cancelEdit");
const editForm = document.getElementById("editForm");
const editId = document.getElementById("editId");
const editTitle = document.getElementById("editTitle");
const editImagePreview = document.getElementById("editImagePreview");
const changeImage = document.getElementById("changeImage");
const editImageInput = document.getElementById("editImageInput");
const editCategory = document.getElementById("editCategory");
const editContentInput = document.getElementById("editContentInput");
const deleteModal = document.getElementById("deleteModal");
const deleteModalContent = document.getElementById("deleteModalContent");
const deleteHighlightTitle = document.getElementById("deleteHighlightTitle");
const cancelDelete = document.getElementById("cancelDelete");
const confirmDelete = document.getElementById("confirmDelete");

// Initialize
initForm();
updateHighlightsGrid();

// Event Listeners
highlightForm.addEventListener("submit", handleFormSubmit);
dropArea.addEventListener("click", () => imageInput.click());
imageInput.addEventListener("change", handleImageSelect);
removeImage.addEventListener("click", removeSelectedImage);
searchInput.addEventListener("input", updateHighlightsGrid);
filterCategory.addEventListener("change", updateHighlightsGrid);
filterPublisher.addEventListener("change", updateHighlightsGrid);
cancelConfirm.addEventListener("click", closeConfirmModal);
confirmSubmit.addEventListener("click", submitHighlight);
closeDetail.addEventListener("click", closeDetailModal);
closeDetailBtn.addEventListener("click", closeDetailModal);
closeEdit.addEventListener("click", closeEditModal);
cancelEdit.addEventListener("click", closeEditModal);
editForm.addEventListener("submit", handleEditSubmit);
changeImage.addEventListener("click", () => editImageInput.click());
editImageInput.addEventListener("change", handleEditImageSelect);
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
  dropArea.classList.add("border-indigo-500", "bg-indigo-50");
}

function unhighlight() {
  dropArea.classList.remove("border-indigo-500", "bg-indigo-50");
}

dropArea.addEventListener("drop", handleDrop, false);

function handleDrop(e) {
  const dt = e.dataTransfer;
  const file = dt.files[0];
  handleImage(file);
}

// Functions
function initForm() {
  // Set today's date as publish date
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];
  publishDate.value = formattedDate;

  // Set current user as publisher
  publisher.value = currentUser.name;
}

function handleImageSelect(e) {
  const file = e.target.files[0];
  handleImage(file);
}

function handleImage(file) {
  if (!file) return;

  const validTypes = ["image/jpeg", "image/png", "image/gif"];

  if (!validTypes.includes(file.type)) {
    alert(
      "Format file tidak didukung. Silakan pilih file gambar (JPG, PNG, GIF)."
    );
    imageInput.value = "";
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    previewImg.src = e.target.result;
    imagePreview.classList.remove("hidden");
    dropArea.classList.add("hidden");
  };
  reader.readAsDataURL(file);
}

function removeSelectedImage() {
  imageInput.value = "";
  imagePreview.classList.add("hidden");
  dropArea.classList.remove("hidden");
}

function handleFormSubmit(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const file = imageInput.files[0];
  const content = quill.root.innerHTML;
  const category = document.getElementById("category").value;

  if (!title || !file || quill.getText().trim().length === 0 || !category) {
    alert("Silakan lengkapi semua field yang diperlukan.");
    return;
  }

  // Set content to hidden input
  document.getElementById("content").value = content;

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

function submitHighlight() {
  const title = document.getElementById("title").value;
  const file = imageInput.files[0];
  const content = document.getElementById("content").value;
  const category = document.getElementById("category").value;
  const featured = document.querySelector(
    'input[name="featured"]:checked'
  ).value;
  const publishDateValue = document.getElementById("publishDate").value;
  const publisherValue = document.getElementById("publisher").value;

  // Create new highlight object
  const newHighlight = {
    id: highlights.length + 1,
    title: title,
    // In a real app, we would upload the image to a server and get a URL
    // For demo purposes, we'll use FileReader to get a data URL
    image: previewImg.src,
    content: content,
    category: category,
    featured: featured,
    publishDate: publishDateValue,
    publisher: publisherValue,
  };

  // Add to highlights array
  highlights.unshift(newHighlight);

  // Update display
  updateHighlightsGrid();

  // Close modal
  closeConfirmModal();

  // Reset form
  highlightForm.reset();
  quill.root.innerHTML = "";
  initForm();
  imagePreview.classList.add("hidden");
  dropArea.classList.remove("hidden");

  // Show success message
  showToast("Artikel sorotan berhasil diterbitkan!");
}

function updateHighlightsGrid() {
  // Apply filters
  let filteredHighlights = [...highlights];

  // Search filter
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm) {
    filteredHighlights = filteredHighlights.filter(
      (highlight) =>
        highlight.title.toLowerCase().includes(searchTerm) ||
        highlight.category.toLowerCase().includes(searchTerm) ||
        highlight.publisher.toLowerCase().includes(searchTerm)
    );
  }

  // Category filter
  if (filterCategory.value) {
    filteredHighlights = filteredHighlights.filter(
      (highlight) => highlight.category === filterCategory.value
    );
  }

  // Publisher filter
  if (filterPublisher.value) {
    filteredHighlights = filteredHighlights.filter(
      (highlight) => highlight.publisher === filterPublisher.value
    );
  }

  // Clear container
  highlightsGrid.innerHTML = "";

  // Show empty state if no highlights
  if (filteredHighlights.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");

    // Generate highlight cards
    filteredHighlights.forEach((highlight) => {
      const card = createHighlightCard(highlight);
      highlightsGrid.appendChild(card);
    });
  }
}

function createHighlightCard(highlight) {
  const card = document.createElement("div");
  card.className =
    "highlight-card bg-white rounded-lg overflow-hidden shadow-md relative";

  // Format date
  const publishDate = new Date(highlight.publishDate);
  const formattedDate = publishDate.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // Check if current user can edit/delete this highlight
  const canModify =
    currentUser.name === highlight.publisher ||
    currentUser.role === "Administrator";

  // Create category badge
  let badgeColor =
    highlight.category === "Publik"
      ? "bg-green-100 text-green-800"
      : "bg-blue-100 text-blue-800";

  // Create HTML content
  card.innerHTML = `
             <img src="${highlight.image}" alt="${
    highlight.title
  }" class="card-image w-full">
             ${
               highlight.featured === "Ya"
                 ? '<div class="featured-badge">Unggulan</div>'
                 : ""
             }
             <div class="p-4">
                 <h3 class="font-semibold text-gray-900 mb-2 line-clamp-2">${
                   highlight.title
                 }</h3>
                 <div class="flex items-center justify-between text-sm">
                     <div class="text-gray-500">${formattedDate}</div>
                     <span class="category-badge ${badgeColor}">${
    highlight.category
  }</span>
                 </div>
                 <div class="flex items-center justify-between mt-4">
                     <div class="text-xs text-gray-500">
                         <i class="fas fa-user mr-1"></i> ${highlight.publisher}
                     </div>
                     <div class="relative">
                         <button class="action-btn text-gray-500 hover:text-gray-700 focus:outline-none" data-id="${
                           highlight.id
                         }">
                             <i class="fas fa-ellipsis-v"></i>
                         </button>
                         <div class="dropdown-menu" id="dropdown-${
                           highlight.id
                         }">
                             <a href="#" class="dropdown-item view-btn" data-id="${
                               highlight.id
                             }">
                                 <i class="fas fa-eye"></i> Lihat Detail
                             </a>
                             ${
                               canModify
                                 ? `
                             <a href="#" class="dropdown-item edit-btn" data-id="${highlight.id}">
                                 <i class="fas fa-edit"></i> Ubah
                             </a>
                             <div class="dropdown-divider"></div>
                             <a href="#" class="dropdown-item delete-btn text-red-600" data-id="${highlight.id}">
                                 <i class="fas fa-trash-alt"></i> Hapus
                             </a>
                             `
                                 : ""
                             }
                             ${
                               highlight.featured === "Tidak" && canModify
                                 ? `
                             <div class="dropdown-divider"></div>
                             <a href="#" class="dropdown-item feature-btn text-yellow-600" data-id="${highlight.id}">
                                 <i class="fas fa-star"></i> Jadikan Unggulan
                             </a>
                             `
                                 : ""
                             }
                         </div>
                     </div>
                 </div>
             </div>
         `;

  // Add event listeners
  setTimeout(() => {
    const actionBtn = card.querySelector(".action-btn");
    const dropdown = card.querySelector(".dropdown-menu");
    const viewBtn = card.querySelector(".view-btn");
    const editBtn = card.querySelector(".edit-btn");
    const deleteBtn = card.querySelector(".delete-btn");
    const featureBtn = card.querySelector(".feature-btn");

    actionBtn.addEventListener("click", (e) => {
      e.stopPropagation();

      // Close all other dropdowns
      document.querySelectorAll(".dropdown-menu.active").forEach((menu) => {
        if (menu !== dropdown) {
          menu.classList.remove("active");
        }
      });

      // Toggle current dropdown
      dropdown.classList.toggle("active");
    });

    viewBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openDetailModal(highlight);
      dropdown.classList.remove("active");
    });

    if (editBtn) {
      editBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openEditModal(highlight);
        dropdown.classList.remove("active");
      });
    }

    if (deleteBtn) {
      deleteBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openDeleteModal(highlight);
        dropdown.classList.remove("active");
      });
    }

    if (featureBtn) {
      featureBtn.addEventListener("click", (e) => {
        e.preventDefault();
        makeHighlightFeatured(highlight.id);
        dropdown.classList.remove("active");
      });
    }
  }, 0);

  return card;
}

// Close dropdowns when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".action-btn")) {
    document.querySelectorAll(".dropdown-menu.active").forEach((menu) => {
      menu.classList.remove("active");
    });
  }
});

function openDetailModal(highlight) {
  // Format date
  const publishDate = new Date(highlight.publishDate);
  const formattedDate = publishDate.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Set category badge color
  let badgeColor =
    highlight.category === "Publik"
      ? "bg-green-100 text-green-800"
      : "bg-blue-100 text-blue-800";

  // Populate modal content
  detailTitle.textContent = highlight.title;
  detailImage.src = highlight.image;
  detailContent.innerHTML = highlight.content;
  detailCategory.textContent = highlight.category;
  detailCategory.className = `category-badge ${badgeColor}`;
  detailPublisher.textContent = highlight.publisher;
  detailPublishDate.textContent = formattedDate;

  // Show/hide featured badge
  if (highlight.featured === "Ya") {
    detailFeaturedBadge.classList.remove("hidden");
  } else {
    detailFeaturedBadge.classList.add("hidden");
  }

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

function openEditModal(highlight) {
  // Populate form fields
  editId.value = highlight.id;
  editTitle.value = highlight.title;
  editImagePreview.src = highlight.image;
  editQuill.root.innerHTML = highlight.content;
  editCategory.value = highlight.category;

  // Set featured radio button
  document.querySelector(
    `input[name="editFeatured"][value="${highlight.featured}"]`
  ).checked = true;

  // Show modal
  editModal.classList.remove("invisible", "opacity-0");
  setTimeout(() => {
    editModalContent.classList.remove("scale-95", "opacity-0");
  }, 10);
}

function closeEditModal() {
  editModalContent.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    editModal.classList.add("invisible", "opacity-0");
  }, 300);
}

function handleEditImageSelect(e) {
  const file = e.target.files[0];
  if (!file) return;

  const validTypes = ["image/jpeg", "image/png", "image/gif"];

  if (!validTypes.includes(file.type)) {
    alert(
      "Format file tidak didukung. Silakan pilih file gambar (JPG, PNG, GIF)."
    );
    editImageInput.value = "";
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    editImagePreview.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function handleEditSubmit(e) {
  e.preventDefault();

  const id = parseInt(editId.value);
  const title = editTitle.value;
  const content = editQuill.root.innerHTML;
  const category = editCategory.value;
  const featured = document.querySelector(
    'input[name="editFeatured"]:checked'
  ).value;

  if (!title || !content || !category) {
    alert("Silakan lengkapi semua field yang diperlukan.");
    return;
  }

  // Find highlight in array
  const highlightIndex = highlights.findIndex(
    (highlight) => highlight.id === id
  );
  if (highlightIndex !== -1) {
    // Update highlight
    highlights[highlightIndex].title = title;

    // Update image if changed
    if (editImageInput.files[0]) {
      highlights[highlightIndex].image = editImagePreview.src;
    }

    highlights[highlightIndex].content = content;
    highlights[highlightIndex].category = category;
    highlights[highlightIndex].featured = featured;

    // Update display
    updateHighlightsGrid();

    // Close modal
    closeEditModal();

    // Show success message
    showToast("Artikel sorotan berhasil diperbarui!");
  }
}

function openDeleteModal(highlight) {
  deleteHighlightTitle.textContent = highlight.title;
  confirmDelete.setAttribute("data-id", highlight.id);

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
  const highlightId = parseInt(confirmDelete.getAttribute("data-id"));

  // Find highlight in array
  const highlightIndex = highlights.findIndex(
    (highlight) => highlight.id === highlightId
  );
  if (highlightIndex !== -1) {
    // Remove highlight
    highlights.splice(highlightIndex, 1);

    // Update display
    updateHighlightsGrid();

    // Close modal
    closeDeleteModal();

    // Show success message
    showToast("Artikel sorotan berhasil dihapus!");
  }
}

function makeHighlightFeatured(id) {
  // Find highlight in array
  const highlightIndex = highlights.findIndex(
    (highlight) => highlight.id === id
  );
  if (highlightIndex !== -1) {
    // Update featured status
    highlights[highlightIndex].featured = "Ya";

    // Update display
    updateHighlightsGrid();

    // Show success message
    showToast("Artikel berhasil dijadikan unggulan!");
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
        "window.__CF$cv$params={r:'9418731634f987e1',t:'MTc0NzU0MDg0Ny4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
