Mantap, Rojab. Kalau kamu baru mulai dan ingin setup SCSS dari nol, berikut adalah panduan paling simpel dan langsung jalan untuk digunakan di proyek HTML/CSS biasa — tanpa framework seperti Laravel atau React.

⸻
Coba kita buat

✅ Langkah Setup SCSS di Proyek Kamu (Pemula Friendly)

🧰 1. Install Node.js (Sekali Saja)

Kalau belum punya, download dan install dari:
👉 https://nodejs.org/

Setelah terinstal, cek lewat terminal:

node -v
npm -v

⸻

📦 2. Inisialisasi Proyek & Install SCSS Compiler

Buka terminal di folder proyek kamu dan jalankan:

npm init -y
npm install -D sass

-D artinya devDependencies (hanya dibutuhkan saat development)

⸻

📁 3. Struktur Folder Disarankan

/proyek-mu
├── index.html
├── scss/
│ └── style.scss
├── css/
│ └── style.css (hasil compile otomatis)
└── package.json

⸻

⚙️ 4. Tambah Script SCSS ke package.json

Di dalam file package.json, ubah bagian "scripts" jadi seperti ini:

"scripts": {
"scss": "sass scss/style.scss css/style.css",
"scss:watch": "sass --watch scss/style.scss css/style.css"
}

⸻

▶️ 5. Compile Sekali atau Otomatis
• Compile sekali:

npm run scss

    •	Compile otomatis saat kamu edit:

=== npm run scss:watch ===

Ini akan terus memantau style.scss dan mengupdate style.css saat kamu edit.

⸻

🧪 6. Hubungkan ke HTML

Di index.html, panggil hasil compile-nya (css/style.css), bukan file .scss.

<link rel="stylesheet" href="css/style.css">

⸻

📌 Hasil Akhir:
• Kamu bisa menulis CSS rapi seperti ini di scss/style.scss:

.halaman-dashboard {
.box-satu { background: red; }
}

    •	Dan itu otomatis dikonversi jadi:

.halaman-dashboard .box-satu { background: red; }

⸻

Kalau kamu mau, aku bisa bantu kirim file starter kit zip siap pakai berisi:
• HTML
• SCSS
• Struktur folder
• package.json

Mau?
