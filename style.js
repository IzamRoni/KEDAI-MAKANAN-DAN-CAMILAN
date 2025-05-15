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

    if (nama === '' || whatsapp === '' || alamat === '') {
      alert('Kolom wajib (nama, WA, alamat) harus diisi.');
      return;
    }

    let pesanWA = `Halo Admin, saya *${nama}*.\n` +
                  `No WA: *${whatsapp}*\n` +
                  `Alamat: *${alamat}*\n`;

    if (pertanyaan) pesanWA += `Pertanyaan:\n${pertanyaan}\n`;
    if (pesanan) pesanWA += `Pesanan:\n${pesanan}`;

    const encodedPesan = encodeURIComponent(pesanWA);

    // Dua nomor admin
    const adminNumbers = ['6285791436155', '6287845202348'];

    // Kirim ke semua admin satu per satu (dengan jeda 1 detik)
    adminNumbers.forEach((nomor, index) => {
      setTimeout(() => {
        const urlWA = `https://wa.me/${nomor}?text=${encodedPesan}`;
        window.open(urlWA, '_blank');
      }, index * 1000);
    });

    // Tampilkan struk di layar
    output.innerHTML = `
      <div class="struk">
        <h3>Terima kasih, ${nama}!</h3>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Alamat:</strong> ${alamat}</p>
        ${pertanyaan ? `<p><strong>Pertanyaan:</strong> ${pertanyaan}</p>` : ''}
        ${pesanan ? `<p><strong>Pesanan:</strong> ${pesanan}</p>` : ''}
        <p><em>Pesanan dikirim ke 2 admin via WhatsApp.</em></p>
      </div>
    `;
  });
});
