// ============================================
// NAMESPACE: BookingSystem (agar tidak bentrok)
// ============================================
var BookingSystem = {
    // Variabel internal
    hargaPerJam: 60000, // Default, akan di-override oleh lapangan-data.js
    biayaLayanan: 2000,
    durasiSekarang: 2,
    jamTerpilih: '13:00',
    promoAktif: false,

    // Fungsi pilih durasi
    pilihDurasi: function (jam) {
        // Reset semua tombol
        ['dur1', 'dur2', 'dur3'].forEach(id => {
            const btn = document.getElementById(id);
            if (btn) {
                btn.className = 'px-4 py-2 border-2 border-gray-300 rounded-lg font-bold text-sm hover:border-[#13ec5b] transition-colors';
            }
        });

        // Aktifkan tombol yang dipilih
        const selectedBtn = document.getElementById('dur' + jam);
        if (selectedBtn) {
            selectedBtn.className = 'px-4 py-2 border-2 border-[#13ec5b] bg-[#13ec5b] text-[#111813] rounded-lg font-bold text-sm';
        }

        this.durasiSekarang = jam;
        this.hitungTotal();
    },

    // Fungsi pilih jam
    pilihJam: function (jam) {
        this.jamTerpilih = jam;

        // Reset semua tombol
        const allTimeButtons = ['time08', 'time09', 'time10', 'time11', 'time12', 'time13', 'time14', 'time15', 'time16'];
        allTimeButtons.forEach(btnId => {
            const btn = document.getElementById(btnId);
            if (btn) {
                btn.className = 'px-3 py-2 border border-gray-300 rounded-lg text-xs hover:border-[#13ec5b] transition-colors';
            }
        });

        // Aktifkan tombol yang dipilih
        const timeMap = {
            '08:00': 'time08', '09:00': 'time09', '10:00': 'time10',
            '11:00': 'time11', '12:00': 'time12', '13:00': 'time13',
            '14:00': 'time14', '15:00': 'time15', '16:00': 'time16'
        };

        const btnId = timeMap[jam];
        if (btnId) {
            const btn = document.getElementById(btnId);
            if (btn) {
                btn.className = 'px-3 py-2 border-2 border-[#13ec5b] bg-[#13ec5b] text-[#111813] rounded-lg text-xs font-bold';
            }
        }
    },

    // Fungsi terapkan promo
    terapkanPromo: function () {
        const kodePromo = document.getElementById('promoInput')?.value.toUpperCase().trim();
        const message = document.getElementById('promoMessage');

        if (!kodePromo) {
            if (message) {
                message.textContent = '❌ Masukkan kode promo terlebih dahulu';
                message.className = 'text-xs mt-2 text-red-500 font-bold';
                message.classList.remove('hidden');
            }
            return;
        }

        if (kodePromo === 'OLAHRAGA20') {
            this.promoAktif = true;
            if (message) {
                message.textContent = '✅ Kode promo berhasil diterapkan! Diskon 20%';
                message.className = 'text-xs mt-2 text-green-600 font-bold';
                message.classList.remove('hidden');
            }

            const diskonRow = document.getElementById('diskonRow');
            if (diskonRow) diskonRow.classList.remove('hidden');

            this.hitungTotal();
        } else {
            this.promoAktif = false;
            if (message) {
                message.textContent = '❌ Kode promo tidak valid';
                message.className = 'text-xs mt-2 text-red-500 font-bold';
                message.classList.remove('hidden');
            }

            const diskonRow = document.getElementById('diskonRow');
            if (diskonRow) diskonRow.classList.add('hidden');

            this.hitungTotal();
        }
    },

    // Fungsi hitung total
    hitungTotal: function () {
        const hargaSewa = this.hargaPerJam * this.durasiSekarang;
        const subtotal = hargaSewa + this.biayaLayanan;
        let diskon = 0;
        let total = subtotal;

        if (this.promoAktif) {
            diskon = Math.floor(subtotal * 0.2);
            total = subtotal - diskon;

            const elDiskon = document.getElementById('diskonAmount');
            if (elDiskon) {
                elDiskon.textContent = '- Rp ' + diskon.toLocaleString('id-ID');
            }
        }

        // Update tampilan
        const elDurasi = document.getElementById('durasiText');
        const elHargaSewa = document.getElementById('hargaSewa');
        const elTotal = document.getElementById('totalHarga');

        if (elDurasi) elDurasi.textContent = this.durasiSekarang;
        if (elHargaSewa) elHargaSewa.textContent = 'Rp ' + hargaSewa.toLocaleString('id-ID');
        if (elTotal) elTotal.textContent = 'Rp ' + total.toLocaleString('id-ID');
    },

    // Fungsi lanjut ke konfirmasi
    lanjutKeKonfirmasi: function () {
        const tanggalInput = document.getElementById('bookingDate');

        if (!tanggalInput || !tanggalInput.value) {
            alert('⚠️ Mohon pilih tanggal terlebih dahulu!');
            if (tanggalInput) tanggalInput.focus();
            return;
        }

        if (!this.jamTerpilih) {
            alert('⚠️ Mohon pilih jam booking terlebih dahulu!');
            return;
        }

        const hargaSewa = this.hargaPerJam * this.durasiSekarang;
        const subtotal = hargaSewa + this.biayaLayanan;
        let diskon = 0;
        let total = subtotal;

        if (this.promoAktif) {
            diskon = Math.floor(subtotal * 0.2);
            total = subtotal - diskon;
        }

        // Simpan ke localStorage
        localStorage.setItem('durasi', this.durasiSekarang);
        localStorage.setItem('hargaPerJam', this.hargaPerJam);
        localStorage.setItem('biayaLayanan', this.biayaLayanan);
        localStorage.setItem('promoAktif', this.promoAktif);
        localStorage.setItem('diskon', diskon);
        localStorage.setItem('total', total);
        localStorage.setItem('tanggalBooking', tanggalInput.value);
        localStorage.setItem('waktuBooking', this.jamTerpilih);

        console.log('✅ Data booking tersimpan');

        window.location.href = 'konfirmasi-pemesanan.html';
    },

    // Fungsi muat data booking (halaman konfirmasi)
    muatDataBooking: function () {
        console.log('🔄 Memuat data booking...');

        // Ambil data booking
        const durasi = parseInt(localStorage.getItem('durasi') || '2');
        const hargaPerJam = parseInt(localStorage.getItem('hargaPerJam') || '80000');
        const biayaLayanan = parseInt(localStorage.getItem('biayaLayanan') || '2000');
        const promoAktif = localStorage.getItem('promoAktif') === 'true';
        const diskon = parseInt(localStorage.getItem('diskon') || '0');
        const total = parseInt(localStorage.getItem('total') || '162000');
        const tanggalBooking = localStorage.getItem('tanggalBooking');
        const waktuBooking = localStorage.getItem('waktuBooking');

        // ⭐ AMBIL DATA LAPANGAN dari localStorage
        const lapanganJSON = localStorage.getItem('lapanganTerpilih');
        let lapangan = null;

        if (lapanganJSON) {
            lapangan = JSON.parse(lapanganJSON);
            console.log('📦 Data lapangan ditemukan:', lapangan.nama);

            // Update gambar lapangan di konfirmasi
            const imgElement = document.querySelector('.lg\\:col-span-1 img');
            if (imgElement && lapangan.gambar) {
                imgElement.src = lapangan.gambar;
            }

            // Update nama lapangan
            const namaElement = document.querySelector('.lg\\:col-span-1 h3');
            if (namaElement && lapangan.nama) {
                namaElement.textContent = lapangan.nama;
            }

            // Update lokasi
            const lokasiElement = document.querySelector('.lg\\:col-span-1 h3 + div span:last-child');
            if (lokasiElement && lapangan.lokasi) {
                lokasiElement.textContent = lapangan.lokasi;
            }

            // Update badge kategori
            const badgeElement = document.querySelector('.lg\\:col-span-1 .absolute.top-4.right-4');
            if (badgeElement && lapangan.kategori) {
                badgeElement.textContent = lapangan.kategori;
            }
        } else {
            console.warn('⚠️ Data lapangan tidak ditemukan di localStorage');
        }

        // Update tanggal
        const elTanggal = document.getElementById('tanggalBooking');
        if (elTanggal && tanggalBooking) {
            const tanggalFormatted = this.formatTanggalIndonesia(tanggalBooking);
            elTanggal.textContent = tanggalFormatted;
        }

        // Update waktu
        const elWaktu = document.getElementById('waktuBooking');
        if (elWaktu && waktuBooking) {
            const waktuSelesai = this.hitungWaktuSelesai(waktuBooking, durasi);
            elWaktu.innerHTML = `${waktuBooking} - ${waktuSelesai} (<span id="durasiDisplay">${durasi}</span> Jam)`;
        }

        // Update harga
        const elDurasiText = document.getElementById('durasiText');
        const elHargaSewa = document.getElementById('hargaSewa');
        const elBiayaLayanan = document.getElementById('biayaLayanan');
        const elTotalHarga = document.getElementById('totalHarga');
        const elDiskonRow = document.getElementById('diskonRow');
        const elDiskonAmount = document.getElementById('diskonAmount');

        if (elDurasiText) elDurasiText.textContent = durasi;
        if (elHargaSewa) elHargaSewa.textContent = 'Rp ' + (hargaPerJam * durasi).toLocaleString('id-ID');
        if (elBiayaLayanan) elBiayaLayanan.textContent = 'Rp ' + biayaLayanan.toLocaleString('id-ID');
        if (elTotalHarga) elTotalHarga.textContent = 'Rp ' + total.toLocaleString('id-ID');

        if (promoAktif && diskon > 0) {
            if (elDiskonRow) elDiskonRow.classList.remove('hidden');
            if (elDiskonAmount) elDiskonAmount.textContent = '- Rp ' + diskon.toLocaleString('id-ID');
        } else {
            if (elDiskonRow) elDiskonRow.classList.add('hidden');
        }

        console.log('✅ Data booking berhasil dimuat!');
    },

    // Fungsi muat data sukses
    muatDataSukses: function () {
        console.log('🎉 Memuat data pemesanan berhasil...');

        const bookingCode = localStorage.getItem('bookingCode') || '#BOOK-' + Math.floor(Math.random() * 900000 + 100000);
        const total = parseInt(localStorage.getItem('total') || '162000');
        const email = localStorage.getItem('emailPemesan') || 'user@example.com';
        const durasi = parseInt(localStorage.getItem('durasi') || '2');
        const tanggalBooking = localStorage.getItem('tanggalBooking');
        const waktuBooking = localStorage.getItem('waktuBooking');

        // ⭐ AMBIL DATA LAPANGAN dari localStorage
        const lapanganJSON = localStorage.getItem('lapanganTerpilih');
        let lapangan = null;

        if (lapanganJSON) {
            lapangan = JSON.parse(lapanganJSON);
            console.log('📦 Data lapangan ditemukan:', lapangan.nama);

            // Update gambar lapangan di halaman sukses
            const imgElement = document.querySelector('.relative.h-56 img');
            if (imgElement && lapangan.gambar) {
                imgElement.src = lapangan.gambar;
            }

            // Update nama lapangan di deskripsi
            const descElement = document.querySelector('#bookingCode').parentElement.nextElementSibling;
            if (descElement && lapangan.kategori && lapangan.nama) {
                descElement.textContent = `${lapangan.kategori} - ${lapangan.nama}`;
            }
        }

        const elBookingCode = document.getElementById('bookingCode');
        const elTanggal = document.getElementById('tanggalDisplay');
        const elWaktu = document.getElementById('waktuDisplay');
        const elTotal = document.getElementById('totalDisplay');
        const elEmail = document.getElementById('emailDisplay');
        const elDeadline = document.getElementById('deadlineDisplay');

        if (elBookingCode) elBookingCode.textContent = bookingCode;
        if (elTanggal && tanggalBooking) elTanggal.textContent = this.formatTanggalSingkat(tanggalBooking);
        if (elWaktu && waktuBooking) {
            const waktuSelesai = this.hitungWaktuSelesai(waktuBooking, durasi);
            elWaktu.textContent = `${waktuBooking} - ${waktuSelesai} WIB`;
        }
        if (elTotal) elTotal.textContent = 'Rp ' + total.toLocaleString('id-ID');
        if (elEmail) elEmail.textContent = email;

        if (elDeadline) {
            const now = new Date();
            now.setMinutes(now.getMinutes() + 15);
            const deadline = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
            elDeadline.textContent = deadline + ' WIB';
        }

        console.log('✅ Data pemesanan berhasil dimuat!');
    },

    // Fungsi proses booking
    prosesBooking: function () {
        const nama = document.getElementById('namaLengkap')?.value.trim();
        const wa = document.getElementById('nomorWa')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const agree = document.getElementById('agree')?.checked;

        if (!nama || !wa || !email) {
            alert('⚠️ Mohon lengkapi semua data pemesan!');
            return;
        }

        if (!agree) {
            alert('⚠️ Anda harus menyetujui Syarat & Ketentuan terlebih dahulu!');
            return;
        }

        localStorage.setItem('namaPemesan', nama);
        localStorage.setItem('nomorWa', wa);
        localStorage.setItem('emailPemesan', email);

        const bookingCode = 'BOOK-' + Math.floor(Math.random() * 900000 + 100000);
        localStorage.setItem('bookingCode', bookingCode);

        console.log('✅ Booking berhasil! Kode:', bookingCode);

        window.location.href = 'pemesanan-berhasil.html';
    },

    // Helper functions
    formatTanggalIndonesia: function (tanggal) {
        const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        const bulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des'];
        const date = new Date(tanggal);
        return `${hari[date.getDay()]}, ${date.getDate()} ${bulan[date.getMonth()]} ${date.getFullYear()}`;
    },

    formatTanggalSingkat: function (tanggal) {
        const bulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des'];
        const date = new Date(tanggal);
        return `${date.getDate()} ${bulan[date.getMonth()]} ${date.getFullYear()}`;
    },

    hitungWaktuSelesai: function (jamMulai, durasi) {
        const [jam, menit] = jamMulai.split(':').map(Number);
        const jamSelesai = jam + durasi;
        return `${jamSelesai.toString().padStart(2, '0')}:${menit.toString().padStart(2, '0')}`;
    }
};

// ============================================
// FUNGSI GLOBAL untuk dipanggil dari HTML
// ============================================
function pilihDurasi(jam) {
    BookingSystem.pilihDurasi(jam);
}

function pilihJam(jam) {
    BookingSystem.pilihJam(jam);
}

function terapkanPromo() {
    BookingSystem.terapkanPromo();
}

function lanjutKeKonfirmasi() {
    BookingSystem.lanjutKeKonfirmasi();
}

function prosesBooking() {
    BookingSystem.prosesBooking();
}

function muatDataBooking() {
    BookingSystem.muatDataBooking();
}

function muatDataSukses() {
    BookingSystem.muatDataSukses();
}

// ============================================
// AUTO INIT
// ============================================
window.addEventListener('DOMContentLoaded', function () {
    console.log('📋 booking.js loaded');

    const currentPath = window.location.pathname;

    // Deteksi halaman
    if (currentPath.includes('konfirmasi')) {
        console.log('📄 Halaman: Konfirmasi Pemesanan');
        BookingSystem.muatDataBooking();
    } else if (currentPath.includes('pemesanan-berhasil') || currentPath.includes('berhasil')) {
        console.log('📄 Halaman: Pemesanan Berhasil');
        BookingSystem.muatDataSukses();
    }

    // Set tanggal minimum
    const bookingDateInput = document.getElementById('bookingDate');
    if (bookingDateInput) {
        const today = new Date().toISOString().split('T')[0];
        bookingDateInput.setAttribute('min', today);

        if (!bookingDateInput.value || bookingDateInput.value === '2023-10-24') {
            bookingDateInput.value = today;
        }
    }
});

// ============================================
// LISTEN ke event dari lapangan-data.js
// ============================================
window.addEventListener('lapanganDataReady', function (e) {
    console.log('🔗 Menerima data dari lapangan-data.js');

    const lapangan = e.detail;

    // Update harga per jam dari data lapangan
    BookingSystem.hargaPerJam = lapangan.hargaPerJam;

    console.log('💰 Harga per jam diupdate:', lapangan.hargaPerJam);

    // Hitung ulang total dengan harga baru
    BookingSystem.hitungTotal();
});