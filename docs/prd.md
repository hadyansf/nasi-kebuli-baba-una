# Product Requirements Document (PRD)
## Nasi Kebuli Baba Una - Landing Page

### 1. Tujuan Produk (Product Objective)
Membangun sebuah landing page yang konversinya tinggi, modern, minimalis, dan sangat responsif untuk mempromosikan dan menjual produk "Nasi Kebuli Baba Una". Landing page ini dirancang untuk menonjolkan kualitas premium dan keotentikan produk, sekaligus memudahkan pelanggan untuk langsung memesan melalui WhatsApp.

### 2. Target Audiens
- Pecinta kuliner khas Timur Tengah / rempah.
- Pekerja kantoran atau keluarga yang mencari hidangan berkualitas untuk makan siang/malam.
- Penyelenggara acara (event organizer) atau individu yang membutuhkan layanan katering (porsi nampan/besar).
- Berlokasi di area Kota Sukabumi dan sekitarnya.

### 3. Fitur Utama (Core Features / MVP)
- **Hero Section:** Bagian pengenalan dengan gambar latar belakang berkualitas tinggi yang memiliki efek parallax, judul yang menarik (value proposition), dan tombol Call-to-Action (CTA) utama.
- **Menu Showcase:** Menampilkan varian produk (misal: Porsi Personal, Porsi Nampan) dengan foto yang menggugah selera dan deskripsi singkat.
- **Social Proof / Testimoni:** Menampilkan ulasan positif dari pelanggan untuk membangun kepercayaan.
- **Floating WhatsApp Order:** Tombol WhatsApp yang selalu melayang (sticky) di sudut layar di semua perangkat (termasuk mobile) untuk memudahkan pemesanan instan.
- **Footer:** Berisi informasi operasional (jam buka, area layanan) dan hak cipta.

### 4. Kebutuhan Non-Fungsional (Non-Functional Requirements)
- **Mobile-First Design:** Karena mayoritas pelanggan mengakses melalui smartphone, UI/UX harus sempurna di layar kecil (touch-friendly, font yang mudah dibaca).
- **Performa & Kecepatan:** Aset gambar harus dioptimasi agar waktu muat (load time) cepat, mengingat pentingnya visual dalam produk kuliner.
- **Animasi (Micro-interactions):** Penggunaan animasi scroll reveal dan parallax yang halus menggunakan `motion/react` untuk memberikan pengalaman browsing yang premium dan tidak kaku, tanpa mengorbankan performa.
- **Aksesibilitas (Accessibility):** Kontras warna yang baik antara teks dan latar belakang (Earth tones vs Creamy) sesuai standar WCAG dasar, serta penggunaan tag semantik HTML.

### 5. Metrik Kesuksesan (Success Metrics)
- **Click-Through Rate (CTR) WhatsApp:** Persentase pengunjung yang mengklik tombol pemesanan WhatsApp.
- **Bounce Rate:** Mempertahankan bounce rate yang rendah dengan visual awal (Hero) yang memikat.
- **Time on Page:** Waktu rata-rata yang dihabiskan pengunjung untuk melihat-lihat menu dan halaman.

### 6. Rencana Fase Selanjutnya (Future Roadmap)
- Integrasi katalog WhatsApp Business.
- Penambahan halaman galeri (Video/Foto proses memasak).
- Integrasi analitik (Google Analytics / Meta Pixel) untuk tracking konversi.
