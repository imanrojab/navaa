// Sample data
const monthlyPayments = {
  "2024/2025": [
    {
      month: "Juli",
      makan: { paid: true, date: "01/07/2024" },
      laundry: { paid: true, date: "01/07/2024" },
      listrik: { paid: true, date: "01/07/2024" },
      udb: { paid: true, date: "01/07/2024" },
    },
    {
      month: "Agustus",
      makan: { paid: true, date: "02/08/2024" },
      laundry: { paid: true, date: "02/08/2024" },
      listrik: { paid: true, date: "02/08/2024" },
      udb: { paid: true, date: "02/08/2024" },
    },
    {
      month: "September",
      makan: { paid: true, date: "01/09/2024" },
      laundry: { paid: true, date: "01/09/2024" },
      listrik: { paid: true, date: "01/09/2024" },
      udb: { paid: true, date: "01/09/2024" },
    },
    {
      month: "Oktober",
      makan: { paid: false, date: "" },
      laundry: { paid: false, date: "" },
      listrik: { paid: false, date: "" },
      udb: { paid: false, date: "" },
    },
    {
      month: "November",
      makan: { paid: false, date: "" },
      laundry: { paid: false, date: "" },
      listrik: { paid: false, date: "" },
      udb: { paid: false, date: "" },
    },
    {
      month: "Desember",
      makan: { paid: false, date: "" },
      laundry: { paid: false, date: "" },
      listrik: { paid: false, date: "" },
      udb: { paid: false, date: "" },
    },
    {
      month: "Januari",
      makan: { paid: false, date: "" },
      laundry: { paid: false, date: "" },
      listrik: { paid: false, date: "" },
      udb: { paid: false, date: "" },
    },
    {
      month: "Februari",
      makan: { paid: false, date: "" },
      laundry: { paid: false, date: "" },
      listrik: { paid: false, date: "" },
      udb: { paid: false, date: "" },
    },
    {
      month: "Maret",
      makan: { paid: false, date: "" },
      laundry: { paid: false, date: "" },
      listrik: { paid: false, date: "" },
      udb: { paid: false, date: "" },
    },
    {
      month: "April",
      makan: { paid: false, date: "" },
      laundry: { paid: false, date: "" },
      listrik: { paid: false, date: "" },
      udb: { paid: false, date: "" },
    },
    {
      month: "Mei",
      makan: { paid: false, date: "" },
      laundry: { paid: false, date: "" },
      listrik: { paid: false, date: "" },
      udb: { paid: false, date: "" },
    },
    {
      month: "Juni",
      makan: { paid: false, date: "" },
      laundry: { paid: false, date: "" },
      listrik: { paid: false, date: "" },
      udb: { paid: false, date: "" },
    },
  ],
  "2023/2024": [
    {
      month: "Juli",
      makan: { paid: true, date: "03/07/2023" },
      laundry: { paid: true, date: "03/07/2023" },
      listrik: { paid: true, date: "03/07/2023" },
      udb: { paid: true, date: "03/07/2023" },
    },
    {
      month: "Agustus",
      makan: { paid: true, date: "05/08/2023" },
      laundry: { paid: true, date: "05/08/2023" },
      listrik: { paid: true, date: "05/08/2023" },
      udb: { paid: true, date: "05/08/2023" },
    },
    {
      month: "September",
      makan: { paid: true, date: "02/09/2023" },
      laundry: { paid: true, date: "02/09/2023" },
      listrik: { paid: true, date: "02/09/2023" },
      udb: { paid: true, date: "02/09/2023" },
    },
    {
      month: "Oktober",
      makan: { paid: true, date: "04/10/2023" },
      laundry: { paid: true, date: "04/10/2023" },
      listrik: { paid: true, date: "04/10/2023" },
      udb: { paid: true, date: "04/10/2023" },
    },
    {
      month: "November",
      makan: { paid: true, date: "03/11/2023" },
      laundry: { paid: true, date: "03/11/2023" },
      listrik: { paid: true, date: "03/11/2023" },
      udb: { paid: true, date: "03/11/2023" },
    },
    {
      month: "Desember",
      makan: { paid: true, date: "02/12/2023" },
      laundry: { paid: true, date: "02/12/2023" },
      listrik: { paid: true, date: "02/12/2023" },
      udb: { paid: true, date: "02/12/2023" },
    },
    {
      month: "Januari",
      makan: { paid: true, date: "05/01/2024" },
      laundry: { paid: true, date: "05/01/2024" },
      listrik: { paid: true, date: "05/01/2024" },
      udb: { paid: true, date: "05/01/2024" },
    },
    {
      month: "Februari",
      makan: { paid: true, date: "03/02/2024" },
      laundry: { paid: true, date: "03/02/2024" },
      listrik: { paid: true, date: "03/02/2024" },
      udb: { paid: true, date: "03/02/2024" },
    },
    {
      month: "Maret",
      makan: { paid: true, date: "04/03/2024" },
      laundry: { paid: true, date: "04/03/2024" },
      listrik: { paid: true, date: "04/03/2024" },
      udb: { paid: true, date: "04/03/2024" },
    },
    {
      month: "April",
      makan: { paid: true, date: "02/04/2024" },
      laundry: { paid: true, date: "02/04/2024" },
      listrik: { paid: true, date: "02/04/2024" },
      udb: { paid: true, date: "02/04/2024" },
    },
    {
      month: "Mei",
      makan: { paid: true, date: "03/05/2024" },
      laundry: { paid: true, date: "03/05/2024" },
      listrik: { paid: true, date: "03/05/2024" },
      udb: { paid: true, date: "03/05/2024" },
    },
    {
      month: "Juni",
      makan: { paid: true, date: "04/06/2024" },
      laundry: { paid: true, date: "04/06/2024" },
      listrik: { paid: true, date: "04/06/2024" },
      udb: { paid: true, date: "04/06/2024" },
    },
  ],
  "2022/2023": [
    {
      month: "Juli",
      makan: { paid: true, date: "05/07/2022" },
      laundry: { paid: true, date: "05/07/2022" },
      listrik: { paid: true, date: "05/07/2022" },
      udb: { paid: true, date: "05/07/2022" },
    },
    {
      month: "Agustus",
      makan: { paid: true, date: "03/08/2022" },
      laundry: { paid: true, date: "03/08/2022" },
      listrik: { paid: true, date: "03/08/2022" },
      udb: { paid: true, date: "03/08/2022" },
    },
    {
      month: "September",
      makan: { paid: true, date: "05/09/2022" },
      laundry: { paid: true, date: "05/09/2022" },
      listrik: { paid: true, date: "05/09/2022" },
      udb: { paid: true, date: "05/09/2022" },
    },
    {
      month: "Oktober",
      makan: { paid: true, date: "04/10/2022" },
      laundry: { paid: true, date: "04/10/2022" },
      listrik: { paid: true, date: "04/10/2022" },
      udb: { paid: true, date: "04/10/2022" },
    },
    {
      month: "November",
      makan: { paid: true, date: "03/11/2022" },
      laundry: { paid: true, date: "03/11/2022" },
      listrik: { paid: true, date: "03/11/2022" },
      udb: { paid: true, date: "03/11/2022" },
    },
    {
      month: "Desember",
      makan: { paid: true, date: "05/12/2022" },
      laundry: { paid: true, date: "05/12/2022" },
      listrik: { paid: true, date: "05/12/2022" },
      udb: { paid: true, date: "05/12/2022" },
    },
    {
      month: "Januari",
      makan: { paid: true, date: "04/01/2023" },
      laundry: { paid: true, date: "04/01/2023" },
      listrik: { paid: true, date: "04/01/2023" },
      udb: { paid: true, date: "04/01/2023" },
    },
    {
      month: "Februari",
      makan: { paid: true, date: "03/02/2023" },
      laundry: { paid: true, date: "03/02/2023" },
      listrik: { paid: true, date: "03/02/2023" },
      udb: { paid: true, date: "03/02/2023" },
    },
    {
      month: "Maret",
      makan: { paid: true, date: "06/03/2023" },
      laundry: { paid: true, date: "06/03/2023" },
      listrik: { paid: true, date: "06/03/2023" },
      udb: { paid: true, date: "06/03/2023" },
    },
    {
      month: "April",
      makan: { paid: true, date: "04/04/2023" },
      laundry: { paid: true, date: "04/04/2023" },
      listrik: { paid: true, date: "04/04/2023" },
      udb: { paid: true, date: "04/04/2023" },
    },
    {
      month: "Mei",
      makan: { paid: true, date: "05/05/2023" },
      laundry: { paid: true, date: "05/05/2023" },
      listrik: { paid: true, date: "05/05/2023" },
      udb: { paid: true, date: "05/05/2023" },
    },
    {
      month: "Juni",
      makan: { paid: true, date: "02/06/2023" },
      laundry: { paid: true, date: "02/06/2023" },
      listrik: { paid: true, date: "02/06/2023" },
      udb: { paid: true, date: "02/06/2023" },
    },
  ],
};

const otherPayments = {
  "2024/2025": [
    {
      type: "Ujian Semester Ganjil",
      amount: "Rp 500.000",
      status: "Lunas",
      date: "15/09/2024",
      method: "Transfer Bank",
      receiver: "Admin Keuangan",
    },
    {
      type: "Acara Maulid",
      amount: "Rp 250.000",
      status: "Belum Lunas",
      date: "",
      method: "",
      receiver: "",
    },
    {
      type: "Studi Tour",
      amount: "Rp 1.750.000",
      status: "Belum Lunas",
      date: "",
      method: "",
      receiver: "",
    },
  ],
  "2023/2024": [
    {
      type: "Ujian Semester Ganjil",
      amount: "Rp 500.000",
      status: "Lunas",
      date: "12/09/2023",
      method: "Tunai",
      receiver: "Budi Santoso",
    },
    {
      type: "Ujian Semester Genap",
      amount: "Rp 500.000",
      status: "Lunas",
      date: "15/03/2024",
      method: "Transfer Bank",
      receiver: "Admin Keuangan",
    },
    {
      type: "Acara Maulid",
      amount: "Rp 250.000",
      status: "Lunas",
      date: "20/10/2023",
      method: "Tunai",
      receiver: "Siti Aminah",
    },
    {
      type: "Studi Tour",
      amount: "Rp 1.500.000",
      status: "Lunas",
      date: "05/02/2024",
      method: "Transfer Bank",
      receiver: "Admin Keuangan",
    },
  ],
  "2022/2023": [
    {
      type: "Ujian Semester Ganjil",
      amount: "Rp 450.000",
      status: "Lunas",
      date: "14/09/2022",
      method: "Tunai",
      receiver: "Budi Santoso",
    },
    {
      type: "Ujian Semester Genap",
      amount: "Rp 450.000",
      status: "Lunas",
      date: "16/03/2023",
      method: "Tunai",
      receiver: "Siti Aminah",
    },
    {
      type: "Acara Maulid",
      amount: "Rp 200.000",
      status: "Lunas",
      date: "22/10/2022",
      method: "Tunai",
      receiver: "Budi Santoso",
    },
    {
      type: "Studi Tour",
      amount: "Rp 1.250.000",
      status: "Lunas",
      date: "07/02/2023",
      method: "Transfer Bank",
      receiver: "Admin Keuangan",
    },
  ],
};

const paymentHistory = [
  {
    id: "PAY-20240901-001",
    date: "01/09/2024",
    type: "Makan September",
    amount: "Rp 750.000",
    notes: "Pembayaran tepat waktu",
    method: "Transfer Bank",
    receiver: "Admin Keuangan",
  },
  {
    id: "PAY-20240901-002",
    date: "01/09/2024",
    type: "Laundry September",
    amount: "Rp 250.000",
    notes: "Pembayaran tepat waktu",
    method: "Transfer Bank",
    receiver: "Admin Keuangan",
  },
  {
    id: "PAY-20240901-003",
    date: "01/09/2024",
    type: "Listrik September",
    amount: "Rp 300.000",
    notes: "Pembayaran tepat waktu",
    method: "Transfer Bank",
    receiver: "Admin Keuangan",
  },
  {
    id: "PAY-20240901-004",
    date: "01/09/2024",
    type: "UDB September",
    amount: "Rp 500.000",
    notes: "Pembayaran tepat waktu",
    method: "Transfer Bank",
    receiver: "Admin Keuangan",
  },
  {
    id: "PAY-20240802-001",
    date: "02/08/2024",
    type: "Makan Agustus",
    amount: "Rp 750.000",
    notes: "Pembayaran tepat waktu",
    method: "Tunai",
    receiver: "Budi Santoso",
  },
  {
    id: "PAY-20240802-002",
    date: "02/08/2024",
    type: "Laundry Agustus",
    amount: "Rp 250.000",
    notes: "Pembayaran tepat waktu",
    method: "Tunai",
    receiver: "Budi Santoso",
  },
  {
    id: "PAY-20240802-003",
    date: "02/08/2024",
    type: "Listrik Agustus",
    amount: "Rp 300.000",
    notes: "Pembayaran tepat waktu",
    method: "Tunai",
    receiver: "Budi Santoso",
  },
  {
    id: "PAY-20240802-004",
    date: "02/08/2024",
    type: "UDB Agustus",
    amount: "Rp 500.000",
    notes: "Pembayaran tepat waktu",
    method: "Tunai",
    receiver: "Budi Santoso",
  },
  {
    id: "PAY-20240701-001",
    date: "01/07/2024",
    type: "Makan Juli",
    amount: "Rp 750.000",
    notes: "Pembayaran tepat waktu",
    method: "QRIS",
    receiver: "Admin Keuangan",
  },
  {
    id: "PAY-20240701-002",
    date: "01/07/2024",
    type: "Laundry Juli",
    amount: "Rp 250.000",
    notes: "Pembayaran tepat waktu",
    method: "QRIS",
    receiver: "Admin Keuangan",
  },
  {
    id: "PAY-20240701-003",
    date: "01/07/2024",
    type: "Listrik Juli",
    amount: "Rp 300.000",
    notes: "Pembayaran tepat waktu",
    method: "QRIS",
    receiver: "Admin Keuangan",
  },
  {
    id: "PAY-20240701-004",
    date: "01/07/2024",
    type: "UDB Juli",
    amount: "Rp 500.000",
    notes: "Pembayaran tepat waktu",
    method: "QRIS",
    receiver: "Admin Keuangan",
  },
];

// Function to populate monthly payment table
function populateMonthlyPaymentTable(year) {
  const tableBody = document.getElementById("monthlyPaymentTable");
  tableBody.innerHTML = "";

  monthlyPayments[year].forEach((payment) => {
    const row = document.createElement("tr");

    // Month column
    const monthCell = document.createElement("td");
    monthCell.textContent = payment.month;
    monthCell.className = "font-medium";
    row.appendChild(monthCell);

    // Payment columns (makan, laundry, listrik, udb)
    const categories = ["makan", "laundry", "listrik", "udb"];
    categories.forEach((category) => {
      const cell = document.createElement("td");
      if (payment[category].paid) {
        cell.innerHTML = `
                          <div class="paid-indicator">
                              <div class="paid-icon">
                                  <i class="fas fa-check"></i>
                              </div>
                              <span class="text-sm text-gray-600">${payment[category].date}</span>
                          </div>
                      `;
      } else {
        cell.innerHTML = `
                          <div class="paid-indicator">
                              <div class="unpaid-icon">
                                  <i class="fas fa-minus"></i>
                              </div>
                              <span class="text-sm text-gray-400">Belum dibayar </span>
                              
                          </div>
                      `;
      }
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  document.getElementById("selectedYear").textContent = year;
}

// Function to populate other payment table
function populateOtherPaymentTable(year) {
  const tableBody = document.getElementById("otherPaymentTable");
  tableBody.innerHTML = "";

  otherPayments[year].forEach((payment) => {
    const row = document.createElement("tr");

    // Type column
    const typeCell = document.createElement("td");
    typeCell.textContent = payment.type;
    typeCell.className = "font-medium";
    row.appendChild(typeCell);

    // Amount column
    const amountCell = document.createElement("td");
    amountCell.textContent = payment.amount;
    amountCell.className = "font-medium";
    row.appendChild(amountCell);

    // Status column
    const statusCell = document.createElement("td");
    if (payment.status === "Lunas") {
      statusCell.innerHTML = `<span class="badge badge-success">Lunas</span>`;
    } else {
      statusCell.innerHTML = `<span class="badge badge-warning">Belum Lunas</span>`;
    }
    row.appendChild(statusCell);

    // Date column
    const dateCell = document.createElement("td");
    dateCell.textContent = payment.date || "-";
    row.appendChild(dateCell);

    // Method column
    const methodCell = document.createElement("td");
    methodCell.textContent = payment.method || "-";
    row.appendChild(methodCell);

    // Receiver column
    const receiverCell = document.createElement("td");
    receiverCell.textContent = payment.receiver || "-";
    row.appendChild(receiverCell);

    tableBody.appendChild(row);
  });

  document.getElementById("selectedYearOther").textContent = year;
}

// Function to populate payment history table
function populatePaymentHistoryTable(searchTerm = "") {
  const tableBody = document.getElementById("paymentHistoryTable");
  tableBody.innerHTML = "";

  const filteredHistory = searchTerm
    ? paymentHistory.filter(
        (payment) =>
          payment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          payment.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
          payment.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          payment.receiver.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : paymentHistory;

  if (filteredHistory.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 7;
    cell.textContent = "Tidak ada data yang sesuai dengan pencarian";
    cell.className = "text-center py-4 text-gray-500";
    row.appendChild(cell);
    tableBody.appendChild(row);
    return;
  }

  filteredHistory.forEach((payment) => {
    const row = document.createElement("tr");

    // ID column
    const idCell = document.createElement("td");
    idCell.textContent = payment.id;
    idCell.className = "font-medium";
    row.appendChild(idCell);

    // Date column
    const dateCell = document.createElement("td");
    dateCell.textContent = payment.date;
    row.appendChild(dateCell);

    // Type column
    const typeCell = document.createElement("td");
    typeCell.textContent = payment.type;
    row.appendChild(typeCell);

    // Amount column
    const amountCell = document.createElement("td");
    amountCell.textContent = payment.amount;
    amountCell.className = "font-medium";
    row.appendChild(amountCell);

    // Notes column
    const notesCell = document.createElement("td");
    notesCell.textContent = payment.notes;
    row.appendChild(notesCell);

    // Method column
    const methodCell = document.createElement("td");
    methodCell.textContent = payment.method;
    row.appendChild(methodCell);

    // Receiver column
    const receiverCell = document.createElement("td");
    receiverCell.textContent = payment.receiver;
    row.appendChild(receiverCell);

    tableBody.appendChild(row);
  });
}

// Function to show notification
function showNotification(message, type = "success") {
  const notification = document.getElementById("notification");
  const notificationMessage = document.getElementById("notificationMessage");
  const notificationIcon = notification.querySelector(".notification-icon i");

  notificationMessage.textContent = message;

  if (type === "success") {
    notification.className = "notification notification-success show";
    notificationIcon.className = "fas fa-check";
  } else if (type === "info") {
    notification.className = "notification notification-info show";
    notificationIcon.className = "fas fa-info";
  }

  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}

// Tab switching
document.getElementById("tab-summary").addEventListener("click", function () {
  document.getElementById("tab-summary").classList.add("tab-active");
  document.getElementById("tab-summary").classList.remove("tab-inactive");
  document.getElementById("tab-history").classList.add("tab-inactive");
  document.getElementById("tab-history").classList.remove("tab-active");

  document.getElementById("tab-content-summary").classList.remove("hidden");
  document.getElementById("tab-content-history").classList.add("hidden");
});

document.getElementById("tab-history").addEventListener("click", function () {
  document.getElementById("tab-history").classList.add("tab-active");
  document.getElementById("tab-history").classList.remove("tab-inactive");
  document.getElementById("tab-summary").classList.add("tab-inactive");
  document.getElementById("tab-summary").classList.remove("tab-active");

  document.getElementById("tab-content-history").classList.remove("hidden");
  document.getElementById("tab-content-summary").classList.add("hidden");
});

// Academic year filter
document
  .getElementById("academicYearFilter")
  .addEventListener("change", function () {
    const selectedYear = this.value;
    populateMonthlyPaymentTable(selectedYear);
    populateOtherPaymentTable(selectedYear);
  });

// Search functionality
document.getElementById("searchPayment").addEventListener("input", function () {
  populatePaymentHistoryTable(this.value);
});

// Modal functionality
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".close-modal");

document
  .getElementById("btnInputPayment")
  .addEventListener("click", function () {
    document.getElementById("inputPaymentModal").classList.add("active");
  });

document.getElementById("btnEdit").addEventListener("click", function () {
  document.getElementById("editModal").classList.add("active");
});

document.getElementById("btnPengingat").addEventListener("click", function () {
  document.getElementById("pengingatModal").classList.add("active");
});

closeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    modals.forEach((modal) => {
      modal.classList.remove("active");
    });
  });
});

// Form submission
document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Hide modal
  document.getElementById("inputPaymentModal").classList.remove("active");

  // Show notification
  showNotification("Pembayaran berhasil disimpan!", "success");
});

document.getElementById("editForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Hide modal
  document.getElementById("editModal").classList.remove("active");

  // Show notification
  showNotification("Data siswa berhasil diubah!", "success");
});

document
  .getElementById("pengingatForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Hide modal
    document.getElementById("pengingatModal").classList.remove("active");

    // Show notification
    showNotification("Pesan telah dikirim", "success");
  });

// Download report
document
  .getElementById("downloadReport")
  .addEventListener("click", function () {
    // Show notification
    showNotification("Laporan pembayaran sedang diunduh...", "info");

    // Simulate download delay
    setTimeout(() => {
      showNotification("Laporan berhasil diunduh!", "success");
    }, 1500);
  });

// Initialize tables
populateMonthlyPaymentTable("2024/2025");
populateOtherPaymentTable("2024/2025");
populatePaymentHistoryTable();

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'94312be457a5ce8b',t:'MTc0NzgwMDA3NS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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

// Checkbox functionality payment input
const tagihanCheckboxes = document.querySelectorAll(".tagihan-checkbox");
const bulanCheckboxes = document.querySelectorAll(".bulan-checkbox");
const nominalInput = document.getElementById("currencyInput");

function updateTotal() {
  let totalTagihan = 0;
  let totalBulan = 0;

  // Hitung total tagihan
  tagihanCheckboxes.forEach((cb) => {
    if (cb.checked) {
      totalTagihan += parseInt(cb.getAttribute("data-nominal"));
    }
  });

  // Hitung jumlah bulan dipilih
  bulanCheckboxes.forEach((cb) => {
    if (cb.checked) totalBulan++;
  });

  const total = totalTagihan * totalBulan;
  nominalInput.value = total.toLocaleString("id-ID");
}

tagihanCheckboxes.forEach((cb) => cb.addEventListener("change", updateTotal));
bulanCheckboxes.forEach((cb) => cb.addEventListener("change", updateTotal));

// Atur tanggal hari ini secara otomatis
document.addEventListener("DOMContentLoaded", function () {
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("tanggal").value = today;
});

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

// Tab hsitory actions
document.addEventListener("DOMContentLoaded", function () {
  const hash = window.location.hash;

  if (hash === "#tab-history") {
    // 1. Nonaktifkan semua tab
    document
      .querySelectorAll(".tab-content")
      .forEach((el) => el.classList.add("hidden"));
    document.querySelectorAll(".tab-button").forEach((el) => {
      el.classList.remove("tab-active");
      el.classList.add("tab-inactive");
    });

    // 2. Aktifkan konten tab history
    const content = document.getElementById("tab-content-history");
    if (content) content.classList.remove("hidden");

    // 3. Aktifkan tombol tab history
    const tabButton = document.getElementById("tab-history");
    if (tabButton) {
      tabButton.classList.add("tab-active");
      tabButton.classList.remove("tab-inactive");
    }
  }
});

// Input payment popup trigger
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const popupTrigger = params.get("popup");

  if (popupTrigger === "input") {
    // Trigger click pada button id=btnInputPayment
    const btn = document.getElementById("btnInputPayment");
    if (btn) btn.click();
  }
});
