# Undangan Pernikahan (React + Tailwind + Bootstrap)

Undangan digital mewah dengan animasi bunga, scroll reveal, dan siap deploy ke GitHub Pages.

## Fitur

- **Layar pembuka**: Bunga berterbangan & jatuh, latar bunga realistis
- **Animasi scroll**: Konten muncul satu per satu (slide mewah)
- **Kisah Cinta**: Galeri 1–5 foto dengan auto-slide (menggantikan video)
- **Akad & Resepsi**: Kolom terpisah, desain rapi
- **Lokasi**: Sentani, Pos 7 Bawah Sentani
- **Galeri**: 1–5 foto, auto-slide
- **Love Gift**: QRIS + Transfer BSI
- **Font**: Cormorant Garamond, Great Vibes, Amiri
- **Responsif**: Mobile-first, UI/UX rapi

## Menjalankan di lokal

```bash
npm install
npm run dev
```

Buka http://localhost:5173

## Build

```bash
npm run build
```

Hasil ada di folder `dist/`.

## Deploy ke GitHub Pages

1. **Atur base URL**  
   Buka `vite.config.js` dan sesuaikan `repoName` dengan nama repo Anda (misalnya `undangan-4.x` atau `undangan`).

2. **Aktifkan GitHub Pages**  
   - Repo → Settings → Pages  
   - Source: **GitHub Actions**

3. **Push ke branch yang dipakai workflow**  
   Workflow ada di `.github/workflows/github-pages.yml` dan berjalan pada push ke branch `4.x`, `main`, atau `master`.

4. **URL situs**  
   `https://<username>.github.io/<repoName>/`

## Kustomisasi

- **Nama & foto**: Edit di `src/components/Bride.jsx`, `Hero.jsx`, `OpeningScreen.jsx`
- **Tanggal & jam**: `src/components/WeddingDate.jsx` (konstanta `TARGET` dan teks)
- **Lokasi & Google Maps**: `WeddingDate.jsx` (variabel `mapUrl` dan teks "Sentani, Pos 7 Bawah Sentani")
- **Foto Kisah Cinta**: `src/components/LoveStory.jsx` (array `loveStoryPhotos`, 1–5 URL/path)
- **Foto Galeri**: `src/components/Gallery.jsx` (array `galleryImages`)
- **Love Gift**: `src/components/LoveGift.jsx` (gambar QRIS di `public/assets/images/donate.png`, nomor rekening BSI)
- **Credit**: `src/components/Footer.jsx` (link ke dirgaakbar)

## Struktur aset

- Letakkan gambar/foto di `public/assets/images/`
- Musik: `public/assets/music/`
- QRIS: ganti `public/assets/images/donate.png` dengan gambar QRIS Anda

## Tech stack

- React 18
- Vite 5
- Tailwind CSS 3
- Bootstrap 5
- Framer Motion
- react-intersection-observer
