// Navigation function
function navigateTo(section) {
  const modal = document.getElementById("settingModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");

  // Set title based on section
  const titles = {
    "manajemen-pengguna": "Manajemen Pengguna",
    "pengaturan-ppdb": "Pengaturan PPDB",
    "perizinan-siswa": "Pengaturan Perizinan Siswa",
    "pendidikan-formal": "Pengaturan Pendidikan Formal (Sekolah)",
    "pendidikan-nonformal": "Pengaturan Pendidikan Non-Formal (Mengaji)",
    "log-aktivitas": "Log Aktivitas",
  };

  modalTitle.textContent = titles[section];

  // Generate content based on section
  let content = "";

  switch (section) {
    case "manajemen-pengguna":
      content = `
                        <div class="space-y-6">
                            <div class="flex justify-between items-center">
                                <h4 class="font-medium text-gray-700">Daftar Pengguna</h4>
                                <button class="px-3 py-1 bg-indigo-600 text-white rounded-lg text-sm flex items-center">
                                    <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                    </svg>
                                    Tambah Pengguna
                                </button>
                            </div>
                            <div class="overflow-x-auto">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
                                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Peran</th>
                                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td class="px-6 py-4 whitespace-nowrap">Ahmad Fauzi</td>
                                            <td class="px-6 py-4 whitespace-nowrap">ahmad@example.com</td>
                                            <td class="px-6 py-4 whitespace-nowrap">Admin</td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Aktif</span>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <button class="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                                                <button class="text-red-600 hover:text-red-900">Hapus</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="px-6 py-4 whitespace-nowrap">Siti Aminah</td>
                                            <td class="px-6 py-4 whitespace-nowrap">siti@example.com</td>
                                            <td class="px-6 py-4 whitespace-nowrap">Guru</td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Aktif</span>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <button class="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                                                <button class="text-red-600 hover:text-red-900">Hapus</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    `;
      break;

    case "pengaturan-ppdb":
      content = `
                        <div class="space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="space-y-4">
                                    <h4 class="font-medium text-gray-700">Periode Pendaftaran</h4>
                                    <div class="space-y-2">
                                        <label class="block text-sm font-medium text-gray-700">Tanggal Mulai</label>
                                        <input type="date" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                                    </div>
                                    <div class="space-y-2">
                                        <label class="block text-sm font-medium text-gray-700">Tanggal Selesai</label>
                                        <input type="date" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                                    </div>
                                </div>
                                <div class="space-y-4">
                                    <h4 class="font-medium text-gray-700">Kuota Penerimaan</h4>
                                    <div class="space-y-2">
                                        <label class="block text-sm font-medium text-gray-700">Jumlah Maksimal Siswa</label>
                                        <input type="number" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="100">
                                    </div>
                                    <div class="space-y-2">
                                        <label class="block text-sm font-medium text-gray-700">Kuota Jalur Prestasi</label>
                                        <input type="number" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="20">
                                    </div>
                                </div>
                            </div>
                            
                            <div class="space-y-4">
                                <h4 class="font-medium text-gray-700">Persyaratan Dokumen</h4>
                                <div class="space-y-2">
                                    <div class="flex items-center">
                                        <input type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" checked>
                                        <label class="ml-2 block text-sm text-gray-700">Akta Kelahiran</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" checked>
                                        <label class="ml-2 block text-sm text-gray-700">Kartu Keluarga</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" checked>
                                        <label class="ml-2 block text-sm text-gray-700">Ijazah/STTB</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                                        <label class="ml-2 block text-sm text-gray-700">Sertifikat Prestasi</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
      break;

    case "perizinan-siswa":
      content = `
                        <div class="space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="space-y-4">
                                    <h4 class="font-medium text-gray-700">Jenis Perizinan</h4>
                                    <div class="space-y-2">
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center">
                                                <input type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" checked>
                                                <label class="ml-2 block text-sm text-gray-700">Sakit</label>
                                            </div>
                                            <input type="number" class="w-16 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" value="3" min="1">
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center">
                                                <input type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" checked>
                                                <label class="ml-2 block text-sm text-gray-700">Izin Keluarga</label>
                                            </div>
                                            <input type="number" class="w-16 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" value="2" min="1">
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center">
                                                <input type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" checked>
                                                <label class="ml-2 block text-sm text-gray-700">Kegiatan Sekolah</label>
                                            </div>
                                            <input type="number" class="w-16 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" value="5" min="1">
                                        </div>
                                    </div>
                                </div>
                                <div class="space-y-4">
                                    <h4 class="font-medium text-gray-700">Pengaturan Notifikasi</h4>
                                    <div class="space-y-2">
                                        <div class="flex items-center">
                                            <input type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" checked>
                                            <label class="ml-2 block text-sm text-gray-700">Notifikasi ke Wali Kelas</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" checked>
                                            <label class="ml-2 block text-sm text-gray-700">Notifikasi ke Orang Tua</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                                            <label class="ml-2 block text-sm text-gray-700">Notifikasi ke Kepala Sekolah</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="space-y-4">
                                <h4 class="font-medium text-gray-700">Batas Ketidakhadiran</h4>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div class="space-y-2">
                                        <label class="block text-sm font-medium text-gray-700">Batas Maksimal Ketidakhadiran</label>
                                        <div class="flex items-center">
                                            <input type="number" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" value="15">
                                            <span class="ml-2 text-sm text-gray-500">hari/semester</span>
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <label class="block text-sm font-medium text-gray-700">Tindakan Jika Melebihi Batas</label>
                                        <select class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                                            <option>Peringatan</option>
                                            <option>Panggilan Orang Tua</option>
                                            <option>Skorsing</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
      break;

    case "pendidikan-formal":
      content = `
                        <div class="space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="space-y-4">
                                    <h4 class="font-medium text-gray-700">Informasi Sekolah</h4>
                                    <div class="space-y-2">
                                        <label class="block text-sm font-medium text-gray-700">Nama Sekolah</label>
                                        <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" value="SMP Al-Hikmah">
                                    </div>
                                    <div class="space-y-2">
                                        <label class="block text-sm font-medium text-gray-700">NPSN</label>
                                        <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" value="20123456">
                                    </div>
                                </div>
                                <div class="space-y-4">
                                    <h4 class="font-medium text-gray-700">Tahun Ajaran</h4>
                                    <div class="space-y-2">
                                        <label class="block text-sm font-medium text-gray-700">Tahun Ajaran Aktif</label>
                                        <select class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                                            <option>2023/2024</option>
                                            <option>2022/2023</option>
                                            <option>2021/2022</option>
                                        </select>
                                    </div>
                                    <div class="space-y-2">
                                        <label class="block text-sm font-medium text-gray-700">Semester Aktif</label>
                                        <select class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                                            <option>Ganjil</option>
                                            <option>Genap</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="space-y-4">
                                <h4 class="font-medium text-gray-700">Kurikulum</h4>
                                <div class="space-y-2">
                                    <label class="block text-sm font-medium text-gray-700">Kurikulum yang Digunakan</label>
                                    <select class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                                        <option>Kurikulum Merdeka</option>
                                        <option>Kurikulum 2013</option>
                                        <option>KTSP</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div class="space-y-4">
                                <h4 class="font-medium text-gray-700">Jadwal Pelajaran</h4>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm text-gray-500">Atur jadwal pelajaran untuk setiap kelas</span>
                                    <button class="px-3 py-1 bg-indigo-600 text-white rounded-lg text-sm">Kelola Jadwal</button>
                                </div>
                            </div>
                        </div>
                    `;
      break;

    case "pendidikan-nonformal":
      content = `
                        <div class="space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="space-y-4">
                                    <h4 class="font-medium text-gray-700">Program Mengaji</h4>
                                    <div class="space-y-2">
                                        <label class="block text-sm font-medium text-gray-700">Metode Pembelajaran</label>
                                        <select class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                                            <option>Metode Iqro</option>
                                            <option>Metode Qiroati</option>
                                            <option>Metode Tilawati</option>
                                            <option>Metode Ummi</option>
                                        </select>
                                    </div>
                                    <div class="space-y-2">
                                        <label class="block text-sm font-medium text-gray-700">Waktu Pelaksanaan</label>
                                        <select class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                                            <option>Setelah Ashar</option>
                                            <option>Setelah Maghrib</option>
                                            <option>Pagi Hari</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="space-y-4">
                                    <h4 class="font-medium text-gray-700">Pengajar</h4>
                                    <div class="space-y-2">
                                        <label class="block text-sm font-medium text-gray-700">Jumlah Pengajar</label>
                                        <input type="number" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" value="5">
                                    </div>
                                    <div class="space-y-2">
                                        <label class="block text-sm font-medium text-gray-700">Rasio Pengajar:Siswa</label>
                                        <select class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                                            <option>1:10</option>
                                            <option>1:15</option>
                                            <option>1:20</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="space-y-4">
                                <h4 class="font-medium text-gray-700">Materi Pembelajaran</h4>
                                <div class="space-y-2">
                                    <div class="flex items-center">
                                        <input type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" checked>
                                        <label class="ml-2 block text-sm text-gray-700">Baca Al-Quran</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" checked>
                                        <label class="ml-2 block text-sm text-gray-700">Hafalan Surat Pendek</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" checked>
                                        <label class="ml-2 block text-sm text-gray-700">Tajwid</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                                        <label class="ml-2 block text-sm text-gray-700">Bahasa Arab Dasar</label>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="space-y-4">
                                <h4 class="font-medium text-gray-700">Evaluasi</h4>
                                <div class="space-y-2">
                                    <label class="block text-sm font-medium text-gray-700">Periode Evaluasi</label>
                                    <select class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                                        <option>Mingguan</option>
                                        <option>Bulanan</option>
                                        <option>Per 3 Bulan</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    `;
      break;

    case "log-aktivitas":
      content = `
                        <div class="space-y-6">
                            <div class="flex justify-between items-center">
                                <div class="flex space-x-2">
                                    <select class="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm">
                                        <option>Semua Aktivitas</option>
                                        <option>Login</option>
                                        <option>Perubahan Data</option>
                                        <option>Penghapusan</option>
                                    </select>
                                    <select class="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm">
                                        <option>Semua Pengguna</option>
                                        <option>Admin</option>
                                        <option>Guru</option>
                                        <option>Staff</option>
                                    </select>
                                </div>
                                <button class="px-3 py-1 bg-indigo-600 text-white rounded-lg text-sm flex items-center">
                                    <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                    </svg>
                                    Ekspor Log
                                </button>
                            </div>
                            
                            <div class="overflow-x-auto">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Waktu</th>
                                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pengguna</th>
                                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktivitas</th>
                                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Detail</th>
                                        </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-10-15 08:30:45</td>
                                            <td class="px-6 py-4 whitespace-nowrap">Ahmad Fauzi</td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Login</span>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Login berhasil dari 192.168.1.1</td>
                                        </tr>
                                        <tr>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-10-15 09:15:22</td>
                                            <td class="px-6 py-4 whitespace-nowrap">Ahmad Fauzi</td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Perubahan Data</span>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mengubah pengaturan PPDB</td>
                                        </tr>
                                        <tr>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-10-15 10:05:11</td>
                                            <td class="px-6 py-4 whitespace-nowrap">Siti Aminah</td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Login</span>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Login berhasil dari 192.168.1.5</td>
                                        </tr>
                                        <tr>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-10-15 10:30:45</td>
                                            <td class="px-6 py-4 whitespace-nowrap">Siti Aminah</td>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Akses</span>
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mengakses data siswa kelas 7A</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                            <div class="flex justify-between items-center">
                                <div class="text-sm text-gray-500">Menampilkan 4 dari 120 log</div>
                                <div class="flex space-x-2">
                                    <button class="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg text-sm">Sebelumnya</button>
                                    <button class="px-3 py-1 bg-indigo-600 text-white rounded-lg text-sm">Selanjutnya</button>
                                </div>
                            </div>
                        </div>
                    `;
      break;
  }

  modalContent.innerHTML = content;
  modal.classList.remove("hidden");
}

function closeModal() {
  const modal = document.getElementById("settingModal");
  modal.classList.add("hidden");
}

function saveSettings() {
  // Simulate saving settings
  const modal = document.getElementById("settingModal");

  // Show success notification
  const notification = document.createElement("div");
  notification.className =
    "fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg";
  notification.innerHTML = `
                <div class="flex items-center">
                    <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Pengaturan berhasil disimpan!</span>
                </div>
            `;
  document.body.appendChild(notification);

  // Close modal
  modal.classList.add("hidden");

  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("settingModal");
  if (event.target === modal) {
    closeModal();
  }
};

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'9484c3772709fe0d',t:'MTc0ODY3NjYwMS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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

// Tab switching functionality
document.addEventListener("DOMContentLoaded", function () {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all tabs
      tabBtns.forEach((b) => b.classList.remove("tab-active"));
      tabContents.forEach((c) => c.classList.add("hidden"));

      // Add active class to clicked tab
      btn.classList.add("tab-active");
      const tabId = btn.getAttribute("data-tab");
      document.getElementById(tabId).classList.remove("hidden");
    });
  });

  // Filter panel toggle
  const filterBtn = document.getElementById("filterBtn");
  const filterPanel = document.getElementById("filterPanel");

  filterBtn.addEventListener("click", () => {
    filterPanel.classList.toggle("hidden");
  });

  // Dropdown menu functionality
  const dropBtns = document.querySelectorAll(".dropbtn");

  dropBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const dropdown = btn.nextElementSibling;

      // Close all other dropdowns first
      document.querySelectorAll(".dropdown-content").forEach((content) => {
        if (content !== dropdown) {
          content.classList.remove("show");
        }
      });

      // Toggle current dropdown
      dropdown.classList.toggle("show");
    });
  });

  // Close dropdowns when clicking elsewhere
  window.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-content").forEach((content) => {
      content.classList.remove("show");
    });
  });
});

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'9417ec09a0e1933e',t:'MTc0NzUzNTMxNS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
