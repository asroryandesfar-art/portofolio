# ÉLITE - Luxury Landing Page

Website landing page premium dengan desain elegan yang siap dijual atau digunakan untuk project Anda.

## 📁 File yang Anda Dapatkan

```
├── index.html          # File HTML utama (256 baris)
├── style.css           # Semua styling (906 baris)
├── script.js           # JavaScript interaktif (300+ baris)
└── README.md           # Dokumentasi ini
```

**PENTING**: Ketiga file (HTML, CSS, JS) HARUS berada dalam folder yang sama!

## ✨ Fitur Website

### Tampilan
- Hero section dengan background foto luxury interior
- Services section (3 kartu layanan)
- Portfolio/Work section (3 project showcase)
- CTA section dengan background elegan
- Footer dengan social links
- Mobile responsive 100%

### Interaksi
- Mobile menu yang berfungsi (hamburger menu)
- Smooth scroll ke section
- Hover effects pada semua tombol
- Parallax effect pada background
- Fade in animations saat scroll
- Alert popup saat klik tombol Contact

### Teknologi
- Pure HTML/CSS/JavaScript (NO framework)
- Google Fonts: Cormorant Garamond + Montserrat
- Inline SVG icons (NO external dependencies)
- Background images dari URL (sudah include)

## 🎨 Warna & Font

**Warna Utama:**
- Dark Background: `#0a0a0a`
- Text: `#e8e5df`
- Gold Accent: `#d4af37`

**Font:**
- Display: Cormorant Garamond (elegant serif)
- Body: Montserrat (modern sans-serif)

## 🚀 CARA PUBLIKASI (MUDAH)

### Metode 1: Netlify (PALING MUDAH - 1 MENIT)

1. Buka https://app.netlify.com/drop
2. Drag & drop folder berisi 3 file (HTML, CSS, JS)
3. DONE! Dapat URL: `https://random-name.netlify.app`
4. (Opsional) Bisa ganti nama di Site Settings

**Tidak perlu login, tidak perlu setup!**

### Metode 2: GitHub Pages (GRATIS SELAMANYA)

1. Login ke GitHub
2. Buat repository baru (nama bebas)
3. Upload 3 file ke repository
4. Klik Settings → Pages
5. Source: pilih "main" branch → Save
6. Tunggu 1 menit, dapat URL: `https://username.github.io/repo-name/`

### Metode 3: Hosting Biasa (cPanel/Niagahoster/dll)

1. Login ke cPanel hosting Anda
2. Buka File Manager
3. Masuk ke folder `public_html`
4. Upload 3 file
5. Akses: `https://domain-anda.com/index.html`

### Metode 4: 000webhost (GRATIS)

1. Daftar di https://www.000webhost.com
2. Buat website baru
3. Upload 3 file via File Manager
4. Dapat subdomain gratis

## ✏️ CARA EDIT KONTEN

### 1. Mengubah Judul Hero

Buka `index.html`, cari baris 85-86:

```html
<h1 class="hero-title font-display">Crafting</h1>
<h1 class="hero-title-accent font-display">Distinction</h1>
```

Ganti "Crafting" dan "Distinction" dengan teks Anda.

### 2. Mengubah Deskripsi

Baris 90-92:

```html
<p class="hero-description font-body">
    We create refined digital experiences...
</p>
```

Ganti dengan deskripsi bisnis Anda.

### 3. Mengubah Nama Brand

Cari "ÉLITE" di `index.html` (ada 3 tempat):
- Baris 25: Logo di navbar
- Baris 237: Footer logo  
- Baris 6: Title tag

Ganti semua dengan nama brand Anda.

### 4. Mengubah Services

Baris 123-158 di `index.html`:

```html
<div class="service-card fade-in-up">
    <div class="service-number font-display">01</div>
    <h3 class="service-title font-display">Brand Identity</h3>
    <p class="service-description font-body">
        Crafting distinctive visual languages...
    </p>
</div>
```

Edit judul dan deskripsi sesuai layanan Anda.

### 5. Mengubah Portfolio Items

Baris 176-209, edit:

```html
<h3 class="project-title font-display">Lumière</h3>
<p class="project-category font-body">Luxury Hospitality</p>
<span class="project-year font-body">2024</span>
```

Ganti dengan nama project, kategori, dan tahun Anda.

### 6. Mengubah Background Foto

**PENTING**: Background menggunakan URL online, BUKAN file lokal!

Buka `style.css` dan cari baris berikut:

**Hero Background** (baris 270):
```css
.hero-bg-image {
    background-image: url('https://www.thedesignauthority.com.au/wp-content/uploads/2023/01/Luxury-Modern-Interior-Design-Ideas.jpg');
```

**Services Background** (baris 475):
```css
.services-bg::before {
    background-image: url('https://i.pinimg.com/originals/21/85/ac/2185acb38c15e5f40e40e15097cfeae6.jpg');
```

**Work Background** (baris 596):
```css
.work-bg::before {
    background-image: url('https://img.freepik.com/premium-photo/elegant-marble-texture-background-with-gold-highlights_1198457-28455.jpg');
```

**CTA Background** (baris 700):
```css
.cta-bg-image {
    background-image: url('https://www.carpentryguru.com/singapore/wp-content/uploads/2020/12/feature-image-ultra-luxury-living-room-1200x900.jpg');
```

**Cara mengganti:**
1. Cari nomor baris di atas di file `style.css`
2. Ganti URL dengan foto Anda sendiri

**Cara dapat URL foto:**
- Upload ke imgur.com → copy link
- Upload ke imgbb.com → copy direct link
- Pakai Unsplash: `https://images.unsplash.com/photo-id?w=1920`
- Pakai foto dari website yang sudah ada

**Jangan** pakai path lokal seperti `url('foto.jpg')` atau `url('./images/foto.jpg')` - tidak akan muncul saat online!

### 7. Mengubah Warna Tema

**Cara Tercepat: Find & Replace**

Buka `style.css` dengan text editor (Notepad++, VSCode, Sublime):

1. Tekan `Ctrl + H` (Windows) atau `Cmd + H` (Mac)
2. Ganti warna-warna berikut:

**Gold Accent** (muncul 18x di file):
- Find: `#d4af37`
- Replace: `#YOUR_COLOR` (contoh: `#c77b30` untuk orange gold)

**Background Dark** (muncul puluhan kali):
- Find: `#0a0a0a`
- Replace: `#YOUR_COLOR` (contoh: `#1a1a1a` untuk lebih terang)

**Text Color** (muncul beberapa kali):
- Find: `#e8e5df`
- Replace: `#YOUR_COLOR` (contoh: `#ffffff` untuk putih bersih)

**Klik Replace All** untuk ganti semua sekaligus!

**Rekomendasi Kombinasi Warna:**
- Luxury Blue: Background `#0a1628` + Accent `#4a90e2` + Text `#f5f5f5`
- Rose Gold: Background `#1a0a0a` + Accent `#b76e79` + Text `#f0e5e5`
- Emerald: Background `#0a1a0f` + Accent `#50c878` + Text `#e8f5e9`
- Purple Luxury: Background `#0f0a1a` + Accent `#9b59b6` + Text `#f0ecf5`

### 8. Menambah Social Media Links

Baris 239-241 di `index.html`:

```html
<a href="#" class="social-link font-body">INSTAGRAM</a>
<a href="#" class="social-link font-body">LINKEDIN</a>
<a href="#" class="social-link font-body">BEHANCE</a>
```

Ganti `href="#"` dengan URL social media Anda:
```html
<a href="https://instagram.com/username" class="social-link font-body">INSTAGRAM</a>
```

## 🔧 TROUBLESHOOTING

**Q: Background foto tidak muncul?**
A: Pastikan URL foto masih aktif. Test buka URL di browser baru.

**Q: Mobile menu tidak berfungsi?**
A: Pastikan file `script.js` ada di folder yang sama dengan `index.html`.

**Q: Font tidak muncul?**
A: Pastikan koneksi internet aktif saat buka website (font dari Google Fonts).

**Q: Animasi tidak jalan?**
A: Clear cache browser (Ctrl+F5) atau buka di incognito mode.

## 💰 DIJUAL DI MARKETPLACE

### Persiapan Sebelum Jual:

1. **Ganti semua konten** (jangan pakai "ÉLITE")
2. **Screenshot website** dari berbagai ukuran layar
3. **Buat preview video** (opsional tapi recommended)
4. **Tulis deskripsi menarik** tentang fitur
5. **Test di berbagai browser** (Chrome, Firefox, Safari)

### Platform Jualan:

1. **ThemeForest** - themeforest.net
   - Upload: Perlu approved dulu
   - Harga saran: $19-$39
   - Anda dapat: 55-70%

2. **Creative Market** - creativemarket.com
   - Upload: Langsung bisa
   - Harga saran: $15-$29  
   - Anda dapat: 70%

3. **Gumroad** - gumroad.com
   - Paling gampang, langsung bisa jual
   - Harga: Terserah Anda
   - Anda dapat: 90% (fee 10%)

4. **Jual Langsung ke Client**
   - Harga: $100-$500 (tergantung customization)
   - Platform: Upwork, Fiverr, Freelancer
   - Anda dapat: 100% (setelah fee platform)

### Tips Agar Laku:

✅ Buat 2-3 variasi warna (dark, light, colorful)
✅ Tambah 2-3 halaman lagi (About, Contact form, Blog)
✅ Sertakan dokumentasi lengkap (copy README ini)
✅ Buat video tutorial cara edit
✅ Tawarkan support 6 bulan
✅ Update berkala (tambah fitur baru)

## 📱 Yang SUDAH TERMASUK

✅ Fully responsive (mobile, tablet, desktop)
✅ Smooth scroll navigation
✅ Mobile hamburger menu (berfungsi)
✅ Hover effects semua elemen
✅ Parallax background
✅ Fade in animations
✅ Contact button dengan alert
✅ 4 foto background elegan (via URL)
✅ SEO-friendly HTML structure
✅ Fast loading (no heavy libraries)
✅ Cross-browser compatible

## 🎯 Browser Support

✅ Chrome/Edge (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Mobile browsers (iOS Safari, Chrome Android)

## ⚠️ CATATAN PENTING

1. **File HARUS dalam 1 folder** yang sama
2. **Nama file JANGAN diubah** (index.html, style.css, script.js)
3. **Background foto pakai URL**, bukan file lokal
4. **Butuh internet** untuk load Google Fonts
5. **Test dulu** sebelum publish (buka index.html di browser)

## 🆘 Butuh Bantuan?

Jika ada error atau bingung:
1. Pastikan 3 file dalam 1 folder
2. Cek console browser (F12) untuk error
3. Test di browser lain
4. Clear cache browser

---

**© 2024 ÉLITE Template**

Template ini bebas digunakan untuk project pribadi, client, atau dijual kembali dengan modifikasi.

**Selamat menggunakan dan semoga sukses! 🚀**
