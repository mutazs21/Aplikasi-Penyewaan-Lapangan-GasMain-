// auth.js - File untuk menangani autentikasi

// Cek apakah user sudah login
function checkAuthStatus() {
    const user = localStorage.getItem('user');

    // destopt elements
    const authButtons = document.getElementById('authButtons');
    const userProfile = document.getElementById('userProfile');
    const usernameDisplay = document.getElementById('username');

    // mobile elements
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

        // Update Mobile - INI YANG KURANG!
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

// Fungsi untuk login (dipanggil dari halaman login.html)
function loginUser(email, password) {
    // Validasi input
    if (!email || !password) {
        alert('Email dan password harus diisi!');
        return false;
    }

    // Cek apakah user sudah terdaftar
    const registeredUser = localStorage.getItem('registeredUser');
    
    if (registeredUser) {
        const userData = JSON.parse(registeredUser);
        
        // Verifikasi email dan password
        if (userData.email === email && userData.password === password) {
            // Login berhasil
            const user = {
                name: userData.name,
                email: userData.email
            };
            
            localStorage.setItem('user', JSON.stringify(user));
            alert('Login berhasil! 🎉');
            window.location.href = 'index.html';
            return true;
        } else {
            alert('Email atau password salah! ❌');
            return false;
        }
    } else {
        alert('Akun tidak ditemukan. Silakan daftar terlebih dahulu! 📝');
        return false;
    }
}

// Fungsi untuk register (dipanggil dari halaman daftar.html)
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

    // Cek apakah email sudah terdaftar
    const existingUser = localStorage.getItem('registeredUser');
    if (existingUser) {
        const userData = JSON.parse(existingUser);
        if (userData.email === email) {
            alert('Email sudah terdaftar! Silakan login. 🔑');
            return false;
        }
    }

    // Simpan data user
    const newUser = {
        name: name,
        email: email,
        password: password
    };
    
    localStorage.setItem('registeredUser', JSON.stringify(newUser));
    alert('Registrasi berhasil! Silakan login. ✅');
    window.location.href = 'login.html';
    return true;
}

// Fungsi untuk logout
function logoutUser() {
    const confirmLogout = confirm('Apakah Anda yakin ingin keluar? 👋');
    
    if (confirmLogout) {
        localStorage.removeItem('user');
        alert('Logout berhasil! 👋');
        window.location.href = 'index.html';
    }
}

// Jalankan pengecekan saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    checkAuthStatus();
    
    // Tambahkan event listener untuk klik pada profil user (untuk logout)
    const userProfile = document.getElementById('userProfile');
    if (userProfile) {
        userProfile.addEventListener('click', function() {
            logoutUser();
        });
        // Tambahkan cursor pointer
        userProfile.style.cursor = 'pointer';
    }
});