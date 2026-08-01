# KulinerBunta.id

Portal statis multi-aplikasi untuk ekosistem KulinerBunta.id.

- launcher utama di `index.html`
- portal pembeli di `app-pembeli/`
- portal merchant di `app-merchant/`
- portal kurir di `app-kurir/`
- portal admin di `app-admin/`
- dokumentasi pendukung di `docs/`

## Jalankan lokal

Karena proyek ini bersifat statis, Anda bisa:

1. buka langsung `index.html`, atau
2. jalankan preview server:

```bash
node server.js
```

Lalu akses:

```text
http://localhost:3000
```

## Struktur repo

- `.github/workflows/pages.yml` untuk deploy otomatis ke GitHub Pages
- `.github/workflows/validate.yml` untuk validasi ringan saat push atau pull request
- `.nojekyll` agar file statis dipublikasikan apa adanya
- `server.js` untuk preview lokal sederhana

## Deploy ke GitHub Pages

Struktur proyek ini sudah disiapkan untuk hosting statis. Saat deploy:

1. inisialisasi remote GitHub lalu push branch `main`
2. pada GitHub, buka `Settings > Pages`
3. pada bagian source, pilih `GitHub Actions`
4. workflow `Deploy static site to GitHub Pages` akan mempublikasikan isi repo ini

Workflow ini memakai pola resmi GitHub Pages berbasis artifact upload dan deploy action.

## Catatan

- `server.js` hanya untuk preview lokal, bukan untuk GitHub Pages
- data aplikasi saat ini disimpan di `localStorage`, jadi cocok untuk demo/prototype
- service worker utama ada di `sw.js`
- beberapa file scaffold lama yang tidak direferensikan lagi sudah dibersihkan agar repo lebih ringkas
