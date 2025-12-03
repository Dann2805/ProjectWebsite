// --- FILE: nav-logic.js (Copy Semua Kode Ini) ---
import { auth, db, onAuthStateChanged, collection, query, where, getDocs } from './firebaseconfig.js';

// Fungsi OTOMATIS buat tombol History
async function autoCreateHistoryButton(user) {
  // 1. Cari Navbar di halaman
  const navUl = document.querySelector('header nav ul');
  if (!navUl) return; // Kalau gak ada navbar, stop.

  try {
    // 2. Cek apakah user punya data reservasi
    const q = query(collection(db, "reservasi"), where("userId", "==", user.uid));
    const snap = await getDocs(q);

    // 3. Jika ada data, dan tombol belum ada -> Buat tombolnya!
    if (!snap.empty && !document.getElementById('auto-history-btn')) {
      const li = document.createElement('li');
      li.id = 'auto-history-btn'; // Kasih ID biar gak dobel
      
      // Cek apakah kita sedang di halaman history (biar warna oranye/active)
      const isActive = window.location.pathname.includes('history.html') ? 'class="active"' : '';
      
      li.innerHTML = `<a href="history.html" ${isActive}>History</a>`;
      navUl.appendChild(li); // Masukkan ke navbar
    }
  } catch (e) {
    console.log("Cek history skip:", e);
  }
}

// Jalankan robot saat login terdeteksi
onAuthStateChanged(auth, (user) => {
  if (user) autoCreateHistoryButton(user);
});