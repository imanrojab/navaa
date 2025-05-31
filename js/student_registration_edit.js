document.addEventListener("DOMContentLoaded", function () {
  // Tab functionality
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      tabBtns.forEach((b) => {
        b.classList.remove("active", "text-indigo-600", "border-indigo-600");
        b.classList.add("text-gray-500");
      });

      // Add active class to clicked button
      btn.classList.add("active", "text-indigo-600", "border-indigo-600");
      btn.classList.remove("text-gray-500");

      // Hide all tab contents
      tabContents.forEach((content) => {
        content.classList.add("hidden");
      });

      // Show the selected tab content
      const tabId = btn.getAttribute("data-tab");
      document.getElementById(tabId).classList.remove("hidden");
    });
  });

  // Payment method selection
  const paymentMethods = document.querySelectorAll(".payment-method");
  paymentMethods.forEach((method) => {
    method.addEventListener("click", () => {
      // Remove selected class from all methods
      paymentMethods.forEach((m) => {
        m.classList.remove("border-indigo-600", "bg-indigo-50");
      });

      // Add selected class to clicked method
      method.classList.add("border-indigo-600", "bg-indigo-50");
    });
  });

  // Modal functionality
  function setupModal(modalId, openBtnIds, closeBtnIds) {
    const modal = document.getElementById(modalId);

    // Open modal buttons
    openBtnIds.forEach((btnId) => {
      const btn = document.getElementById(btnId);
      if (btn) {
        btn.addEventListener("click", () => {
          modal.classList.remove("hidden");
          setTimeout(() => {
            modal.classList.add("show");
          }, 10);
        });
      }
    });

    // Close modal buttons
    closeBtnIds.forEach((btnId) => {
      const btn = document.getElementById(btnId);
      if (btn) {
        btn.addEventListener("click", () => {
          modal.classList.remove("show");
          setTimeout(() => {
            modal.classList.add("hidden");
          }, 300);
        });
      }
    });

    // Close on outside click
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
        setTimeout(() => {
          modal.classList.add("hidden");
        }, 300);
      }
    });
  }

  // Setup Photo Modal
  setupModal(
    "photosiswaModal",
    ["changePhotosiswaBtn"],
    ["closePhotosiswaModal", "cancelPhotosiswaUpload", "savePhotosiswaUpload"]
  );

  setupModal(
    "photokkModal",
    ["changePhotokkBtn"],
    ["closePhotokkModal", "cancelPhotokkUpload", "savePhotokkUpload"]
  );

  // Setup Payment Modal
  setupModal(
    "paymentModal",
    ["payNowBtn", "payNowBtnMobile", "proceedToPaymentBtn"],
    ["closePaymentModal", "cancelPaymentProcess", "confirmPaymentProcess"]
  );

  // Setup Save Changes Modal
  setupModal(
    "saveModal",
    ["savechangesBtn", "savechangesBtnMobile"],
    ["closesaveModal", "backFromsave", "confirmsave"]
  );

  // Setup Cancel Changes Modal
  setupModal(
    "cancelModal",
    ["cancelRegistrationBtn", "cancelRegistrationBtnMobile"],
    ["closeCancelModal", "backFromCancel", "confirmCancel"]
  );

  // Success messages
  document
    .getElementById("savePhotosiswaUpload")
    .addEventListener("click", () => {
      showToast("Foto berhasil diperbarui!");
    });

  // Success messages
  document.getElementById("savePhotokkUpload").addEventListener("click", () => {
    showToast("Foto berhasil diperbarui!");
  });

  document
    .getElementById("confirmPaymentProcess")
    .addEventListener("click", () => {
      showToast("Link pembayaran telah dikirim ke WhatsApp Anda!");
    });

  document.getElementById("confirmCancel").addEventListener("click", () => {
    showToast("Perubahan Anda telah dibatalkan!");

    // Arahkan ke halaman baru setelah 2 detik (2000ms)
    setTimeout(() => {
      window.location.href = "student_registration_view.html";
    }, 2000);
  });

  document.getElementById("confirmsave").addEventListener("click", () => {
    showToast("Perubahan Anda telah tersimpan!");

    // Arahkan ke halaman baru setelah 2 detik (2000ms)
    setTimeout(() => {
      window.location.href = "student_registration_view.html";
    }, 2000);
  });

  // Edit data functionality
  const editBtns = ["editDataBtn", "editDataBtnMobile"];
  editBtns.forEach((btnId) => {
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.addEventListener("click", () => {
        showToast("Fitur edit data akan segera tersedia!");
      });
    }
  });

  // Share functionality
  const shareBtn = document.getElementById("shareDataBtn");
  if (shareBtn) {
    shareBtn.addEventListener("click", () => {
      if (navigator.share) {
        navigator
          .share({
            title: "Pendaftaran PPDB Online",
            text: "Informasi pendaftaran PPDB Online dengan nomor pendaftaran PPDB2025-0001",
            url: window.location.href,
          })
          .catch((err) => {
            showToast("Fitur berbagi tidak tersedia di perangkat Anda");
          });
      } else {
        showToast("Fitur berbagi tidak tersedia di perangkat Anda");
      }
    });
  }

  // Toast notification
  function showToast(message) {
    // Create toast element
    const toast = document.createElement("div");
    toast.className =
      "fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg z-50 text-sm";
    toast.textContent = message;

    // Add to body
    document.body.appendChild(toast);

    // Animate in
    setTimeout(() => {
      toast.style.opacity = "1";
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  }
});

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'94723027e37ef888',t:'MTc0ODQ4MTgyNC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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

// Toggle payment section visibility re-registrationPayment
document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("togglePayment");
  const paymentDiv = document.getElementById("re-registrationPayment");

  checkbox.addEventListener("change", function () {
    paymentDiv.style.display = this.checked ? "block" : "none";
  });
});

// INPUT CURRENCY FORMAT
const input = document.getElementById("initialPayment");

input.addEventListener("input", function (e) {
  let value = e.target.value.replace(/[^,\d]/g, "").toString();
  let split = value.split(",");
  let sisa = split[0].length % 3;
  let rupiah = split[0].substr(0, sisa);
  let ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  if (ribuan) {
    let separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
  e.target.value = "Rp " + rupiah;
});

// Validasi input sebelum menyimpan perubahan
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("savechangesBtn")
    .addEventListener("click", function (e) {
      const requiredInputs = document.querySelectorAll(
        "input[required], select[required], textarea[required]"
      );
      let isValid = true;

      for (let input of requiredInputs) {
        if (!input.value.trim()) {
          alert(
            `Kolom "${
              input.placeholder || input.name || "ini"
            }" tidak boleh kosong`
          );
          input.focus();
          isValid = false;
          break;
        }
      }

      if (isValid) {
        // Lanjutkan proses simpan di sini
        alert("Data berhasil divalidasi dan siap disimpan!");
      }
    });
});

// Wali logic
const hasWali = document.getElementById("has_wali");
const waliContainer = document.getElementById("wali_container");
const waUtamaWaliContainer = document.getElementById("wa_utama_wali_container");

hasWali.addEventListener("change", function () {
  if (this.checked) {
    waliContainer.classList.remove("hidden");
    waUtamaWaliContainer.classList.remove("hidden");

    // Make wali fields required
    document.getElementById("nama_wali").setAttribute("required", "required");
    document
      .getElementById("hubungan_wali")
      .setAttribute("required", "required");
    document.getElementById("no_hp_wali").setAttribute("required", "required");
    document.getElementById("alamat_wali").setAttribute("required", "required");
  } else {
    waliContainer.classList.add("hidden");
    waUtamaWaliContainer.classList.add("hidden");

    // Remove required from wali fields
    document.getElementById("nama_wali").removeAttribute("required");
    document.getElementById("hubungan_wali").removeAttribute("required");
    document.getElementById("no_hp_wali").removeAttribute("required");
    document.getElementById("alamat_wali").removeAttribute("required");

    // Uncheck wali radio if selected
    if (document.getElementById("wa_utama_wali").checked) {
      document.getElementById("wa_utama_wali").checked = false;
    }
  }
});
