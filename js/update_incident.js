// Initialize Feather Icons
document.addEventListener("DOMContentLoaded", function () {
  feather.replace();

  // Add Party Button
  document.getElementById("addPartyBtn").addEventListener("click", function () {
    const partyCount =
      document.querySelectorAll("#involvedParties > div").length + 1;
    const newParty = document.createElement("div");
    newParty.className = "border border-gray-200 rounded-lg p-4 mt-4 mb-4";
    newParty.innerHTML = `
                    <div class="flex justify-between items-center  mb-3">
                        <h3 class="font-medium text-gray-700">Pihak #${partyCount}</h3>
                        <div class="flex items-center">
                            <select class="form-select w-24 text-sm mr-2">
                                <option value="perpetrator">Pelaku</option>
                                <option value="victim">Korban</option>
                                <option value="witness">Saksi</option>
                                <option value="other" selected>Lainnya</option>
                            </select>
                            <button type="button" class="text-red-500 hover:text-red-700 delete-party">
                                <i data-feather="trash-2" class="w-4 h-4"></i>
                            </button>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm text-gray-500 mb-1 required-field">Nama Siswa/Pihak</label>
                            <input type="text" class="form-input" placeholder="Masukkan nama">
                        </div>
                        <div>
                            <label class="block text-sm text-gray-500 mb-1">Nomor Induk / ID Siswa</label>
                            <input type="text" class="form-input" placeholder="Masukkan nomor induk">
                        </div>
                        <div>
                            <label class="block text-sm text-gray-500 mb-1">Kelas / Jenjang</label>
                            <input type="text" class="form-input" placeholder="Masukkan kelas">
                        </div>
                        <div>
                            <label class="block text-sm text-gray-500 mb-1">Peran dalam Kejadian</label>
                            <input type="text" class="form-input" placeholder="Masukkan peran">
                        </div>
                    </div>
                `;

    document.getElementById("involvedParties").appendChild(newParty);
    feather.replace();

    // Add event listener to the new delete button
    newParty
      .querySelector(".delete-party")
      .addEventListener("click", function () {
        newParty.remove();
      });
  });

  // Delete party buttons
  document.querySelectorAll("#involvedParties button").forEach((button) => {
    button.addEventListener("click", function () {
      const partyDiv = this.closest(".border");
      partyDiv.remove();
    });
  });

  // Form submission
  document
    .getElementById("updateIncidentForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // Show success message
      const successMessage = document.createElement("div");
      successMessage.className =
        "fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center";
      successMessage.innerHTML = `
                    <i data-feather="check-circle" class="w-5 h-5 mr-2"></i>
                    <span>Perubahan berhasil disimpan!</span>
                `;
      document.body.appendChild(successMessage);
      feather.replace();

      // Remove the message after 3 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 3000);
    });

  // Change status button
  document
    .getElementById("changeStatusBtn")
    .addEventListener("click", function () {
      const statusSelect = document.getElementById("statusSelect");
      statusSelect.focus();
      statusSelect.classList.add("ring-2", "ring-indigo-300");

      setTimeout(() => {
        statusSelect.classList.remove("ring-2", "ring-indigo-300");
      }, 2000);
    });

  // Print report button
  document
    .getElementById("printReportBtn")
    .addEventListener("click", function () {
      alert("Menyiapkan laporan untuk dicetak...");
      // In a real application, you would open a print dialog here
    });

  // Export report button
  document
    .getElementById("exportReportBtn")
    .addEventListener("click", function () {
      const exportOptions = document.createElement("div");
      exportOptions.className =
        "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50";
      exportOptions.innerHTML = `
                    <div class="bg-white rounded-lg shadow-xl p-6 w-80">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">Ekspor Laporan</h3>
                        <div class="space-y-3">
                            <button class="w-full py-2 px-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-left flex items-center">
                                <i data-feather="file-text" class="w-5 h-5 mr-3 text-blue-500"></i>
                                <span>PDF</span>
                            </button>
                            <button class="w-full py-2 px-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-left flex items-center">
                                <i data-feather="file" class="w-5 h-5 mr-3 text-green-500"></i>
                                <span>Excel</span>
                            </button>
                            <button class="w-full py-2 px-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-left flex items-center">
                                <i data-feather="file" class="w-5 h-5 mr-3 text-indigo-500"></i>
                                <span>Word</span>
                            </button>
                        </div>
                        <div class="mt-5 flex justify-end">
                            <button id="closeExportOptions" class="py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg">Tutup</button>
                        </div>
                    </div>
                `;

      document.body.appendChild(exportOptions);
      feather.replace();

      document
        .getElementById("closeExportOptions")
        .addEventListener("click", function () {
          exportOptions.remove();
        });

      exportOptions.addEventListener("click", function (e) {
        if (e.target === exportOptions) {
          exportOptions.remove();
        }
      });
    });

  // Highlight changes
  const highlightedElements = document.querySelectorAll(".change-highlight");
  setTimeout(() => {
    highlightedElements.forEach((el) => {
      el.classList.remove("change-highlight");
    });
  }, 3000);

  // Status select change
  document
    .getElementById("statusSelect")
    .addEventListener("change", function () {
      const status = this.value;
      // You could update UI elements based on the selected status

      // Add a new timeline entry
      const timeline = document.querySelector(".timeline-item").parentNode;
      const newTimelineItem = document.createElement("div");
      newTimelineItem.className = "timeline-item relative pl-6 pb-6";
      newTimelineItem.innerHTML = `
                    <div class="timeline-dot bg-yellow-500"></div>
                    <div>
                        <p class="text-sm font-medium text-gray-800">Status Diubah</p>
                        <p class="text-xs text-gray-500">${new Date().toLocaleString(
                          "id-ID"
                        )}</p>
                        <p class="text-sm text-gray-600 mt-1">Status diubah menjadi "${
                          status === "pending"
                            ? "Menunggu"
                            : status === "progress"
                            ? "Dalam Proses"
                            : "Selesai"
                        }"</p>
                    </div>
                `;

      timeline.insertBefore(newTimelineItem, timeline.firstChild);
    });
});

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'94629fea7126f8ff',t:'MTc0ODMxODYyOS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
