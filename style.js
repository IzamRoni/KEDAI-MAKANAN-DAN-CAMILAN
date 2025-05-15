// === NAVBAR RESPONSIF (BERLAKU UNTUK SEMUA HALAMAN) ===
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
});

// === BERANDA (index.html): Animasi Saat Scroll ===
document.addEventListener('DOMContentLoaded', function () {
  const fadeInElements = document.querySelectorAll('.fade-in');

  function handleScrollAnimation() {
    fadeInElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', handleScrollAnimation);
  handleScrollAnimation(); // panggil sekali saat load
});

// === PRODUK (produk.html): Efek Klik Produk ===
document.addEventListener('DOMContentLoaded', function () {
  const produkCards = document.querySelectorAll('.produk-card');

  produkCards.forEach(card => {
    card.addEventListener('click', () => {
      alert(`Kamu memilih produk: ${card.dataset.nama || 'Produk Tanpa Nama'}`);
    });
  });
});

// === PROMO (promo.html): Efek Hover dan Scroll ===
document.addEventListener('DOMContentLoaded', function () {
  const promoItems = document.querySelectorAll('.promo-item');

  promoItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.classList.add('highlight');
    });
    item.addEventListener('mouseleave', () => {
      item.classList.remove('highlight');
    });
  });

  window.addEventListener('scroll', () => {
    promoItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        item.classList.add('show');
      }
    });
  });
});

// === KONTAK (kontak.html): Validasi Form dan Tampilkan Pesan ===
// === NAVBAR RESPONSIF (BERLAKU UNTUK SEMUA HALAMAN) ===
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
});

// === BERANDA (index.html): Animasi Saat Scroll ===
document.addEventListener('DOMContentLoaded', function () {
  const fadeInElements = document.querySelectorAll('.fade-in');

  function handleScrollAnimation() {
    fadeInElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', handleScrollAnimation);
  handleScrollAnimation(); // panggil sekali saat load
});

// === PRODUK (produk.html): Efek Klik Produk ===
document.addEventListener('DOMContentLoaded', function () {
  const produkCards = document.querySelectorAll('.produk-card');

  produkCards.forEach(card => {
    card.addEventListener('click', () => {
      alert(`Kamu memilih produk: ${card.dataset.nama || 'Produk Tanpa Nama'}`);
    });
  });
});

// === PROMO (promo.html): Efek Hover dan Scroll ===
document.addEventListener('DOMContentLoaded', function () {
  const promoItems = document.querySelectorAll('.promo-item');

  promoItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.classList.add('highlight');
    });
    item.addEventListener('mouseleave', () => {
      item.classList.remove('highlight');
    });
  });

  window.addEventListener('scroll', () => {
    promoItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        item.classList.add('show');
      }
    });
  });
});

// === KONTAK (kontak.html): Validasi Form dan Tampilkan Pesan ===
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#formKontak');
  const output = document.querySelector('#output');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nama = form.querySelector('input[name="nama"]').value.trim();
    const whatsapp = form.querySelector('input[name="wa"]').value.trim();
    const alamat = form.querySelector('input[name="Alamat"]').value.trim();
    const pertanyaan = form.querySelector('input[name="pertanyaan"]').value.trim();
    const pesanan = form.querySelector('textarea[name="pesan"]').value.trim();
    const admin = form.querySelector('select[name="admin"]').value;

    if (nama === '' || whatsapp === '' || alamat === '') {
      alert('Kolom wajib (Nama, WA, dan Alamat) harus diisi.');
      return;
    }

    // Format pesan WhatsApp
    let pesanWA = `Halo Admin, saya *${nama}*.\n` +
                  `No WA: *${whatsapp}*\n` +
                  `Alamat: *${alamat}*\n`;

    if (pertanyaan) {
      pesanWA += `Pertanyaan:\n${pertanyaan}\n`;
    }

    if (pesanan) {
      pesanWA += `Pesanan:\n${pesanan}`;
    }

    // URL WhatsApp ke admin yang dipilih
    const urlWA = `https://wa.me/${admin}?text=${encodeURIComponent(pesanWA)}`;
    window.open(urlWA, '_blank');

    // Tampilkan struk di halaman
    output.innerHTML = `
      <div class="struk">
        <h3>Terima kasih, ${nama}!</h3>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Alamat:</strong> ${alamat}</p>
        ${pertanyaan ? `<p><strong>Pertanyaan:</strong> ${pertanyaan}</p>` : ''}
        ${pesanan ? `<p><strong>Pesanan:</strong> ${pesanan}</p>` : ''}
        <p><em>Pesanan telah dikirim ke admin pilihan: ${admin}</em></p>
      </div>
    `;
  });
});
