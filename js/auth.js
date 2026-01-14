// auth.js - File untuk menangani autentikasi dengan Role Admin & User

// Database user dummy (dalam project real, ini dari backend/database)
const defaultUsers = [
    {
        email: 'admin@gasmain.com',
        password: 'admin123',
        name: 'Admin GasMain',
        role: 'admin'
    },
    {
        email: 'user@example.com',
        password: 'user123',
        name: 'User Demo',
        role: 'user'
    }
];

// Cek apakah user sudah login
function checkAuthStatus() {
    const user = localStorage.getItem('user');

    // Desktop elements
    const authButtons = document.getElementById('authButtons');
    const userProfile = document.getElementById('userProfile');
    const usernameDisplay = document.getElementById('username');
    const userEmail = document.getElementById('userEmail');

    // Mobile elements
    const mobileAuthButtons = document.getElementById('mobileAuthButtons');
    const mobileUserProfile = document.getElementById('mobileUserProfile');
    const mobileUsername = document.getElementById('mobileUsername');

    if (user) {
        const userData = JSON.parse(user);

        // Update Desktop
        if (authButtons) authButtons.classList.add('hidden');
        if (userProfile) {
            userProfile.classList.remove('hidden');
            userProfile.classList.add('flex');
        }
        if (usernameDisplay) usernameDisplay.textContent = userData.name;
        if (userEmail) userEmail.textContent = userData.email;

        // Update Mobile
        if (mobileAuthButtons) mobileAuthButtons.classList.add('hidden');
        if (mobileUserProfile) {
            mobileUserProfile.classList.remove('hidden');
            mobileUserProfile.classList.add('flex');
        }
        if (mobileUsername) mobileUsername.textContent = userData.name;
    } else {
        // User belum login - Update both desktop & mobile
        if (authButtons) authButtons.classList.remove('hidden');
        if (userProfile) {
            userProfile.classList.add('hidden');
            userProfile.classList.remove('flex');
        }
        
        if (mobileAuthButtons) mobileAuthButtons.classList.remove('hidden');
        if (mobileUserProfile) {
            mobileUserProfile.classList.add('hidden');
            mobileUserProfile.classList.remove('flex');
        }
    }
}

// Fungsi untuk login dengan role-based redirect
function loginUser(email, password) {
    // Validasi input
    if (!email || !password) {
        alert('Email dan password harus diisi!');
        return false;
    }

    // 1. Cek apakah ini akun admin default
    const adminUser = defaultUsers.find(u => u.email === email && u.password === password && u.role === 'admin');
    
    if (adminUser) {
        // Login sebagai admin
        const user = {
            name: adminUser.name,
            email: adminUser.email,
            role: 'admin'
        };
        
        localStorage.setItem('user', JSON.stringify(user));
        alert('Login berhasil sebagai Admin! 🎉');
        
        // Redirect ke dashboard admin
        window.location.href = 'admin/index.html';
        return true;
    }

    // 2. Cek apakah ini user default
    const demoUser = defaultUsers.find(u => u.email === email && u.password === password && u.role === 'user');
    
    if (demoUser) {
        // Login sebagai user biasa
        const user = {
            name: demoUser.name,
            email: demoUser.email,
            role: 'user'
        };
        
        localStorage.setItem('user', JSON.stringify(user));
        alert('Login berhasil! 🎉');
        
        // Redirect ke halaman utama
        window.location.href = 'index.html';
        return true;
    }

    // 3. Cek apakah user sudah terdaftar (dari registrasi)
    const registeredUser = localStorage.getItem('registeredUser');
    
    if (registeredUser) {
        const userData = JSON.parse(registeredUser);
        
        // Verifikasi email dan password
        if (userData.email === email && userData.password === password) {
            // Login berhasil
            const user = {
                name: userData.name,
                email: userData.email,
                role: 'user' // User yang register otomatis role 'user'
            };
            
            localStorage.setItem('user', JSON.stringify(user));
            alert('Login berhasil! 🎉');
            window.location.href = 'index.html';
            return true;
        }
    }
    
    // Jika tidak cocok dengan semua kondisi di atas
    alert('Email atau password salah! ❌\n\nCoba akun demo:\nAdmin: admin@gasmain.com / admin123\nUser: user@example.com / user123');
    return false;
}

// Fungsi untuk register (user biasa)
function registerUser(name, email, password, confirmPassword) {
    // Validasi input
    if (!name || !email || !password || !confirmPassword) {
        alert('Semua field harus diisi!');
        return false;
    }

    // Validasi email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Format email tidak valid! 📧');
        return false;
    }

    // Validasi password minimal 6 karakter
    if (password.length < 6) {
        alert('Password minimal 6 karakter! 🔒');
        return false;
    }

    // Validasi password match
    if (password !== confirmPassword) {
        alert('Password tidak cocok! ❌');
        return false;
    }

    // Cek apakah email sudah digunakan oleh admin
    const isAdminEmail = defaultUsers.some(u => u.email === email);
    if (isAdminEmail) {
        alert('Email ini tidak dapat digunakan! ❌');
        return false;
    }

    // Cek apakah email sudah terdaftar
    const existingUser = localStorage.getItem('registeredUser');
    if (existingUser) {
        const userData = JSON.parse(existingUser);
        if (userData.email === email) {
            alert('Email sudah terdaftar! Silakan login. 🔑');
            return false;
        }
    }

    // Simpan data user baru
    const newUser = {
        name: name,
        email: email,
        password: password,
        role: 'user'
    };
    
    localStorage.setItem('registeredUser', JSON.stringify(newUser));
    alert('Registrasi berhasil! Silakan login. ✅');
    window.location.href = 'login.html';
    return true;
}

// Fungsi untuk logout - DIPERBAIKI
function logoutUser() {
    const confirmLogout = confirm('Apakah Anda yakin ingin keluar? 👋');
    
    if (confirmLogout) {
        // Ambil data user untuk cek role
        const userStr = localStorage.getItem('user');
        const userData = userStr ? JSON.parse(userStr) : null;
        const isAdmin = userData && userData.role === 'admin';
        
        // Hapus data user
        localStorage.removeItem('user');
        
        // Redirect berdasarkan role
        if (isAdmin) {
            // Jika admin, cek apakah sedang di folder admin/
            if (window.location.pathname.includes('/admin/')) {
                window.location.href = '../login.html';
            } else {
                window.location.href = 'login.html';
            }
        } else {
            // Jika user biasa
            window.location.href = 'login.html';
        }
    }
}

// Fungsi untuk cek akses admin (dipanggil di halaman admin)
function requireAdmin() {
    const user = localStorage.getItem('user');
    
    if (!user) {
        alert('Anda harus login terlebih dahulu! 🔒');
        window.location.href = '../login.html';
        return false;
    }
    
    const userData = JSON.parse(user);
    
    if (userData.role !== 'admin') {
        alert('Akses ditolak! Anda bukan admin. ❌');
        window.location.href = '../index.html';
        return false;
    }
    
    return true;
}

// Fungsi untuk cek login (untuk halaman yang butuh login)
function requireLogin() {
    const user = localStorage.getItem('user');
    
    if (!user) {
        alert('Silakan login terlebih dahulu! 🔒');
        window.location.href = 'login.html';
        return false;
    }
    
    return true;
}

// Toggle dropdown profile - DIPERBAIKI
function toggleProfileDropdown() {
    const dropdown = document.getElementById('profileDropdown');
    if (dropdown) {
        dropdown.classList.toggle('hidden');
    }
}

// Close dropdown ketika klik di luar - DIPERBAIKI
document.addEventListener('click', function(event) {
    const profileBtn = document.getElementById('profileBtn');
    const dropdown = document.getElementById('profileDropdown');
    
    if (dropdown && !dropdown.classList.contains('hidden')) {
        // Cek apakah klik di luar profile button dan dropdown
        if (profileBtn && !profileBtn.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.add('hidden');
        }
    }
});

// Jalankan pengecekan saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    checkAuthStatus();
    
    // Setup profile button click handler untuk toggle dropdown
    const profileBtn = document.getElementById('profileBtn');
    if (profileBtn) {
        profileBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            toggleProfileDropdown();
        });
    }
});