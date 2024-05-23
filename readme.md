# API Pencarian Tempat Terdekat

**URL:** https://gmaps-geocode-nearby.vercel.app/

API ini digunakan untuk mencari tempat terdekat berdasarkan koordinat (latitude dan longitude) yang diberikan, dengan jenis tempat dan radius yang dapat diatur. Secara default, jenis tempat yang dicari adalah "museum" dan radius pencarian adalah 10 kilometer.

## Konfigurasi Lingkungan

1. **API_KEY**: API Key dari Google Maps API. API Key dapat diatur ini dalam file `.env`.

## Endpoint

### `GET gmaps-geocode-nearby.vercel.app/geocode/:longitude/:latitude/:type?/:radius?`

#### Parameter

- `longitude` (wajib): Koordinat bujur (longitude) dari lokasi pencarian.
- `latitude` (wajib): Koordinat lintang (latitude) dari lokasi pencarian.
- `type` (opsional): Jenis tempat yang dicari (misalnya: "restaurant", "park"). Jika tidak diinputkan, defaultnya adalah "museum".
- `radius` (opsional): Radius pencarian dalam kilometer. Jika tidak diinputkan, defaultnya adalah 10 kilometer (10000 meter).

#### Contoh Permintaan

```
GET gmaps-geocode-nearby.vercel.app/geocode/110.3696068/-7.7495904/museum/10
```

#### Respon

Respon akan berupa JSON yang berisi data tempat-tempat terdekat dalam radius tertentu yang memenuhi kriteria, termasuk detail tempat dan URL gambar.

##### Contoh Respon

```json
{
  "data": [
    {
      "id": "ChIJickTkPlYei4RM0P_uCXblio",
      "url": "https://maps.google.com/?q=place_id:ChIJickTkPlYei4RM0P_uCXblio",
      "name": "Monumen Yogya Kembali",
      "formatted_address": "Jl. Ring Road Utara, Jongkang, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581, Indonesia",
      "rating": 4.5,
      "total_ratings": 13604,
      "location": {
        "lat": -7.7495904,
        "long": 110.3696068
      },
      "photos": [
        "https://maps.googleapis.com/maps/api/place/photo?maxheight=800&maxwidth=800&photo_reference=AUGGfZnW5o2_8YhJHYpUWk-ejW-YKE5aPn-GU1ig9NikPxYNHDL4FrGR4piDrv2RSbUjsyaJlou-Sxj5fb7aJeaNzuDdh14AyWoIt4aTMikwRsG9AeoVpmsr3_iemTTsKuhrarxDhThT4wIcXaLUIFXm1Q1b8ew5ZI4xJn9d-JeQNeSisT_z&key=API_KEY",
        "https://maps.googleapis.com/maps/api/place/photo?maxheight=800&maxwidth=800&photo_reference=AUGGfZlE1Q8dez-HGF-02u3Id4Msny1uCoHeiTpan_cLz3yP6XsquFnupa4liVgRyCSnVW4kVdfpsWs281UAi0PhcPGdZfVkBhYAwKlRogDuskON41KsZ9ys8-C3zq9WM6re_EDHbOAwoDceWvg6jEh5RK62FKyS0KgXsexNzYoW4bgEtiil&key=API_KEY",
        "https://maps.googleapis.com/maps/api/place/photo?maxheight=800&maxwidth=800&photo_reference=AUGGfZmtRPZxgwFyguZPMGHkAOYZSZRevdRQfV7Vv9fwkdwo5VTMRm4rQM4zg3FODIrmwIKtU0y80OgKRFJ8GQ1TEdkxDhHvaOS4NXsXj5AHZNNiaPb1zLsgBkRX7MCeFcG_u27rm62CX9jaGA3W6HxhByPSMsnJEBSjVUQHrHuid4uyWYsZ&key=API_KEY"
      ]
    },
    {
      "id": "ChIJ6bbSsEpYei4R6SX2gak57D0",
      "url": "https://maps.google.com/?q=place_id:ChIJ6bbSsEpYei4R6SX2gak57D0",
      "name": "Museum UGM",
      "formatted_address": "Universitas Gajah Mada Blok D-6 & D-7, Jl. Sagan, Sagan, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281, Indonesia",
      "rating": 4.6,
      "total_ratings": 216,
      "location": {
        "lat": -7.7740505,
        "long": 110.377893
      },
      "photos": [
        "https://maps.googleapis.com/maps/api/place/photo?maxheight=800&maxwidth=800&photo_reference=AUGGfZmE3T9eKItk1zsXT-pU-aEXBh-WkOIfdvfUcLrhTCD94QRgb7gjO9RJ9jpF38yB8IuWUqjB508zvHkYStdNfH3mGve1mXmX8ndYsu5O7R2m80VJV-3VjK-iRCioJMArUPnU4fNunvWZI6fYCT2TfcnNcGLnp7fznCRZUrfxC-sTcjG5&key=API_KEY",
        "https://maps.googleapis.com/maps/api/place/photo?maxheight=800&maxwidth=800&photo_reference=AUGGfZlgawtviMUJA1-QZpKeFBzudR_2Ukw9Swtpt5ZbrxzaSHB7EZaJkc8AUqnW45Oa1IJ7rLZQ0XcjDJl1QvPYYdOA_2hMzURtGQI7z_1o5Djv3kHFamrONw2PPsbiNFuopxf2MRl3AM4X4LNUMg2G5vfruGr40dsmXsg7QstRRJ4F5aF7&key=API_KEY",
        "https://maps.googleapis.com/maps/api/place/photo?maxheight=800&maxwidth=800&photo_reference=AUGGfZkGKZ2BJteVF275vJP8ZcvPppcIWPGqzRh660Sjb95giFvzfqflDUQFFX6MNDM2xaj584An2kZtxcMPPrnq0VdwjOisByQYwnGqUTPuQmIOUn8RVU_t3jbCAsdNQeiASyGVtpAkUHU-p21sMzoKNLMVkGRX-atU-PvxV5sj03OXrx1f&key=API_KEY"
      ]
    }
  ]
}
```

## Menjalankan Server

1. Pastikan memiliki Node.js dan npm terinstall di komputer.
2. Clone repository ini atau salin kode ke dalam direktori lokal.
3. Buat file `.env` di direktori root proyek dan tambahkan API Key:
   ```
   API_KEY=YOUR_GOOGLE_MAPS_API_KEY
   PORT=8080
   ```
4. Jalankan perintah berikut untuk menginstal dependencies:
   ```
   npm install
   ```
5. Jalankan server dengan perintah:
   ```
   npm start
   ```

Server akan berjalan di `localhost:8080` atau pada port yang ditentukan dalam file `.env`.
