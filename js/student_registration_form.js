// Validasi NIK
function validateNIK() {
  const input = document.getElementById("nik");
  const errorText = document.getElementById("nikError");
  const onlyDigits = input.value.replace(/[^0-9]/g, "");

  // Set input value ke angka saja maksimal 16
  input.value = onlyDigits.slice(0, 16);

  if (onlyDigits.length === 16) {
    // Valid
    input.classList.remove("border-red-500");
    errorText.classList.add("hidden");
  } else {
    // Invalid
    input.classList.add("border-red-500");
    errorText.classList.remove("hidden");
  }
}

// Validasi KK
function validateKK() {
  const input = document.getElementById("kk");
  const errorText = document.getElementById("kkError");
  const onlyDigits = input.value.replace(/[^0-9]/g, "");

  // Set input value ke angka saja maksimal 16
  input.value = onlyDigits.slice(0, 16);

  if (onlyDigits.length === 16) {
    // Valid
    input.classList.remove("border-red-500");
    errorText.classList.add("hidden");
  } else {
    // Invalid
    input.classList.add("border-red-500");
    errorText.classList.remove("hidden");
  }
}

// Validasi NISN
function validateNISN() {
  const input = document.getElementById("nisn");
  const errorText = document.getElementById("nisnError");
  const onlyDigits = input.value.replace(/[^0-9]/g, "");

  // Set input value ke angka saja maksimal 10
  input.value = onlyDigits.slice(0, 10);

  if (onlyDigits.length === 10) {
    // Valid
    input.classList.remove("border-red-500");
    errorText.classList.add("hidden");
  } else {
    // Invalid
    input.classList.add("border-red-500");
    errorText.classList.remove("hidden");
  }
}

// Current section tracking
let currentSection = 1;
let selectedPayment = null;

// Location data
const locationData = {
  jawa_barat: {
    name: "Jawa Barat",
    kabupaten: {
      bandung: {
        name: "Bandung",
        kecamatan: {
          cibeunying: {
            name: "Cibeunying",
            kelurahan: ["Cihapit", "Sukamaju"],
          },
          coblong: {
            name: "Coblong",
            kelurahan: ["Dago", "Sekeloa"],
          },
        },
      },
      bogor: {
        name: "Bogor",
        kecamatan: {
          bogor_utara: {
            name: "Bogor Utara",
            kelurahan: ["Cimahpar", "Tanah Baru"],
          },
          bogor_selatan: {
            name: "Bogor Selatan",
            kelurahan: ["Empang", "Batutulis"],
          },
        },
      },
    },
  },
  jawa_tengah: {
    name: "Jawa Tengah",
    kabupaten: {
      semarang: {
        name: "Semarang",
        kecamatan: {
          banyumanik: {
            name: "Banyumanik",
            kelurahan: ["Srondol", "Pudakpayung"],
          },
          tembalang: {
            name: "Tembalang",
            kelurahan: ["Bulusan", "Kramas"],
          },
        },
      },
      solo: {
        name: "Solo",
        kecamatan: {
          jebres: {
            name: "Jebres",
            kelurahan: ["Mojosongo", "Purwodiningratan"],
          },
          laweyan: {
            name: "Laweyan",
            kelurahan: ["Bumi", "Karangasem"],
          },
        },
      },
    },
  },
};

// Update Kabupaten based on Provinsi selection
function updateKabupaten() {
  const provinsiSelect = document.getElementById("provinsi");
  const kabupatenSelect = document.getElementById("kabupaten");
  const kecamatanSelect = document.getElementById("kecamatan");
  const kelurahanSelect = document.getElementById("kelurahan");

  // Reset and disable lower level selects
  kabupatenSelect.innerHTML =
    '<option value="" selected disabled>Pilih Kabupaten/Kota</option>';
  kecamatanSelect.innerHTML =
    '<option value="" selected disabled>Pilih Kecamatan</option>';
  kelurahanSelect.innerHTML =
    '<option value="" selected disabled>Pilih Kelurahan</option>';

  kecamatanSelect.disabled = true;
  kelurahanSelect.disabled = true;

  const provinsiValue = provinsiSelect.value;

  if (provinsiValue && locationData[provinsiValue]) {
    // Enable kabupaten select
    kabupatenSelect.disabled = false;

    // Add kabupaten options
    const kabupatenData = locationData[provinsiValue].kabupaten;
    for (const kabId in kabupatenData) {
      const option = document.createElement("option");
      option.value = kabId;
      option.textContent = kabupatenData[kabId].name;
      kabupatenSelect.appendChild(option);
    }
  }
}

// Update Kecamatan based on Kabupaten selection
function updateKecamatan() {
  const provinsiSelect = document.getElementById("provinsi");
  const kabupatenSelect = document.getElementById("kabupaten");
  const kecamatanSelect = document.getElementById("kecamatan");
  const kelurahanSelect = document.getElementById("kelurahan");

  // Reset and disable lower level selects
  kecamatanSelect.innerHTML =
    '<option value="" selected disabled>Pilih Kecamatan</option>';
  kelurahanSelect.innerHTML =
    '<option value="" selected disabled>Pilih Kelurahan</option>';

  kelurahanSelect.disabled = true;

  const provinsiValue = provinsiSelect.value;
  const kabupatenValue = kabupatenSelect.value;

  if (
    provinsiValue &&
    kabupatenValue &&
    locationData[provinsiValue] &&
    locationData[provinsiValue].kabupaten[kabupatenValue]
  ) {
    // Enable kecamatan select
    kecamatanSelect.disabled = false;

    // Add kecamatan options
    const kecamatanData =
      locationData[provinsiValue].kabupaten[kabupatenValue].kecamatan;
    for (const kecId in kecamatanData) {
      const option = document.createElement("option");
      option.value = kecId;
      option.textContent = kecamatanData[kecId].name;
      kecamatanSelect.appendChild(option);
    }
  }
}

// Update Kelurahan based on Kecamatan selection
function updateKelurahan() {
  const provinsiSelect = document.getElementById("provinsi");
  const kabupatenSelect = document.getElementById("kabupaten");
  const kecamatanSelect = document.getElementById("kecamatan");
  const kelurahanSelect = document.getElementById("kelurahan");

  // Reset kelurahan select
  kelurahanSelect.innerHTML =
    '<option value="" selected disabled>Pilih Kelurahan</option>';

  const provinsiValue = provinsiSelect.value;
  const kabupatenValue = kabupatenSelect.value;
  const kecamatanValue = kecamatanSelect.value;

  if (
    provinsiValue &&
    kabupatenValue &&
    kecamatanValue &&
    locationData[provinsiValue] &&
    locationData[provinsiValue].kabupaten[kabupatenValue] &&
    locationData[provinsiValue].kabupaten[kabupatenValue].kecamatan[
      kecamatanValue
    ]
  ) {
    // Enable kelurahan select
    kelurahanSelect.disabled = false;

    // Add kelurahan options
    const kelurahanData =
      locationData[provinsiValue].kabupaten[kabupatenValue].kecamatan[
        kecamatanValue
      ].kelurahan;
    kelurahanData.forEach((kelurahan) => {
      const option = document.createElement("option");
      option.value = kelurahan.toLowerCase().replace(/\s+/g, "_");
      option.textContent = kelurahan;
      kelurahanSelect.appendChild(option);
    });
  }
}

// Handle section navigation
function nextSection(section) {
  const currentSectionElement = document.getElementById(`section${section}`);
  const requiredFields = currentSectionElement.querySelectorAll("[required]");
  let isValid = true;

  requiredFields.forEach((field) => {
    const fieldValue = field.value.trim();
    const digitsOnly = fieldValue.replace(/[^0-9]/g, "");

    // Validasi khusus berdasarkan ID
    if (field.id === "nik") {
      if (digitsOnly.length !== 16) {
        isValid = false;
        field.classList.add("border-red-500");
        document.getElementById("nikError").classList.remove("hidden");
        return;
      } else {
        document.getElementById("nikError").classList.add("hidden");
        field.classList.remove("border-red-500");
        return;
      }
    }

    if (field.id === "kk") {
      if (digitsOnly.length !== 16) {
        isValid = false;
        field.classList.add("border-red-500");
        document.getElementById("kkError").classList.remove("hidden");
        return;
      } else {
        document.getElementById("kkError").classList.add("hidden");
        field.classList.remove("border-red-500");
        return;
      }
    }

    if (field.id === "nisn") {
      if (digitsOnly.length !== 10) {
        isValid = false;
        field.classList.add("border-red-500");
        document.getElementById("nisnError").classList.remove("hidden");
        return;
      } else {
        document.getElementById("nisnError").classList.add("hidden");
        field.classList.remove("border-red-500");
        return;
      }
    }

    // Validasi default
    if (!fieldValue) {
      isValid = false;
      field.classList.add("border-red-500");
    } else {
      field.classList.remove("border-red-500");
    }
  });

  if (!isValid) {
    alert("Mohon lengkapi semua field yang wajib diisi dengan benar.");
    return;
  }

  // Lanjut ke section berikutnya
  document.getElementById(`section${section}`).classList.remove("active");
  document.getElementById(`section${section + 1}`).classList.add("active");

  // Update progress bar
  document.getElementById(`step${section}`).classList.remove("active");
  document.getElementById(`step${section}`).classList.add("completed");
  document.getElementById(`line${section}`).classList.add("active");
  document.getElementById(`step${section + 1}`).classList.add("active");

  currentSection = section + 1;
  window.scrollTo(0, 0);
}

// // Check if WhatsApp utama is selected
// const waUtamaSelected = document.querySelector(
//   'input[name="wa_utama"]:checked'
// );
// if (!waUtamaSelected) {
//   isValid = false;
//   alert("Silakan pilih nomor WhatsApp utama");
// }

// if (isValid) {
//   showStep(3);
// }

function prevSection(section) {
  // Hide current section
  document.getElementById(`section${section}`).classList.remove("active");
  // Show previous section
  document.getElementById(`section${section - 1}`).classList.add("active");
  // Update progress bar
  document.getElementById(`step${section}`).classList.remove("active");
  document.getElementById(`line${section - 1}`).classList.remove("active");
  document.getElementById(`step${section - 1}`).classList.remove("completed");
  document.getElementById(`step${section - 1}`).classList.add("active");

  // Update current section
  currentSection = section - 1;

  // Scroll to top
  window.scrollTo(0, 0);
}

// Handle program kelas and jurusan selection
document
  .getElementById("jenjangpendidikan")
  .addEventListener("change", function () {
    const jurusanContainer = document.getElementById("jurusanContainer");
    const jurusanSelect = document.getElementById("jurusan");

    // Clear previous options
    jurusanSelect.innerHTML =
      '<option value="" selected disabled>Pilih Jurusan</option>';

    if (this.value === "SMA") {
      jurusanContainer.style.display = "block";

      // Add SMA options
      const smaOptions = ["IPA", "IPS"];
      smaOptions.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        jurusanSelect.appendChild(optionElement);
      });

      jurusanSelect.setAttribute("required", "");
    } else if (this.value === "SMK") {
      jurusanContainer.style.display = "block";

      // Add SMK options
      const smkOptions = [
        "Teknik Komputer dan Jaringan",
        "Rekayasa Perangkat Lunak",
        "Multimedia",
        "Akuntansi",
        "Administrasi Perkantoran",
      ];
      smkOptions.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        jurusanSelect.appendChild(optionElement);
      });

      jurusanSelect.setAttribute("required", "");
    } else {
      jurusanContainer.style.display = "none";
      jurusanSelect.removeAttribute("required");
    }
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

// Handle payment method selection
function selectPayment(element, method) {
  // Remove selected class from all payment methods
  document.querySelectorAll(".payment-method").forEach((el) => {
    el.classList.remove("selected");
  });

  // Add selected class to clicked element
  element.classList.add("selected");

  // Set selected payment method
  document.getElementById("selected-payment").value = method;
  selectedPayment = method;
}

// Handle form submission
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Check if payment method is selected
    if (!selectedPayment) {
      alert("Mohon pilih metode pembayaran.");
      return;
    }

    // Show success modal
    document.getElementById("successModal").classList.remove("hidden");
  });

// Handle image upload preview
document.getElementById("file-upload").addEventListener("change", function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("preview-image").src = e.target.result;
      document.getElementById("preview-container").classList.remove("hidden");
    };
    reader.readAsDataURL(file);
  }
});

// Format input as Rupiah
function formatRupiahInput(input) {
  let value = input.value.replace(/[^0-9]/g, ""); // Hanya angka
  if (value === "") {
    document.getElementById("rupiahValue").value = "";
    input.value = "";
    return;
  }

  const formatted = new Intl.NumberFormat("id-ID").format(value);
  input.value = "Rp " + formatted;
  document.getElementById("rupiahValue").value = value; // Nilai mentah
}

// Go to payment page
function goToPayment() {
  // In a real application, this would redirect to a payment page
  // For this demo, we'll just close the modal
  document.getElementById("successModal").classList.add("hidden");
  alert("Anda akan diarahkan ke halaman pembayaran.");
}

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'946d6c4f1246807d',t:'MTc0ODQzMTg1OS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
