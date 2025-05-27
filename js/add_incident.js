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
                    <div class="flex justify-between items-center mb-3">
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
    .getElementById("incidentForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Laporan berhasil disimpan!");
      // In a real application, you would submit the form data to the server here
    });

  // Save as draft button
  document
    .getElementById("saveAsDraftBtn")
    .addEventListener("click", function () {
      alert("Laporan berhasil disimpan sebagai draft!");
      // In a real application, you would save the form data as a draft here
    });

  // Status select change
  document
    .getElementById("statusSelect")
    .addEventListener("change", function () {
      const status = this.value;
      // You could update UI elements based on the selected status
    });
});

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'9462660b57dfce5b',t:'MTc0ODMxNjI1OS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
