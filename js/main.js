// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = mobileMenuBtn.querySelector('.material-symbols-outlined');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');

    // Toggle icon between menu and close
    if (mobileMenu.classList.contains('hidden')) {
        menuIcon.textContent = 'menu';
    } else {
        menuIcon.textContent = 'close';
    }
});

// Copy Promo Code Function
function copyPromo() {
    const text = document.getElementById("promoCode").innerText;

    navigator.clipboard.writeText(text).then(() => {
        alert("Kode promo berhasil disalin 🚀");
    });
}

// dropdown user profile
const trigger = document.getElementById("profileTrigger");
const dropdown = document.getElementById("userDropdown");

trigger.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");
});

// klik di luar = dropdown nutup
document.addEventListener("click", (e) => {
    if (!trigger.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.add("hidden");
    }
});


window.addEventListener("load", () => {
    if (location.hash === "#bulutangkis") {
        filterLapangan("bulutangkis");
    }
});

// 1. Pilih durasi (1/2/3 jam)
function selectDuration(hours) {
    // Loop semua tombol, reset style
    // Tombol yang diklik jadi hijau
}

// 2. Pilih jam mulai  
function selectTime(time) {
    // Loop semua tombol, reset style
    // Tombol yang diklik jadi hijau
}