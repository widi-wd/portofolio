let currentIndex = 0;

function slideImages() {
  const slides = document.querySelector('.image-slider-container');
  const totalImages = slides.children.length;

  // Geser gambar dengan animasi
  currentIndex = (currentIndex + 1) % totalImages;

  // Hitung posisi baru untuk geser gambar
  const newTransform = `translateX(-${currentIndex * 100}%)`;
  slides.style.transform = newTransform;
}

// Slider berjalan otomatis setiap 3 detik
setInterval(slideImages, 3000);

// Tab navigasi
document.getElementById('messages').addEventListener('click', () => {
  window.location.href = 'admin.html'; // Ganti dengan link halaman yang sesuai
});

document.getElementById('home').addEventListener('click', () => {
  window.location.href = 'index.html'; // Ganti dengan link halaman yang sesuai
});

document.getElementById('cart').addEventListener('click', () => {
  window.location.href = 'pricelist.html'; // Ganti dengan link halaman yang sesuai
});

// script.js

document.getElementById('toggle-mode').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode'); // Mengubah kelas pada body
  
  // Mengganti ikon berdasarkan mode
  const toggleIcon = document.getElementById('toggle-icon');
  if (document.body.classList.contains('dark-mode')) {
    toggleIcon.classList.remove('fa-sun'); // Hapus ikon matahari
    toggleIcon.classList.add('fa-moon'); // Tambah ikon bulan
  } else {
    toggleIcon.classList.remove('fa-moon'); // Hapus ikon bulan
    toggleIcon.classList.add('fa-sun'); // Tambah ikon matahari
  }
});