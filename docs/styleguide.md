# Style Guide: Nasi Kebuli Baba Una

## 1. Filosofi Desain
Desain yang digunakan adalah **Modern, Minimalis, & Elegan** dengan pendekatan desain artisanal. Kesan yang ingin ditonjolkan adalah otentik, premium, dan hangat.

## 2. Palet Warna (Tailwind Custom Colors)
- **Creamy (Background Utama):** `#FDFBF7` - Memberikan kesan bersih namun tidak sekaku putih murni.
- **Caramel (Aksen Utama):** `#C87941` - Mewakili warna rempah dan kehangatan.
- **Earth (Teks & Elemen Gelap):** 
  - `earth-900`: `#2D1B10` (Teks judul / background kontras)
  - `earth-800`: `#4A3320` (Teks paragraf)
  - `earth-700`: `#8C5326` (Aksen sekunder)
- **WhatsApp Green:** `#25D366` & `#128C7E` (Khusus untuk tombol Call-to-Action WhatsApp)

## 3. Tipografi
- **Primary / Heading:** Font Calligraphy / Serif (seperti *Playfair Display* atau yang setara) untuk memberikan nuansa klasik, premium, dan otentik.
- **Secondary / Body:** Font Sans-serif modern (seperti *Inter*) untuk kemudahan membaca (legibility) di layar kecil. Ukuran teks body menggunakan `text-sm` dengan `leading-relaxed`.

## 4. Komponen & Animasi (Motion)
- **Tombol / CTA:** Menggunakan animasi hover subtle (`scale: 1.05`, `scale: 0.95` on tap) dan shadow yang lembut (`shadow-tactile`).
- **Scroll Reveal:** Elemen akan muncul perlahan saat discroll (Fade In & Slide Up) menggunakan `motion/react` dengan transisi `duration: 0.7` dan `delay` bertahap (staggered).
- **Parallax:** Gambar background utama memiliki efek pergerakan vertikal yang berbeda dari kecepatan scroll, memberikan kedalaman ruang (3D feel).

## 5. Tata Letak (Layout)
- **Mobile-First:** Selalu mengutamakan tampilan di layar kecil. Padding yang cukup (minimum `p-6` atau `p-12`).
- **Negative Space:** Penggunaan ruang kosong yang proporsional untuk memisahkan antar section agar desain tidak terasa penuh/sesak.
- **Z-Index:**
  - `z-10` s.d `z-40`: Komponen halaman (Hero text, konten overlay).
  - `z-50`: Navbar / Header.
  - `z-[9999]`: Floating action button (seperti WhatsApp) agar tidak tertutup elemen apapun di mobile.
