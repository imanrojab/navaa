// Sample data
let payments = [
  {
    id: "P001",
    name: "Uang Makan",
    amount: 750000,
    category: "Semuanya",
    description: "Biaya makan untuk 3 kali sehari selama satu bulan",
    createdAt: "2023-05-10T08:30:00",
    updatedAt: "2023-05-10T08:30:00",
  },
  {
    id: "P002",
    name: "Listrik & Kebersihan",
    amount: 250000,
    category: "Semuanya",
    description: "Biaya listrik dan kebersihan asrama per bulan",
    createdAt: "2023-05-10T09:15:00",
    updatedAt: "2023-05-15T14:20:00",
  },
  {
    id: "P003",
    name: "Laundry",
    amount: 150000,
    category: "Semuanya",
    description: "Biaya laundry pakaian per bulan",
    createdAt: "2023-05-11T10:45:00",
    updatedAt: "2023-05-11T10:45:00",
  },
  {
    id: "P004",
    name: "Ujian SMP",
    amount: 300000,
    category: "SMP",
    description: "Biaya ujian semester untuk siswa SMP",
    createdAt: "2023-05-12T13:20:00",
    updatedAt: "2023-05-12T13:20:00",
  },
  {
    id: "P005",
    name: "Ujian SMA",
    amount: 350000,
    category: "SMA",
    description: "Biaya ujian semester untuk siswa SMA",
    createdAt: "2023-05-12T13:25:00",
    updatedAt: "2023-05-12T13:25:00",
  },
  {
    id: "P006",
    name: "Buku Pelajaran SMP",
    amount: 500000,
    category: "SMP",
    description: "Biaya buku pelajaran untuk siswa SMP per semester",
    createdAt: "2023-05-13T09:10:00",
    updatedAt: "2023-05-13T09:10:00",
  },
  {
    id: "P007",
    name: "Buku Pelajaran SMA",
    amount: 650000,
    category: "SMA",
    description: "Biaya buku pelajaran untuk siswa SMA per semester",
    createdAt: "2023-05-13T09:15:00",
    updatedAt: "2023-05-13T09:15:00",
  },
  {
    id: "P008",
    name: "Kegiatan Ekstrakurikuler",
    amount: 200000,
    category: "Semuanya",
    description: "Biaya kegiatan ekstrakurikuler per semester",
    createdAt: "2023-05-14T11:30:00",
    updatedAt: "2023-05-14T11:30:00",
  },
  {
    id: "P009",
    name: "Praktikum IPA SMP",
    amount: 150000,
    category: "SMP",
    description: "Biaya praktikum IPA untuk siswa SMP per semester",
    createdAt: "2023-05-15T10:20:00",
    updatedAt: "2023-05-15T10:20:00",
  },
  {
    id: "P010",
    name: "Praktikum IPA SMA",
    amount: 200000,
    category: "SMA",
    description: "Biaya praktikum IPA untuk siswa SMA per semester",
    createdAt: "2023-05-15T10:25:00",
    updatedAt: "2023-05-15T10:25:00",
  },
  {
    id: "P011",
    name: "Seragam SMP",
    amount: 850000,
    category: "SMP",
    description: "Biaya seragam lengkap untuk siswa SMP",
    createdAt: "2023-05-16T14:15:00",
    updatedAt: "2023-05-16T14:15:00",
  },
  {
    id: "P012",
    name: "Seragam SMA",
    amount: 950000,
    category: "SMA",
    description: "Biaya seragam lengkap untuk siswa SMA",
    createdAt: "2023-05-16T14:20:00",
    updatedAt: "2023-05-16T14:20:00",
  },
];

// DOM Elements
const paymentTableBody = document.getElementById("paymentTableBody");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const filterBtn = document.getElementById("filterBtn");
const filterDropdown = document.getElementById("filterDropdown");
const filterCount = document.getElementById("filterCount");
const activeFilters = document.getElementById("activeFilters");
const categoryFilters = document.querySelectorAll(".category-filter");
const resetFilterBtn = document.getElementById("resetFilterBtn");
const applyFilterBtn = document.getElementById("applyFilterBtn");
const addPaymentBtn = document.getElementById("addPaymentBtn");
const emptyStateAddBtn = document.getElementById("emptyStateAddBtn");
const paymentModal = document.getElementById("paymentModal");
const paymentModalContent = document.getElementById("paymentModalContent");
const modalTitle = document.getElementById("modalTitle");
const submitBtnText = document.getElementById("submitBtnText");
const closeModal = document.getElementById("closeModal");
const cancelPaymentBtn = document.getElementById("cancelPaymentBtn");
const paymentForm = document.getElementById("paymentForm");
const paymentId = document.getElementById("paymentId");
const paymentName = document.getElementById("paymentName");
const paymentAmount = document.getElementById("paymentAmount");
const paymentCategory = document.getElementById("paymentCategory");
const paymentDescription = document.getElementById("paymentDescription");
const detailModal = document.getElementById("detailModal");
const detailModalContent = document.getElementById("detailModalContent");
const closeDetailModal = document.getElementById("closeDetailModal");
const closeDetailBtn = document.getElementById("closeDetailBtn");
const detailId = document.getElementById("detailId");
const detailName = document.getElementById("detailName");
const detailAmount = document.getElementById("detailAmount");
const detailCategoryContainer = document.getElementById(
  "detailCategoryContainer"
);
const detailDescription = document.getElementById("detailDescription");
const detailCreatedAt = document.getElementById("detailCreatedAt");
const detailUpdatedAt = document.getElementById("detailUpdatedAt");
const deleteModal = document.getElementById("deleteModal");
const deleteModalContent = document.getElementById("deleteModalContent");
const deletePaymentName = document.getElementById("deletePaymentName");
const cancelDelete = document.getElementById("cancelDelete");
const confirmDelete = document.getElementById("confirmDelete");
const startItem = document.getElementById("startItem");
const endItem = document.getElementById("endItem");
const totalItems = document.getElementById("totalItems");
const prevPageBtn = document.getElementById("prevPageBtn");
const nextPageBtn = document.getElementById("nextPageBtn");
const paginationNumbers = document.getElementById("paginationNumbers");

// Pagination state
let currentPage = 1;
const itemsPerPage = 10;

// Filter state
let activeFilterCategories = [];
let searchTerm = "";

// Initialize
updatePaymentTable();

// Event Listeners
searchInput.addEventListener("input", handleSearch);
filterBtn.addEventListener("click", toggleFilterDropdown);
resetFilterBtn.addEventListener("click", resetFilters);
applyFilterBtn.addEventListener("click", applyFilters);
addPaymentBtn.addEventListener("click", openAddModal);
emptyStateAddBtn.addEventListener("click", openAddModal);
closeModal.addEventListener("click", closePaymentModal);
cancelPaymentBtn.addEventListener("click", closePaymentModal);
paymentForm.addEventListener("submit", handlePaymentSubmit);
closeDetailModal.addEventListener("click", closePaymentDetailModal);
closeDetailBtn.addEventListener("click", closePaymentDetailModal);
cancelDelete.addEventListener("click", closeDeleteModal);
confirmDelete.addEventListener("click", handleDeleteConfirm);
prevPageBtn.addEventListener("click", goToPrevPage);
nextPageBtn.addEventListener("click", goToNextPage);

// Format currency input
paymentAmount.addEventListener("input", function (e) {
  // Remove non-digit characters
  let value = e.target.value.replace(/\D/g, "");

  // Format with thousand separators
  if (value) {
    value = parseInt(value, 10).toLocaleString("id-ID");
  }

  e.target.value = value;
});

// Close dropdowns when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest("#filterBtn") && !e.target.closest("#filterDropdown")) {
    filterDropdown.classList.remove("active");
  }

  if (!e.target.closest(".action-btn") && !e.target.closest(".dropdown-menu")) {
    document.querySelectorAll(".dropdown-menu.active").forEach((menu) => {
      if (!menu.isEqualNode(filterDropdown)) {
        menu.classList.remove("active");
      }
    });
  }
});

// Functions
function updatePaymentTable() {
  // Apply filters and search
  let filteredPayments = filterPayments();

  // Update total count
  totalItems.textContent = filteredPayments.length;

  // Calculate pagination
  const totalPages = Math.ceil(filteredPayments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredPayments.length);

  // Update pagination info
  startItem.textContent = filteredPayments.length > 0 ? startIndex + 1 : 0;
  endItem.textContent = endIndex;

  // Update pagination buttons
  updatePaginationButtons(totalPages);

  // Get current page items
  const currentItems = filteredPayments.slice(startIndex, endIndex);

  // Clear table
  paymentTableBody.innerHTML = "";

  // Show empty state if no items
  if (currentItems.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");

    // Populate table
    currentItems.forEach((payment, index) => {
      const row = document.createElement("tr");

      // Format amount
      const formattedAmount = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(payment.amount);

      // Determine badge class
      let badgeClass = "";
      if (payment.category === "SMP") {
        badgeClass = "badge-blue";
      } else if (payment.category === "SMA") {
        badgeClass = "badge-green";
      } else {
        badgeClass = "badge-purple";
      }

      row.innerHTML = `
                      <td class="text-gray-500">${payment.id}</td>
                      <td class="font-medium text-gray-900">${payment.name}</td>
                      <td>${formattedAmount}</td>
                      <td><span class="badge ${badgeClass}">${payment.category}</span></td>
                      <td class="text-right">
                          <div class="relative">
                              <button class="action-btn text-gray-500 hover:text-gray-700 focus:outline-none" data-id="${payment.id}">
                                  <i class="fas fa-ellipsis-v"></i>
                              </button>
                              <div class="dropdown-menu" id="dropdown-${payment.id}">
                                  <a href="#" class="dropdown-item view-btn" data-id="${payment.id}">
                                      <i class="fas fa-eye"></i> Detail
                                  </a>
                                  <a href="#" class="dropdown-item edit-btn" data-id="${payment.id}">
                                      <i class="fas fa-edit"></i> Ubah
                                  </a>
                                  <div class="dropdown-divider"></div>
                                  <a href="#" class="dropdown-item delete-btn text-red-600" data-id="${payment.id}">
                                      <i class="fas fa-trash-alt"></i> Hapus
                                  </a>
                              </div>
                          </div>
                      </td>
                  `;

      paymentTableBody.appendChild(row);
    });

    // Add event listeners to action buttons
    document.querySelectorAll(".action-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-id");
        const dropdown = document.getElementById(`dropdown-${id}`);

        // Close all other dropdowns
        document.querySelectorAll(".dropdown-menu.active").forEach((menu) => {
          if (menu !== dropdown) {
            menu.classList.remove("active");
          }
        });

        // Toggle current dropdown
        dropdown.classList.toggle("active");
      });
    });

    document.querySelectorAll(".view-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const id = btn.getAttribute("data-id");
        openDetailModal(id);
      });
    });

    document.querySelectorAll(".edit-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const id = btn.getAttribute("data-id");
        openEditModal(id);
      });
    });

    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const id = btn.getAttribute("data-id");
        openDeleteModal(id);
      });
    });
  }
}

function filterPayments() {
  let result = [...payments];

  // Apply category filters
  if (activeFilterCategories.length > 0) {
    result = result.filter((payment) =>
      activeFilterCategories.includes(payment.category)
    );
  }

  // Apply search
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    result = result.filter(
      (payment) =>
        payment.name.toLowerCase().includes(term) ||
        payment.id.toLowerCase().includes(term) ||
        payment.category.toLowerCase().includes(term)
    );
  }

  return result;
}

function updatePaginationButtons(totalPages) {
  // Update prev/next buttons
  if (currentPage <= 1) {
    prevPageBtn.classList.add("disabled");
  } else {
    prevPageBtn.classList.remove("disabled");
  }

  if (currentPage >= totalPages) {
    nextPageBtn.classList.add("disabled");
  } else {
    nextPageBtn.classList.remove("disabled");
  }

  // Generate page numbers
  paginationNumbers.innerHTML = "";

  // Determine which page numbers to show
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + 4);

  if (endPage - startPage < 4 && totalPages > 5) {
    startPage = Math.max(1, endPage - 4);
  }

  // Add first page if not included
  if (startPage > 1) {
    addPageButton(1);
    if (startPage > 2) {
      addEllipsis();
    }
  }

  // Add page numbers
  for (let i = startPage; i <= endPage; i++) {
    addPageButton(i);
  }

  // Add last page if not included
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      addEllipsis();
    }
    addPageButton(totalPages);
  }
}

function addPageButton(pageNum) {
  const button = document.createElement("button");
  button.className = `pagination-button ${
    pageNum === currentPage ? "active" : ""
  }`;
  button.textContent = pageNum;
  button.addEventListener("click", () => goToPage(pageNum));
  paginationNumbers.appendChild(button);
}

function addEllipsis() {
  const span = document.createElement("span");
  span.className = "px-2 text-gray-500";
  span.textContent = "...";
  paginationNumbers.appendChild(span);
}

function goToPage(pageNum) {
  currentPage = pageNum;
  updatePaymentTable();
}

function goToPrevPage() {
  if (currentPage > 1) {
    currentPage--;
    updatePaymentTable();
  }
}

function goToNextPage() {
  const totalPages = Math.ceil(filterPayments().length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    updatePaymentTable();
  }
}

function handleSearch() {
  searchTerm = searchInput.value.trim();
  currentPage = 1; // Reset to first page
  updatePaymentTable();
}

function toggleFilterDropdown(e) {
  e.stopPropagation();
  filterDropdown.classList.toggle("active");
}

function resetFilters() {
  // Uncheck all checkboxes
  categoryFilters.forEach((checkbox) => {
    checkbox.checked = false;
  });
}

function applyFilters() {
  // Get selected categories
  activeFilterCategories = [];
  categoryFilters.forEach((checkbox) => {
    if (checkbox.checked) {
      activeFilterCategories.push(checkbox.value);
    }
  });

  // Update filter count badge
  if (activeFilterCategories.length > 0) {
    filterCount.textContent = activeFilterCategories.length;
    filterCount.classList.remove("hidden");
  } else {
    filterCount.classList.add("hidden");
  }

  // Update active filters display
  updateActiveFiltersDisplay();

  // Close dropdown
  filterDropdown.classList.remove("active");

  // Reset to first page
  currentPage = 1;

  // Update table
  updatePaymentTable();
}

function updateActiveFiltersDisplay() {
  activeFilters.innerHTML = "";

  if (activeFilterCategories.length > 0) {
    activeFilters.classList.remove("hidden");

    activeFilterCategories.forEach((category) => {
      const badge = document.createElement("div");
      badge.className = "filter-badge";
      badge.innerHTML = `
                      ${category}
                      <button class="remove-filter" data-category="${category}">
                          <i class="fas fa-times"></i>
                      </button>
                  `;
      activeFilters.appendChild(badge);
    });

    // Add event listeners to remove buttons
    document.querySelectorAll(".remove-filter").forEach((btn) => {
      btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-category");
        removeFilter(category);
      });
    });
  } else {
    activeFilters.classList.add("hidden");
  }
}

function removeFilter(category) {
  // Remove from active filters
  activeFilterCategories = activeFilterCategories.filter(
    (cat) => cat !== category
  );

  // Update checkboxes
  categoryFilters.forEach((checkbox) => {
    if (checkbox.value === category) {
      checkbox.checked = false;
    }
  });

  // Update filter count badge
  if (activeFilterCategories.length > 0) {
    filterCount.textContent = activeFilterCategories.length;
    filterCount.classList.remove("hidden");
  } else {
    filterCount.classList.add("hidden");
  }

  // Update active filters display
  updateActiveFiltersDisplay();

  // Reset to first page
  currentPage = 1;

  // Update table
  updatePaymentTable();
}

function openAddModal() {
  // Reset form
  paymentForm.reset();
  paymentId.value = "";

  // Set modal title and button text
  modalTitle.textContent = "Tambah Pembayaran";
  submitBtnText.textContent = "Simpan";

  // Show modal
  paymentModal.classList.remove("invisible", "opacity-0");
  setTimeout(() => {
    paymentModalContent.classList.remove("scale-95", "opacity-0");
  }, 10);
}

function openEditModal(id) {
  // Find payment
  const payment = payments.find((p) => p.id === id);
  if (!payment) return;

  // Populate form
  paymentId.value = payment.id;
  paymentName.value = payment.name;
  paymentAmount.value = payment.amount.toLocaleString("id-ID");
  paymentCategory.value = payment.category;
  paymentDescription.value = payment.description || "";

  // Set modal title and button text
  modalTitle.textContent = "Edit Pembayaran";
  submitBtnText.textContent = "Perbarui";

  // Show modal
  paymentModal.classList.remove("invisible", "opacity-0");
  setTimeout(() => {
    paymentModalContent.classList.remove("scale-95", "opacity-0");
  }, 10);
}

function closePaymentModal() {
  paymentModalContent.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    paymentModal.classList.add("invisible", "opacity-0");
  }, 300);
}

function handlePaymentSubmit(e) {
  e.preventDefault();

  // Get form values
  const id = paymentId.value;
  const name = paymentName.value;
  const amountStr = paymentAmount.value.replace(/\D/g, "");
  const amount = parseInt(amountStr, 10);
  const category = paymentCategory.value;
  const description = paymentDescription.value;

  if (!name || isNaN(amount) || !category) {
    alert("Silakan lengkapi semua field yang diperlukan.");
    return;
  }

  const now = new Date().toISOString();

  if (id) {
    // Update existing payment
    const index = payments.findIndex((p) => p.id === id);
    if (index !== -1) {
      payments[index] = {
        ...payments[index],
        name,
        amount,
        category,
        description,
        updatedAt: now,
      };

      showToast("Pembayaran berhasil diperbarui!");
    }
  } else {
    // Add new payment
    const newId = generatePaymentId();
    const newPayment = {
      id: newId,
      name,
      amount,
      category,
      description,
      createdAt: now,
      updatedAt: now,
    };

    payments.unshift(newPayment);
    showToast("Pembayaran baru berhasil ditambahkan!");
  }

  // Close modal
  closePaymentModal();

  // Update table
  updatePaymentTable();
}

function generatePaymentId() {
  // Find highest ID number
  const idNumbers = payments.map((p) => parseInt(p.id.substring(1), 10));
  const maxId = Math.max(...idNumbers);
  const newIdNumber = maxId + 1;

  // Format with leading zeros
  return `P${newIdNumber.toString().padStart(3, "0")}`;
}

function openDetailModal(id) {
  // Find payment
  const payment = payments.find((p) => p.id === id);
  if (!payment) return;

  // Format dates
  const createdDate = new Date(payment.createdAt);
  const updatedDate = new Date(payment.updatedAt);

  const formatDate = (date) => {
    return (
      date.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }) +
      " " +
      date.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  };

  // Format amount
  const formattedAmount = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(payment.amount);

  // Determine badge class
  let badgeClass = "";
  if (payment.category === "SMP") {
    badgeClass = "badge-blue";
  } else if (payment.category === "SMA") {
    badgeClass = "badge-green";
  } else {
    badgeClass = "badge-purple";
  }

  // Populate modal content
  detailId.textContent = payment.id;
  detailName.textContent = payment.name;
  detailAmount.textContent = formattedAmount;
  detailCategoryContainer.innerHTML = `<span class="badge ${badgeClass}">${payment.category}</span>`;
  detailDescription.textContent = payment.description || "-";
  detailCreatedAt.textContent = formatDate(createdDate);
  detailUpdatedAt.textContent = formatDate(updatedDate);

  // Show modal
  detailModal.classList.remove("invisible", "opacity-0");
  setTimeout(() => {
    detailModalContent.classList.remove("scale-95", "opacity-0");
  }, 10);
}

function closePaymentDetailModal() {
  detailModalContent.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    detailModal.classList.add("invisible", "opacity-0");
  }, 300);
}

function openDeleteModal(id) {
  // Find payment
  const payment = payments.find((p) => p.id === id);
  if (!payment) return;

  // Set payment name
  deletePaymentName.textContent = payment.name;

  // Set payment ID to delete button
  confirmDelete.setAttribute("data-id", id);

  // Show modal
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
  const id = confirmDelete.getAttribute("data-id");

  // Find payment index
  const index = payments.findIndex((p) => p.id === id);
  if (index !== -1) {
    // Remove payment
    payments.splice(index, 1);

    // Close modal
    closeDeleteModal();

    // Update table
    updatePaymentTable();

    // Show success message
    showToast("Pembayaran berhasil dihapus!");
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
        "window.__CF$cv$params={r:'941894ef153d3e4f',t:'MTc0NzU0MjIzMy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
