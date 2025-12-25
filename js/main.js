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