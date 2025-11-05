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
      // Kondisi 1: Apakah nama item mengandung teks pencarian?
      const matchesSearch = itemName.includes(searchText);
      
      // Kondisi 2: Apakah kategori item cocok dengan filter, ATAU apakah filter di set ke "Semua Kategori"?
      const matchesCategory = (selectedCategory === 'all') || (itemCategory === selectedCategory);

      // 5. Tampilkan atau sembunyikan item
      // JIKA kedua kondisi terpenuhi (cocok pencarian DAN cocok kategori)
      if (matchesSearch && matchesCategory) {
        item.style.display = 'block'; // Tampilkan item
      } else {
        item.style.display = 'none';  // Sembunyikan item
      }
    });
  }

  // Tambahkan 'pendengar' (event listener)
  // Jalankan fungsi filterMenu() setiap kali pengguna mengetik di search bar
  searchInput.addEventListener('input', filterMenu);
  
  // Jalankan fungsi filterMenu() setiap kali pengguna mengganti pilihan filter
  categoryFilter.addEventListener('change', filterMenu);

});