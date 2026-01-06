// ============================================
// NAMESPACE: LapanganData (agar tidak bentrok dengan file lain)
// ============================================
var LapanganData = {
    // Data semua lapangan
    daftar: {
        'mega-futsal': {
            id: 'mega-futsal',
            nama: 'Mega Futsal Arena',
            kategori: 'Futsal',
            lokasi: 'Jakarta Selatan',
            lokasiLengkap: 'Jl. Senayan No. 15, Jakarta Selatan, DKI Jakarta',
            rating: 4.8,
            jumlahReview: 120,
            hargaPerJam: 80000,
            gambar: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzOYlmPsr9C6zwvG_c-c7WljIhGSiamhkrB5vN1CjbHNBmL_4PxCAM_4ZuAA3PJ_RGglF1CyT3TVtQ5wJ9J_CwAXVZeUdSpin0xia7hXUV322_tHP0mz9KIETRtRYb-8X1OD4-I=s1360-w1360-h1020-rw',
            koordinat: '-6.2088, 106.8456', // Senayan Area
            googleMapsUrl: 'https://www.google.com/maps?q=-6.2088,106.8456',
            deskripsi: 'Mega Futsal Arena menawarkan pengalaman bermain futsal terbaik di Jakarta Selatan. Lapangan menggunakan rumput sintetis berkualitas tinggi yang memberikan kenyamanan maksimal. Pencahayaan LED yang terang mereka ke seluruh area lapangan memastikan visibilitas sempurna.',
            deskripsiTambahan: 'Cocok untuk latihan tim maupun pertandingan persahabatan. Kami juga menyediakan penyewaan bola dan sepatu futsal di resepsionis. Harap datang 15 menit sebelum jadwal booking.',
            fasilitas: ['Free WiFi', 'Air Conditioner', 'Parkir Luas', 'Kamar Mandi', 'Kantin', 'Musholla']
        },
        'gor-sudirman': {
            id: 'gor-sudirman',
            nama: 'GOR Sudirman',
            kategori: 'Bulutangkis',
            lokasi: 'Jakarta Pusat',
            lokasiLengkap: 'Jl. Sudirman No. 45, Jakarta Pusat, DKI Jakarta',
            rating: 4.9,
            jumlahReview: 230,
            hargaPerJam: 40000,
            gambar: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwPSOQYFHU70kSIfwmT3x5Ntzy3l3Eg1g0ZzNpXZ5XYkRHoF4rMr3JCKSOoi7SKLlYhkPteQsdCcua823p86MtzC_hb53RyLiwGENqbCX2W1MaAfRB1CP9BsKJNt0AaOkmKkZnGCQ=w408-h306-k-no',
            koordinat: '-6.2088, 106.8228', // Sudirman Area
            googleMapsUrl: 'https://www.google.com/maps?q=-6.2088,106.8228',
            deskripsi: 'GOR Sudirman menawarkan pengalaman bermain badminton terbaik di Jakarta Pusat. Lapangan menggunakan karpet vinyl standar BWF yang memberikan kenyamanan maksimal dan mengurangi resiko cedera pada lutut. Pencahayaan didesain khusus agar tidak silau.',
            deskripsiTambahan: 'Cocok untuk latihan rutin maupun turnamen. Kami juga menyediakan penyewaan raket dan kok berkualitas di resepsionis. Harap datang 15 menit sebelum jadwal booking Anda untuk proses check-in.',
            fasilitas: ['Free WiFi', 'Air Conditioner', 'Parkir Luas', 'Kamar Mandi', 'Kantin', 'Musholla']
        },
        'padel-bsd': {
            id: 'padel-bsd',
            nama: 'Padel Club BSD',
            kategori: 'Padel',
            lokasi: 'BSD City',
            lokasiLengkap: 'BSD Green Office Park, Tangerang Selatan, Banten',
            rating: 5.0,
            jumlahReview: 45,
            hargaPerJam: 250000,
            gambar: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxhDli0-o67Wi0s3yl3OyLsb7a6XW0FZSwDRRIdL0hEtHefGeAmHjlCfE3CbMOlEGeVmfycec8AKjI_VVWUC3i9YhNjXhDBT8BiXj2jZYUuI3FskR9kmSPkEXmYRquWYfKEro9J=s1360-w1360-h1020-rw',
            koordinat: '-6.3012, 106.6497', // BSD City
            googleMapsUrl: 'https://www.google.com/maps?q=-6.3012,106.6497',
            deskripsi: 'Padel Club BSD adalah venue padel premium pertama di BSD. Lapangan outdoor dengan material kaca tempered berkualitas tinggi dan rumput sintetis khusus padel. Suasana nyaman dengan pemandangan hijau di sekitar area.',
            deskripsiTambahan: 'Tersedia coaching untuk pemula dan rental equipment lengkap. Booking minimal 1 jam sebelumnya. Fasilitas shower dan locker room tersedia.',
            fasilitas: ['Free WiFi', 'Outdoor', 'Parkir Luas', 'Kamar Mandi', 'Kantin', 'Shower Room', 'Locker']
        },
        'champion-futsal': {
            id: 'champion-futsal',
            nama: 'Champion Futsal',
            kategori: 'Futsal',
            lokasi: 'Bekasi',
            lokasiLengkap: 'Jl. Ahmad Yani No. 88, Bekasi Timur, Bekasi',
            rating: 4.5,
            jumlahReview: 88,
            hargaPerJam: 90000,
            gambar: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwKaAmwaV1geluQY7nl_wSlNe2IGFx9lUBL1qqG0CIzG3aYyvKFIIIYwGamHP11_I_TaEtLcuSBjWDN7h2QN3Mxouco0cV-EfCFXz_x2b6KY6BtSADqrTAlofb_vQIAuu9-0emx=s1360-w1360-h1020-rw',
            koordinat: '-6.2476, 107.0045', // Bekasi Timur
            googleMapsUrl: 'https://www.google.com/maps?q=-6.2476,107.0045',
            deskripsi: 'Champion Futsal menawarkan lapangan futsal berkualitas dengan harga terjangkau di Bekasi. Rumput sintetis import dari Korea dengan teknologi anti-slip. Pencahayaan memadai untuk bermain siang maupun malam.',
            deskripsiTambahan: 'Tersedia paket member bulanan dengan harga spesial. Free mineral water untuk setiap booking. Area tunggu ber-AC tersedia.',
            fasilitas: ['Free WiFi', 'Parkir Luas', 'Kamar Mandi', 'Kantin', 'Musholla', 'Area Tunggu']
        },
        'cendrawasih-hall': {
            id: 'cendrawasih-hall',
            nama: 'Cendrawasih Hall',
            kategori: 'Bulutangkis',
            lokasi: 'Jakarta Barat',
            lokasiLengkap: 'Jl. Cengkareng No. 123, Jakarta Barat, DKI Jakarta',
            rating: 4.7,
            jumlahReview: 156,
            hargaPerJam: 50000,
            gambar: 'https://www.sardanagroup.co.id/HP/production/images/news/Shamrock%20Badminton%20Club%20Medan%20.png_1706171520.png',
            koordinat: '-6.1557, 106.7415', // Cengkareng Area
            googleMapsUrl: 'https://www.google.com/maps?q=-6.1557,106.7415',
            deskripsi: 'Cendrawasih Hall adalah venue badminton dengan 8 lapangan indoor full AC. Karpet vinyl premium dengan net standar internasional. Ketinggian plafon 12 meter memberikan ruang gerak optimal.',
            deskripsiTambahan: 'Menyediakan program membership dengan berbagai benefit. Rental raket tersedia dengan harga terjangkau. Booking dapat dilakukan via WhatsApp.',
            fasilitas: ['Free WiFi', 'Air Conditioner', 'Parkir Luas', 'Kamar Mandi', 'Kantin', 'Musholla']
        },
        'kemang-padel': {
            id: 'kemang-padel',
            nama: 'Kemang Padel',
            kategori: 'Padel',
            lokasi: 'Kemang',
            lokasiLengkap: 'Jl. Kemang Raya No. 55, Jakarta Selatan, DKI Jakarta',
            rating: 4.9,
            jumlahReview: 62,
            hargaPerJam: 275000,
            gambar: 'https://brickmortar.id/wp-content/uploads/2024/08/Apa-itu-Olah-Raga-Padel.jpeg',
            koordinat: '-6.2615, 106.8166', // Kemang Area
            googleMapsUrl: 'https://www.google.com/maps?q=-6.2615,106.8166',
            deskripsi: 'Kemang Padel adalah premium padel club di area Kemang yang eksklusif. 4 lapangan padel outdoor dengan material glass premium dan lighting system canggih untuk bermain hingga malam hari.',
            deskripsiTambahan: 'Tersedia cafe dengan menu healthy food dan coffee premium. Professional coaching tersedia dengan jadwal fleksibel. Member mendapat diskon 20%.',
            fasilitas: ['Free WiFi', 'Outdoor', 'Parkir Valet', 'Kamar Mandi', 'Cafe Premium', 'Shower Room', 'Locker']
        },
        'golden-sport': {
            id: 'golden-sport',
            nama: 'Golden Sport Center',
            kategori: 'Futsal',
            lokasi: 'Depok',
            lokasiLengkap: 'Jl. Margonda Raya No. 200, Depok, Jawa Barat',
            rating: 4.6,
            jumlahReview: 94,
            hargaPerJam: 95000,
            gambar: 'https://asset.ayo.co.id/image/venue/172654536115495.image_cropper_1726545293259.jpg',
            koordinat: '-6.3915, 106.8234', // Margonda Depok
            googleMapsUrl: 'https://www.google.com/maps?q=-6.3915,106.8234',
            deskripsi: 'Golden Sport Center adalah venue futsal modern di Depok dengan 3 lapangan indoor. Rumput sintetis tipe premium dengan shock absorber untuk keamanan maksimal. Sound system tersedia untuk event.',
            deskripsiTambahan: 'Paket turnamen tersedia dengan harga khusus. Tersedia jasa dokumentasi foto/video. Booking minimal H-1 untuk weekend.',
            fasilitas: ['Free WiFi', 'Air Conditioner', 'Parkir Luas', 'Kamar Mandi', 'Kantin', 'Musholla', 'Sound System']
        },
        'arena-99': {
            id: 'arena-99',
            nama: 'Arena 99',
            kategori: 'Bulutangkis',
            lokasi: 'Kelapa Gading',
            lokasiLengkap: 'Jl. Boulevard Raya No. 99, Kelapa Gading, Jakarta Utara',
            rating: 4.7,
            jumlahReview: 201,
            hargaPerJam: 55000,
            gambar: 'https://asset.ayo.co.id/image/venue/170079891659689.image_cropper_1700798873836_large.jpg',
            koordinat: '-6.1579, 106.9066', // Kelapa Gading
            googleMapsUrl: 'https://www.google.com/maps?q=-6.1579,106.9066',
            deskripsi: 'Arena 99 adalah venue badminton terlengkap di Kelapa Gading dengan 12 lapangan indoor full AC. Standar internasional dengan karpet vinyl import dan net tournament grade. Area sangat luas dan nyaman.',
            deskripsiTambahan: 'Sparring partner tersedia dengan jadwal. Pro shop menjual perlengkapan badminton original. Member card dengan benefit spesial.',
            fasilitas: ['Free WiFi', 'Air Conditioner', 'Parkir Luas', 'Kamar Mandi', 'Kantin', 'Musholla', 'Pro Shop']
        }
    },

    // Fungsi simpan data lapangan yang dipilih
    simpan: function (idLapangan) {
        const lapangan = this.daftar[idLapangan];

        if (!lapangan) {
            console.error('❌ Lapangan tidak ditemukan:', idLapangan);
            alert('❌ Lapangan tidak ditemukan!');
            return;
        }

        // Simpan ke localStorage
        localStorage.setItem('lapanganTerpilih', JSON.stringify(lapangan));

        console.log('✅ Data lapangan disimpan:', lapangan.nama);

        // Redirect ke halaman detail
        window.location.href = 'bulutangkis.html';
    },

    // Fungsi muat data di halaman detail
    muat: function () {
        const lapanganJSON = localStorage.getItem('lapanganTerpilih');

        if (!lapanganJSON) {
            console.warn('⚠️ Tidak ada data lapangan di localStorage');
            return null;
        }

        const lapangan = JSON.parse(lapanganJSON);
        console.log('📦 Memuat data:', lapangan.nama);

        // Update semua elemen di halaman detail
        const elTitle = document.getElementById('lapanganTitle');
        const elLocation = document.getElementById('lapanganLocation');
        const elCategory = document.getElementById('categoryBadge');
        const elDesc = document.getElementById('lapanganDesc');
        const elPrice = document.getElementById('priceDisplay');
        const elMainImage = document.getElementById('mainImage');

        if (elTitle) elTitle.textContent = lapangan.nama;
        if (elLocation) elLocation.textContent = lapangan.lokasiLengkap;
        if (elCategory) elCategory.textContent = lapangan.kategori;
        if (elDesc) elDesc.textContent = lapangan.deskripsi;
        if (elPrice) {
            elPrice.innerHTML = `Rp ${lapangan.hargaPerJam.toLocaleString('id-ID')}<span class="text-sm text-gray-500 font-normal">/jam</span>`;
        }
        if (elMainImage) elMainImage.src = lapangan.gambar;

        // ⭐ UPDATE GOOGLE MAPS
        if (lapangan.koordinat) {
            // Update iframe Google Maps
            const mapContainer = document.querySelector('.w-full.h-64.bg-gray-200');
            if (mapContainer) {
                mapContainer.innerHTML = `<iframe 
                    src="https://www.google.com/maps?q=${lapangan.koordinat}&output=embed" 
                    width="100%" 
                    height="100%" 
                    style="border:0; border-radius: 12px;" 
                    allowfullscreen="" 
                    loading="lazy">
                </iframe>`;
            }

            // Update nama lapangan di bawah maps
            const mapNama = document.getElementById('mapLapanganNama');
            if (mapNama) mapNama.textContent = lapangan.nama;

            // Update alamat di bawah maps
            const mapAlamat = document.getElementById('mapLapanganAlamat');
            if (mapAlamat) mapAlamat.textContent = lapangan.lokasiLengkap;

            // Update tombol "Rute" dengan link Google Maps
            const btnRute = document.getElementById('btnRute');
            if (btnRute && lapangan.googleMapsUrl) {
                btnRute.href = lapangan.googleMapsUrl;
                btnRute.target = '_blank';
            }
        }

        console.log('✅ Detail lapangan berhasil dimuat!');

        // Return data lapangan untuk digunakan file lain
        return lapangan;
    }
};

// ============================================
// FUNGSI GLOBAL untuk dipanggil dari HTML
// ============================================
function pilihLapangan(idLapangan) {
    console.log('🎯 pilihLapangan dipanggil dengan ID:', idLapangan);

    // Pastikan LapanganData sudah ada
    if (typeof LapanganData === 'undefined') {
        console.error('❌ LapanganData tidak ditemukan! Pastikan lapangan-data.js sudah di-load.');
        alert('Error: Sistem belum siap. Refresh halaman dan coba lagi.');
        return;
    }

    LapanganData.simpan(idLapangan);
}

// Expose ke window agar bisa dipanggil dari HTML
window.pilihLapangan = pilihLapangan;

// ============================================
// AUTO INIT saat halaman dimuat
// ============================================
window.addEventListener('DOMContentLoaded', function () {
    console.log('🏟️ lapangan-data.js loaded');

    const currentPath = window.location.pathname;

    // Kalau di halaman detail, muat data lapangan
    if (currentPath.includes('bulutangkis.html') || currentPath.includes('detail')) {
        const lapanganData = LapanganData.muat();

        // Kirim event custom agar file lain tahu data sudah siap
        if (lapanganData) {
            const event = new CustomEvent('lapanganDataReady', {
                detail: lapanganData
            });
            window.dispatchEvent(event);
        }
    }
});