// Sample data
const overduePayments = [
  {
    id: 1,
    name: "Ahmad Rizki",
    nis: "10001",
    class: "10A",
    months: 4,
    amount: 2400000,
    status: "Perlu Tindakan",
    teacher: "Budi Santoso",
    updated: "2023-06-01",
  },
  {
    id: 2,
    name: "Budi Santoso",
    nis: "10002",
    class: "10A",
    months: 2,
    amount: 1200000,
    status: "Perlu Perhatian",
    teacher: "Budi Santoso",
    updated: "2023-06-05",
  },
  {
    id: 3,
    name: "Citra Dewi",
    nis: "10003",
    class: "10A",
    months: 1,
    amount: 1800000,
    status: "Macet",
    teacher: "Budi Santoso",
    updated: "2023-06-10",
  },
  {
    id: 4,
    name: "Dian Purnama",
    nis: "10004",
    class: "10A",
    months: 2,
    amount: 600000,
    status: "Perlu Perhatian",
    teacher: "Budi Santoso",
    updated: "2023-06-15",
  },
  {
    id: 5,
    name: "Eko Prasetyo",
    nis: "10005",
    class: "10A",
    months: 5,
    amount: 3000000,
    status: "Perlu Tindakan",
    teacher: "Budi Santoso",
    updated: "2023-06-01",
  },
  {
    id: 6,
    name: "Fitri Handayani",
    nis: "10006",
    class: "10A",
    months: 3,
    amount: 1200000,
    status: "Perlu Perhatian",
    teacher: "Budi Santoso",
    updated: "2023-06-05",
  },
  {
    id: 7,
    name: "Galih Pratama",
    nis: "10007",
    class: "10B",
    months: 1,
    amount: 1800000,
    status: "Macet",
    teacher: "Siti Aminah",
    updated: "2023-06-10",
  },
  {
    id: 8,
    name: "Hana Safira",
    nis: "10008",
    class: "10B",
    months: 2,
    amount: 600000,
    status: "Perlu Perhatian",
    teacher: "Siti Aminah",
    updated: "2023-06-15",
  },
  {
    id: 9,
    name: "Irfan Hakim",
    nis: "10009",
    class: "10B",
    months: 4,
    amount: 2400000,
    status: "Perlu Tindakan",
    teacher: "Siti Aminah",
    updated: "2023-06-01",
  },
  {
    id: 10,
    name: "Jihan Aulia",
    nis: "10010",
    class: "10B",
    months: 2,
    amount: 1200000,
    status: "Perlu Perhatian",
    teacher: "Siti Aminah",
    updated: "2023-06-05",
  },
  {
    id: 11,
    name: "Kiki Saputra",
    nis: "10011",
    class: "10B",
    months: 1,
    amount: 1800000,
    status: "Macet",
    teacher: "Siti Aminah",
    updated: "2023-06-10",
  },
  {
    id: 12,
    name: "Lina Mariana",
    nis: "10012",
    class: "10B",
    months: 2,
    amount: 600000,
    status: "Perlu Perhatian",
    teacher: "Siti Aminah",
    updated: "2023-06-15",
  },
  {
    id: 13,
    name: "Maman Suparman",
    nis: "10013",
    class: "11A",
    months: 6,
    amount: 3600000,
    status: "Perlu Tindakan",
    teacher: "Ahmad Dahlan",
    updated: "2023-06-01",
  },
  {
    id: 14,
    name: "Nina Agustina",
    nis: "10014",
    class: "11A",
    months: 2,
    amount: 1200000,
    status: "Perlu Perhatian",
    teacher: "Ahmad Dahlan",
    updated: "2023-06-05",
  },
  {
    id: 15,
    name: "Oscar Firmansyah",
    nis: "10015",
    class: "11A",
    months: 1,
    amount: 1800000,
    status: "Macet",
    teacher: "Ahmad Dahlan",
    updated: "2023-06-10",
  },
  {
    id: 16,
    name: "Putri Rahayu",
    nis: "10016",
    class: "11A",
    months: 2,
    amount: 600000,
    status: "Perlu Perhatian",
    teacher: "Ahmad Dahlan",
    updated: "2023-06-15",
  },
  {
    id: 17,
    name: "Qori Hidayat",
    nis: "10017",
    class: "11A",
    months: 4,
    amount: 2400000,
    status: "Perlu Tindakan",
    teacher: "Ahmad Dahlan",
    updated: "2023-06-01",
  },
  {
    id: 18,
    name: "Rudi Hermawan",
    nis: "10018",
    class: "11B",
    months: 2,
    amount: 1200000,
    status: "Perlu Perhatian",
    teacher: "Dewi Kartika",
    updated: "2023-06-05",
  },
  {
    id: 19,
    name: "Sinta Dewi",
    nis: "10019",
    class: "11B",
    months: 1,
    amount: 1800000,
    status: "Macet",
    teacher: "Dewi Kartika",
    updated: "2023-06-10",
  },
  {
    id: 20,
    name: "Tono Sucipto",
    nis: "10020",
    class: "11B",
    months: 5,
    amount: 3000000,
    status: "Perlu Tindakan",
    teacher: "Dewi Kartika",
    updated: "2023-06-15",
  },
];

// Sample bill details
const billDetails = {
  1: [
    {
      month: "Maret 2023",
      type: "SPP",
      amount: 600000,
      status: "Belum Dibayar",
    },
    {
      month: "April 2023",
      type: "SPP",
      amount: 600000,
      status: "Belum Dibayar",
    },
    {
      month: "Mei 2023",
      type: "SPP",
      amount: 600000,
      status: "Belum Dibayar",
    },
    {
      month: "Juni 2023",
      type: "SPP",
      amount: 600000,
      status: "Belum Dibayar",
    },
  ],
  2: [
    {
      month: "Mei 2023",
      type: "SPP",
      amount: 600000,
      status: "Belum Dibayar",
    },
    {
      month: "Juni 2023",
      type: "SPP",
      amount: 600000,
      status: "Belum Dibayar",
    },
  ],
  3: [
    {
      month: "April 2023",
      type: "SPP",
      amount: 600000,
      status: "Belum Dibayar",
    },
    {
      month: "Mei 2023",
      type: "SPP",
      amount: 600000,
      status: "Belum Dibayar",
    },
    {
      month: "Juni 2023",
      type: "SPP",
      amount: 600000,
      status: "Belum Dibayar",
    },
  ],
};

// Sample communication history
const communicationHistory = {
  1: [
    {
      date: "2023-06-15",
      type: "SMS",
      message: "Pengingat pembayaran SPP tertunggak 4 bulan",
      status: "Terkirim",
    },
    {
      date: "2023-06-10",
      type: "Telepon",
      message: "Menghubungi orang tua siswa, tidak ada jawaban",
      status: "Tidak Terjawab",
    },
    {
      date: "2023-06-01",
      type: "Email",
      message: "Pengingatan pembayaran SPP tertunggak 3 bulan",
      status: "Terkirim",
    },
  ],
  2: [
    {
      date: "2023-06-12",
      type: "Telepon",
      message: "Orang tua berjanji akan membayar minggu depan",
      status: "Terjawab",
    },
    {
      date: "2023-06-05",
      type: "SMS",
      message: "Pengingat pembayaran SPP tertunggak 2 bulan",
      status: "Terkirim",
    },
  ],
  3: [
    {
      date: "2023-06-14",
      type: "Email",
      message: "Konfirmasi jadwal pembayaran",
      status: "Terkirim",
    },
    {
      date: "2023-06-10",
      type: "Telepon",
      message: "Orang tua meminta perpanjangan waktu pembayaran",
      status: "Terjawab",
    },
    {
      date: "2023-06-05",
      type: "SMS",
      message: "Pengingat pembayaran SPP tertunggak 3 bulan",
      status: "Terkirim",
    },
  ],
};

// DOM Elements
const paymentTableBody = document.getElementById("payment-table-body");
const detailPaymentModal = document.getElementById("detail-payment-modal");
const inputPaymentModal = document.getElementById("input-payment-modal");
const closeModalButtons = document.querySelectorAll(".close-modal");
const searchInput = document.getElementById("search-input");
const classFilter = document.getElementById("class-filter");
const statusFilter = document.getElementById("status-filter");
const durationFilter = document.getElementById("duration-filter");
const prevPageBtn = document.getElementById("prev-page");
const nextPageBtn = document.getElementById("next-page");
const paginationNumbers = document.getElementById("pagination-numbers");
const showingStart = document.getElementById("showing-start");
const showingEnd = document.getElementById("showing-end");
const totalItems = document.getElementById("total-items");
const detailBillsTable = document.getElementById("detail-bills-table");
const detailCommunicationHistory = document.getElementById(
  "detail-communication-history"
);
const paymentForm = document.getElementById("payment-form");
const paymentBillsContainer = document.getElementById(
  "payment-bills-container"
);
const detailPaymentBtn = document.getElementById("detail-payment-btn");
const modals = document.querySelectorAll(".modal");

// Pagination state
let currentPage = 1;
const itemsPerPage = 10;
let filteredData = [...overduePayments];
let activeDropdown = null;
let currentStudentId = null;

// Initialize the table
function initTable() {
  updatePagination();
  renderTable();
}

// Update pagination controls
function updatePagination() {
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Update showing text
  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(currentPage * itemsPerPage, filteredData.length);
  showingStart.textContent = filteredData.length > 0 ? start : 0;
  showingEnd.textContent = end;
  totalItems.textContent = filteredData.length;

  // Update pagination buttons
  paginationNumbers.innerHTML = "";

  // Previous button state
  if (currentPage === 1) {
    prevPageBtn.classList.add("disabled");
  } else {
    prevPageBtn.classList.remove("disabled");
  }

  // Next button state
  if (currentPage === totalPages || totalPages === 0) {
    nextPageBtn.classList.add("disabled");
  } else {
    nextPageBtn.classList.remove("disabled");
  }

  // Generate page numbers
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + 4);

  for (let i = startPage; i <= endPage; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.className = `pagination-btn px-3 py-1 rounded-md border border-gray-300 ${
      i === currentPage ? "active" : ""
    }`;
    pageBtn.textContent = i;
    pageBtn.addEventListener("click", () => {
      currentPage = i;
      updatePagination();
      renderTable();
    });
    paginationNumbers.appendChild(pageBtn);
  }
}

// Close all dropdowns
function closeAllDropdowns() {
  document.querySelectorAll(".dropdown-content").forEach((dropdown) => {
    dropdown.classList.remove("show");
  });
  activeDropdown = null;
}

// Toggle dropdown
function toggleDropdown(event, dropdownId) {
  event.stopPropagation();

  // Close any open dropdown
  if (activeDropdown && activeDropdown !== dropdownId) {
    document.getElementById(activeDropdown).classList.remove("show");
  }

  const dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle("show");

  if (dropdown.classList.contains("show")) {
    activeDropdown = dropdownId;
  } else {
    activeDropdown = null;
  }
}

// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat("id-ID").format(amount);
}

// Render the payment table
function renderTable() {
  paymentTableBody.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const end = Math.min(start + itemsPerPage, filteredData.length);
  const paginatedData = filteredData.slice(start, end);

  paginatedData.forEach((item, index) => {
    const row = document.createElement("tr");
    row.className = "table-row";

    const dropdownId = `dropdown-${item.id}`;

    // Determine status class
    let statusClass = "";
    switch (item.status) {
      case "Perlu Perhatian":
        statusClass = "status-need-attention";
        break;
      case "Macet":
        statusClass = "status-stuck";
        break;
      case "Perlu Tindakan":
        statusClass = "status-need-action";
        break;
      default:
        statusClass = "bg-gray-100 text-gray-800";
    }

    row.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${
                  start + index + 1
                }</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${
                  item.name
                }</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${
                  item.class
                }</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${
                  item.months
                } Bulan</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Rp ${formatCurrency(
                  item.amount
                )}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClass}">
                        ${item.status}
                    </span>
               
                        
                    </div>
                </td>
            `;

    paymentTableBody.appendChild(row);
  });

  // Add event listeners to action buttons
  document.querySelectorAll(".detail-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      openDetailModal(id);
      closeAllDropdowns();
    });
  });

  document.querySelectorAll(".payment-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      openPaymentModal(id);
      closeAllDropdowns();
    });
  });
}

// Filter table data
function filterTable() {
  const searchTerm = searchInput.value.toLowerCase();
  const classValue = classFilter.value;
  const statusValue = statusFilter.value;
  const durationValue = durationFilter.value;

  filteredData = overduePayments.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm) ||
      item.nis.toLowerCase().includes(searchTerm) ||
      item.class.toLowerCase().includes(searchTerm);
    const matchesClass = !classValue || item.class === classValue;
    const matchesStatus = !statusValue || item.status === statusValue;

    let matchesDuration = true;
    if (durationValue) {
      const duration = parseInt(durationValue);
      if (duration === 4) {
        matchesDuration = item.months >= 4;
      } else {
        matchesDuration = item.months === duration;
      }
    }

    return matchesSearch && matchesClass && matchesStatus && matchesDuration;
  });

  currentPage = 1;
  updatePagination();
  renderTable();
}

// Open detail modal
function openDetailModal(id) {
  const item = overduePayments.find((item) => item.id === id);
  if (!item) return;

  currentStudentId = id;

  document.getElementById("detail-name").textContent = item.name;
  document.getElementById("detail-nis").textContent = item.nis;
  document.getElementById("detail-class").textContent = item.class;
  document.getElementById("detail-teacher").textContent = item.teacher;
  document.getElementById("detail-months").textContent = `${item.months} Bulan`;
  document.getElementById("detail-amount").textContent = `Rp ${formatCurrency(
    item.amount
  )}`;
  document.getElementById("detail-updated").textContent = item.updated;

  // Set status with appropriate styling
  const detailStatus = document.getElementById("detail-status");
  let statusClass = "";
  switch (item.status) {
    case "Perlu Perhatian":
      statusClass = "status-need-attention";
      break;
    case "Macet":
      statusClass = "status-stuck";
      break;
    case "Perlu Tindakan":
      statusClass = "status-need-action";
      break;
    default:
      statusClass = "bg-gray-100 text-gray-800";
  }
  detailStatus.innerHTML = `<span class="px-2 py-1 text-xs rounded-full ${statusClass}">${item.status}</span>`;

  // Render bill details
  renderBillDetails(id);

  // Render communication history
  renderCommunicationHistory(id);

  detailPaymentModal.style.display = "block";
}

// Render bill details
function renderBillDetails(studentId) {
  detailBillsTable.innerHTML = "";

  const bills = billDetails[studentId] || billDetails[1]; // Fallback to first bills if not found

  bills.forEach((bill) => {
    const row = document.createElement("tr");
    row.className = "table-row";

    // Determine status class
    let statusClass = "";
    switch (bill.status) {
      case "Belum Dibayar":
        statusClass = "status-unpaid";
        break;
      case "Sebagian Dibayar":
        statusClass = "status-partial";
        break;
      case "Lunas":
        statusClass = "status-paid";
        break;
      default:
        statusClass = "bg-gray-100 text-gray-800";
    }

    row.innerHTML = `
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">${
                  bill.month
                }</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">${
                  bill.type
                }</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-700">Rp ${formatCurrency(
                  bill.amount
                )}</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClass}">
                        ${bill.status}
                    </span>
                </td>
            `;

    detailBillsTable.appendChild(row);
  });
}

// Render communication history
function renderCommunicationHistory(studentId) {
  detailCommunicationHistory.innerHTML = "";

  const history = communicationHistory[studentId] || communicationHistory[1]; // Fallback to first history if not found

  history.forEach((item) => {
    const historyItem = document.createElement("div");
    historyItem.className = "bg-gray-50 p-4 rounded-lg";

    // Determine status class
    let statusClass = "";
    switch (item.status) {
      case "Terkirim":
        statusClass = "status-sent";
        break;
      case "Terjawab":
        statusClass = "bg-blue-100 text-blue-800";
        break;
      case "Tidak Terjawab":
        statusClass = "status-unanswered";
        break;
      default:
        statusClass = "bg-gray-100 text-gray-800";
    }

    historyItem.innerHTML = `
                <div class="flex justify-between items-start">
                    <div>
                        <p class="font-medium text-gray-800">${item.type}</p>
                        <p class="text-sm text-gray-600 mt-1">${item.date}</p>
                    </div>
                    <span class="px-2 py-1 text-xs rounded-full ${statusClass}">
                        ${item.status}
                    </span>
                </div>
                <p class="text-sm text-gray-700 mt-2">${item.message}</p>
            `;

    detailCommunicationHistory.appendChild(historyItem);
  });
}

// Open payment modal
function openPaymentModal(id) {
  const item = overduePayments.find((item) => item.id === id);
  if (!item) return;

  document.getElementById("payment-student-id").value = item.id;
  document.getElementById("payment-student-name").textContent = item.name;
  document.getElementById(
    "payment-total-amount"
  ).textContent = `Rp ${formatCurrency(item.amount)}`;

  // Set current date as default
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("payment-date").value = today;

  // Populate bill checkboxes
  renderPaymentBills(id);

  inputPaymentModal.style.display = "block";
}

// Render payment bills
function renderPaymentBills(studentId) {
  paymentBillsContainer.innerHTML = "";

  const bills = billDetails[studentId] || billDetails[1]; // Fallback to first bills if not found

  bills.forEach((bill, index) => {
    const checkbox = document.createElement("div");
    checkbox.className = "flex items-center";

    checkbox.innerHTML = `
                <input type="checkbox" id="bill-${index}" name="bills" value="${index}" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                <label for="bill-${index}" class="ml-2 block text-sm text-gray-700">
                    ${bill.month} - ${bill.type} - Rp ${formatCurrency(
      bill.amount
    )}
                </label>
            `;

    paymentBillsContainer.appendChild(checkbox);
  });
}

// Close modal when clicking outside
function setupModalOutsideClick(modal) {
  modal.addEventListener("click", function (event) {
    // Check if the click is outside the modal content
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Prevent clicks inside modal content from closing the modal
  const modalContent = modal.querySelector(".modal-content");
  if (modalContent) {
    modalContent.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  initTable();

  // Close dropdowns when clicking outside
  document.addEventListener("click", closeAllDropdowns);

  // Search and filter
  searchInput.addEventListener("input", filterTable);
  classFilter.addEventListener("change", filterTable);
  statusFilter.addEventListener("change", filterTable);
  durationFilter.addEventListener("change", filterTable);

  // Pagination
  prevPageBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updatePagination();
      renderTable();
    }
  });

  nextPageBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      updatePagination();
      renderTable();
    }
  });

  // Close modals with X button
  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      detailPaymentModal.style.display = "none";
      inputPaymentModal.style.display = "none";
    });
  });

  // Setup close modal when clicking outside
  modals.forEach(setupModalOutsideClick);

  // Detail payment button
  detailPaymentBtn.addEventListener("click", () => {
    detailPaymentModal.style.display = "none";
    openPaymentModal(currentStudentId);
  });

  // Payment form submission
  paymentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const studentId = document.getElementById("payment-student-id").value;
    const method = document.getElementById("payment-method").value;
    const amount = document.getElementById("payment-amount").value;
    const date = document.getElementById("payment-date").value;
    const notes = document.getElementById("payment-notes").value;

    // Get selected bills
    const selectedBills = [];
    document
      .querySelectorAll('input[name="bills"]:checked')
      .forEach((checkbox) => {
        selectedBills.push(checkbox.value);
      });

    // In a real application, you would send this data to the server
    console.log("Payment submitted:", {
      studentId,
      method,
      amount,
      date,
      notes,
      selectedBills,
    });

    // Show success message
    alert("Pembayaran berhasil disimpan!");

    // Close modal
    inputPaymentModal.style.display = "none";
  });
});

// Make functions available globally for event handlers
window.toggleDropdown = toggleDropdown;

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'941c12a2f699f8e8',t:'MTc0NzU3ODgzOS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
