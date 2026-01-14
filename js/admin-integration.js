// ============================================
// ADMIN INTEGRATION - Mengintegrasikan lapangan-data.js ke Admin Panel
// ============================================

// Fungsi untuk load data lapangan dari lapangan-data.js ke format admin
function loadLapanganDataToAdmin() {
    // Cek apakah LapanganData tersedia
    if (typeof LapanganData === 'undefined' || !LapanganData.daftar) {
        console.error('❌ LapanganData tidak tersedia');
        return null;
    }

    // Convert object menjadi array untuk digunakan di admin
    const lapanganArray = Object.values(LapanganData.daftar).map((lap, index) => ({
        id: lap.id,
        nama: lap.nama,
        jenis: lap.kategori, // kategori -> jenis
        harga: lap.hargaPerJam, // hargaPerJam -> harga
        status: 'Tersedia', // default status
        lokasi: lap.lokasi,
        rating: lap.rating,
        gambar: lap.gambar,
        fasilitas: lap.fasilitas,
        deskripsi: lap.deskripsi
    }));

    // Simpan ke localStorage untuk admin
    localStorage.setItem('lapanganData', JSON.stringify(lapanganArray));
    
    console.log('✅ Data lapangan berhasil dimuat:', lapanganArray.length, 'lapangan');
    return lapanganArray;
}

// Fungsi untuk generate dummy booking berdasarkan lapangan yang ada
function generateDummyBooking() {
    const lapanganData = JSON.parse(localStorage.getItem('lapanganData')) || [];
    
    if (lapanganData.length === 0) {
        console.warn('⚠️ Tidak ada data lapangan untuk generate booking');
        return [];
    }

    const users = [
        { name: 'Budi Santoso', email: 'budi@example.com' },
        { name: 'Andi Wijaya', email: 'andi@example.com' },
        { name: 'Siti Nurhaliza', email: 'siti@example.com' },
        { name: 'Rudi Hermawan', email: 'rudi@example.com' },
        { name: 'Dewi Lestari', email: 'dewi@example.com' }
    ];

    const statuses = ['Confirmed', 'Pending', 'Cancelled'];
    const bookingData = [];

    // Generate 10 booking dummy
    for (let i = 0; i < 10; i++) {
        const randomLapangan = lapanganData[Math.floor(Math.random() * lapanganData.length)];
        const randomUser = users[Math.floor(Math.random() * users.length)];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        
        // Random tanggal (hari ini sampai 7 hari ke depan)
        const randomDate = new Date();
        randomDate.setDate(randomDate.getDate() + Math.floor(Math.random() * 7));
        
        // Random waktu
        const jamMulai = 8 + Math.floor(Math.random() * 13); // 08:00 - 20:00
        const durasi = 1 + Math.floor(Math.random() * 3); // 1-3 jam
        const jamSelesai = jamMulai + durasi;
        
        bookingData.push({
            id: `BOOK-${889922 - i}`,
            user: randomUser.name,
            email: randomUser.email,
            lapangan: randomLapangan.nama,
            tanggal: randomDate.toISOString().split('T')[0],
            waktu: `${String(jamMulai).padStart(2, '0')}:00-${String(jamSelesai).padStart(2, '0')}:00`,
            durasi: durasi,
            total: randomLapangan.harga * durasi,
            status: randomStatus
        });
    }

    // Simpan ke localStorage
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
    console.log('✅ Dummy booking berhasil digenerate:', bookingData.length, 'booking');
    
    return bookingData;
}

// Fungsi untuk update statistik dashboard
function updateDashboardStats() {
    const lapanganData = JSON.parse(localStorage.getItem('lapanganData')) || [];
    const bookingData = JSON.parse(localStorage.getItem('bookingData')) || [];
    
    // Hitung booking hari ini
    const today = new Date().toISOString().split('T')[0];
    const bookingToday = bookingData.filter(b => b.tanggal === today).length;
    
    return {
        totalBooking: bookingData.length,
        bookingToday: bookingToday,
        totalLapangan: lapanganData.length,
        totalUser: 347 // dummy
    };
}

// Fungsi untuk update pendapatan dashboard
function calculateRevenue() {
    const bookingData = JSON.parse(localStorage.getItem('bookingData')) || [];
    
    // Hitung total pendapatan bulan ini
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    
    const monthlyRevenue = bookingData
        .filter(b => {
            const bookDate = new Date(b.tanggal);
            return bookDate.getMonth() === currentMonth && 
                   bookDate.getFullYear() === currentYear &&
                   b.status === 'Confirmed';
        })
        .reduce((total, b) => total + b.total, 0);
    
    // Hitung per kategori
    const lapanganData = JSON.parse(localStorage.getItem('lapanganData')) || [];
    const revenueByCategory = {};
    
    lapanganData.forEach(lap => {
        const categoryBookings = bookingData.filter(b => 
            b.lapangan === lap.nama && b.status === 'Confirmed'
        );
        const categoryTotal = categoryBookings.reduce((sum, b) => sum + b.total, 0);
        
        if (!revenueByCategory[lap.jenis]) {
            revenueByCategory[lap.jenis] = 0;
        }
        revenueByCategory[lap.jenis] += categoryTotal;
    });
    
    return {
        total: monthlyRevenue,
        byCategory: revenueByCategory
    };
}

// Fungsi untuk get recent bookings (untuk dashboard)
function getRecentBookings(limit = 4) {
    const bookingData = JSON.parse(localStorage.getItem('bookingData')) || [];
    
    // Sort by date descending
    const sorted = bookingData.sort((a, b) => 
        new Date(b.tanggal) - new Date(a.tanggal)
    );
    
    return sorted.slice(0, limit);
}

// ============================================
// AUTO SYNC saat page load
// ============================================
function initAdminData() {
    console.log('🔄 Initialisasi data admin...');
    
    // Load data dari lapangan-data.js
    const lapanganData = loadLapanganDataToAdmin();
    
    // Generate booking jika belum ada
    const existingBooking = localStorage.getItem('bookingData');
    if (!existingBooking && lapanganData && lapanganData.length > 0) {
        generateDummyBooking();
    }
    
    console.log('✅ Data admin siap digunakan');
}

// Jalankan saat DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAdminData);
} else {
    initAdminData();
}

// Export functions untuk digunakan di halaman admin
window.AdminData = {
    loadLapanganData: loadLapanganDataToAdmin,
    generateBooking: generateDummyBooking,
    getDashboardStats: updateDashboardStats,
    getRevenue: calculateRevenue,
    getRecentBookings: getRecentBookings
};