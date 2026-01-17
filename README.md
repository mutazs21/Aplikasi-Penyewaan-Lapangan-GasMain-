# ⚽ GasMain - Aplikasi Penyewaan Lapangan Olahraga

![GasMain Banner](https://img.shields.io/badge/GasMain-Booking%20Platform-13ec5b?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![AdminLTE](https://img.shields.io/badge/AdminLTE-3c8dbc?style=flat&logo=bootstrap&logoColor=white)

> Platform booking lapangan olahraga modern dengan sistem manajemen admin yang terintegrasi.

## 📋 Deskripsi Project

**GasMain** adalah aplikasi web untuk mempermudah proses penyewaan lapangan olahraga seperti Badminton, Futsal, Basket, dan Voli. Aplikasi ini dilengkapi dengan dashboard admin berbasis AdminLTE untuk mengelola lapangan dan booking secara real-time.

**Project ini dibuat untuk:** Tugas Akhir Semester 1 - Mata Kuliah UI/UX

## ✨ Fitur Utama

### 🎯 User Side
- ✅ Browse dan cari lapangan olahraga
- ✅ Booking lapangan dengan pilihan tanggal dan waktu
- ✅ Sistem promo dan diskon
- ✅ Konfirmasi pemesanan
- ✅ Halaman sukses booking dengan kode booking
- ✅ Autentikasi user (Login & Register)
- ✅ Responsive design untuk mobile dan desktop

### 🔐 Admin Side
- ✅ Dashboard dengan statistik lengkap
- ✅ **Kelola Lapangan** (CRUD: Create, Read, Update, Delete)
- ✅ **Kelola Booking** (View, Update Status, Delete)
- ✅ Filter booking berdasarkan status
- ✅ Role-based authentication
- ✅ AdminLTE interface yang modern

## 🚀 Demo

**Live Demo:** [https://mutazs21.github.io/Aplikasi-Penyewaan-Lapangan-GasMain-/](https://mutazs21.github.io/Aplikasi-Penyewaan-Lapangan-GasMain-/)

### Akun Demo

#### Admin
- **Email:** `admin@gasmain.com`
- **Password:** `admin123`
- **Akses:** Dashboard Admin, Kelola Lapangan, Kelola Booking

#### User
- **Email:** `user@example.com`
- **Password:** `user123`
- **Akses:** Booking lapangan, Lihat fasilitas

## 🛠️ Teknologi yang Digunakan

| Technology | Purpose |
|------------|---------|
| **HTML5** | Struktur halaman web |
| **Tailwind CSS** | Styling dan responsive design |
| **JavaScript (Vanilla)** | Logika aplikasi dan interaktivitas |
| **AdminLTE 3** | Dashboard admin template |
| **Bootstrap 4** | AdminLTE dependencies |
| **Font Awesome** | Icon library |
| **LocalStorage** | Data persistence (development) |

## 📁 Struktur Project

```
GasMain/
├── admin/                      # Admin Dashboard
│   ├── index.html             # Dashboard utama
│   ├── lapangan.html          # Kelola lapangan
│   └── booking.html           # Kelola booking
├── assets/
│   └── img/                   # Gambar dan logo
├── js/
│   ├── auth.js                # Autentikasi & authorization
│   ├── main.js                # Fungsi utama aplikasi
│   ├── harga.js               # Kalkulasi harga booking
│   ├── booking.js             # Logic booking
│   └── lapangan-data.js       # Data lapangan
├── src/
│   ├── input.css              # Tailwind input
│   └── output.css             # Tailwind compiled
├── index.html                 # Halaman utama
├── login.html                 # Halaman login
├── daftar.html                # Halaman registrasi
├── lapangan.html              # Daftar lapangan
├── bulutangkis.html           # Detail lapangan badminton
├── konfirmasi-pemesanan.html  # Konfirmasi booking
├── pemesanan-berhasil.html    # Sukses booking
└── README.md                  # Dokumentasi
```

## 🎨 Screenshots

### User Interface
| Halaman | Preview |
|---------|---------|
| Homepage | Modern landing page dengan hero section |
| Lapangan | Grid layout daftar lapangan |
| Detail | Form booking interaktif |
| Konfirmasi | Review pesanan sebelum bayar |

### Admin Dashboard
| Halaman | Preview |
|---------|---------|
| Dashboard | Statistik dan chart |
| Kelola Lapangan | CRUD lapangan dengan modal |
| Kelola Booking | Table booking dengan filter |

## 💻 Instalasi & Penggunaan

### 1. Clone Repository
```bash
git clone https://github.com/mutazs21/Aplikasi-Penyewaan-Lapangan-GasMain-.git
cd Aplikasi-Penyewaan-Lapangan-GasMain-
```

### 2. Jalankan dengan Live Server
```bash
# Jika menggunakan VS Code
# Install extension: Live Server
# Klik kanan pada index.html > Open with Live Server
```

### 3. Atau Buka Langsung
```bash
# Buka file index.html di browser
open index.html
```

## 📖 Cara Menggunakan

### Untuk User (Customer)

1. **Browse Lapangan**
   - Buka halaman utama
   - Klik "Fasilitas" untuk melihat daftar lapangan

2. **Booking Lapangan**
   - Pilih lapangan yang diinginkan
   - Pilih tanggal dan waktu
   - Pilih durasi (1-3 jam)
   - Gunakan kode promo jika ada: `OLAHRAGA20` (diskon 20%)
   - Klik "Booking Sekarang"

3. **Konfirmasi Pemesanan**
   - Isi data pemesan (nama, WhatsApp, email)
   - Pilih metode pembayaran (QRIS/VA/Kartu)
   - Centang setuju dengan S&K
   - Klik "Lanjutkan ke Pembayaran"

4. **Selesai**
   - Dapatkan kode booking
   - Cek email untuk instruksi pembayaran

### Untuk Admin

1. **Login Admin**
   - Buka halaman login
   - Masukkan email: `admin@gasmain.com`
   - Password: `admin123`

2. **Kelola Lapangan**
   - Menu "Kelola Lapangan"
   - Tambah/Edit/Hapus lapangan
   - Update harga dan status

3. **Kelola Booking**
   - Menu "Kelola Booking"
   - Lihat semua booking
   - Update status (Pending → Confirmed/Cancelled)
   - Hapus booking

## 🔐 Sistem Autentikasi

### Role-Based Access Control

| Role | Akses |
|------|-------|
| **Admin** | Dashboard, Kelola Lapangan, Kelola Booking |
| **User** | Homepage, Booking, Profile |
| **Guest** | Homepage, Lihat Lapangan (read-only) |

### Fitur Keamanan
- ✅ Password protection
- ✅ Role-based redirect
- ✅ Session management
- ✅ Protected admin routes
- ✅ Auto logout

## 💾 Data Management

Data disimpan menggunakan **LocalStorage** untuk development:

```javascript
// Struktur data
localStorage.setItem('lapanganData', JSON.stringify([...]));
localStorage.setItem('bookingData', JSON.stringify([...]));
localStorage.setItem('user', JSON.stringify({...}));
```

**Note:** Untuk production, data harus disimpan di database (MySQL/MongoDB).

## 🎨 Kode Promo

| Kode | Diskon | Keterangan |
|------|--------|------------|
| `OLAHRAGA20` | 20% | Diskon untuk semua lapangan |

## 📱 Responsive Design

✅ Mobile First Design
✅ Tablet Compatible
✅ Desktop Optimized
✅ Tested on:
- iPhone (375px - 428px)
- iPad (768px - 1024px)
- Desktop (1280px+)

## 🐛 Known Issues & Limitations

- Data tersimpan di localStorage (belum pakai database)
- Upload gambar belum tersedia (hanya URL)
- Email notification masih simulasi
- Payment gateway belum terintegrasi

## 🔮 Future Updates

- [ ] Integrasi dengan backend (Node.js/PHP)
- [ ] Database MySQL/MongoDB
- [ ] Payment gateway (Midtrans)
- [ ] Email notification real
- [ ] Upload gambar lapangan
- [ ] Export laporan ke Excel/PDF
- [ ] Real-time notification
- [ ] Chat customer service

## 👨‍💻 Developer

**Nama:** Mutaz  
**NIM:** [0110225164]  
**Kelas:** [TI-09]  
**Mata Kuliah:** UI/UX
**Dosen:** [Pak Rojul]  

## 📞 Contact

- **GitHub:** [@mutazs21](https://github.com/mutazs21)
- **Email:** [mumtaaz210@gmail.com]
- **LinkedIn:** [Mumtaaz Abdurrahman]

## 📄 License

This project is created for educational purposes - UAS Semester 1.

---

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [AdminLTE](https://adminlte.io/) - Admin dashboard template
- [Font Awesome](https://fontawesome.com/) - Icon library
- [Unsplash](https://unsplash.com/) - Free images

---

⭐ **Jika project ini membantu, berikan star di repository ini!**

**Made with ❤️ by Mutaz**
