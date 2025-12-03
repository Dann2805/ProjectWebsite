// Tunggu sampai semua HTML selesai dimuat sebelum menjalankan skrip
document.addEventListener('DOMContentLoaded', () => {

  // Ambil elemen-elemen yang kita butuhkan dari HTML
  const searchInput = document.getElementById('menu-search');
  const categoryFilter = document.getElementById('filter-kategori');
  const menuItems = document.querySelectorAll('.menu-item');

  // Buat fungsi utama untuk memfilter menu
  function filterMenu() {
    // 1. Ambil nilai dari search bar (ubah ke huruf kecil)
    const searchText = searchInput.value.toLowerCase();
    
    // 2. Ambil nilai dari filter kategori
    const selectedCategory = categoryFilter.value;

    // 3. Loop (ulangi) untuk setiap item menu satu per satu
    menuItems.forEach(item => {
      
      // Ambil teks nama menu (misal: "Nasi Goreng Spesial") dan ubah ke huruf kecil
      const itemName = item.querySelector('h3').textContent.toLowerCase();
      
      // Ambil data kategori yang kita tambahkan di HTML tadi
      const itemCategory = item.dataset.category;

      // 4. Cek kondisi
      const matchesSearch = itemName.includes(searchText);
      const matchesCategory = (selectedCategory === 'all') || (itemCategory === selectedCategory);

      // 5. Tampilkan atau sembunyikan item
      if (matchesSearch && matchesCategory) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // Event listener
  searchInput.addEventListener('input', filterMenu);
  categoryFilter.addEventListener('change', filterMenu);

});



/* ================================
   SECTION: DETAIL PAGE HANDLER
   ================================ */
document.addEventListener("DOMContentLoaded", function() {
  const detailSections = document.querySelectorAll(".menu-detail");
  
  detailSections.forEach((section, i) => {
    setTimeout(() => {
      section.classList.add("fade-in");
    }, i * 300);
  });
});



/* ================================
   TAMBAHAN ANIMASI EFEK HALUS (fade-in)
   ================================ */

// Saat halaman detail dimuat, tambahkan efek transisi untuk .detail-section
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll(".detail-section");

  sections.forEach((section, index) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(40px)";
    
    setTimeout(() => {
      section.style.transition = "all 1s ease";
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }, 300 * index);
  });
});



/* ================================
   PAGE TRANSITION (fade in - fade out)
   ================================ */
const body = document.body;
const TRANSITION_DURATION = 450;

// Set state awal
body.classList.remove('fade-out');
body.classList.add('fade-in');

// Tangkap klik pada link internal
const links = document.querySelectorAll('a[href]:not([target="_blank"])');
links.forEach(link => {
  const href = link.getAttribute('href') || '';

  // Abaikan anchor dan javascript:
  if (href.startsWith('#') || href.startsWith('javascript:')) return;

  link.addEventListener('click', (e) => {

    // Jika ctrl/meta/shift ditekan atau link eksternal → biarkan default
    if (e.metaKey || e.ctrlKey || e.shiftKey || href.startsWith('http')) return;

    e.preventDefault();

    // Mulai animasi keluar
    body.classList.remove('fade-in');
    body.classList.add('fade-out', 'is-transitioning');

    // Setelah animasi selesai, pindah halaman
    setTimeout(() => {
      window.location.href = href;
    }, TRANSITION_DURATION);
  });
});
