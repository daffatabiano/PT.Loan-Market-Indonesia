# **Test Frontend Project**

## **Deskripsi Proyek**
Ini adalah proyek frontend yang bertujuan untuk mengonversi desain UI dari Figma menjadi aplikasi web interaktif menggunakan teknologi modern seperti React, Tailwind CSS, dan React Router DOM. Proyek ini juga memanfaatkan sistem hooks untuk manajemen state dan mock API yang diambil dari file `db.json`.

## **Fitur Utama**
- Konversi desain UI Figma ke aplikasi web.
- Styling menggunakan **Tailwind CSS** untuk fleksibilitas dan konsistensi.
- Navigasi antar halaman menggunakan **React Router DOM**.
- Sistem hooks untuk mengelola state dan logika komponen.
- Mock API menggunakan **JSON Server** untuk simulasi endpoint backend.

## **Teknologi yang Digunakan**
- **React.js** (Library frontend)
- **Tailwind CSS** (Styling)
- **React Router DOM** (Routing)
- **JSON Server** (Mock API)
- **JavaScript (ES6+)**

## **Persyaratan Sistem**
Sebelum memulai, pastikan Anda memiliki:
- **Node.js** v14 atau lebih baru
- **npm** atau **yarn**


## **Langkah Instalasi**

1. **Clone Repository**  
   ```bash
   git clone <repository-url>
   cd test-frontend-project
  ```
2. **Installasi Dependencies**
  Menggunakan npm:
```bash 
npm install
```
  atau yarn:
``` bash
yarn install
```

## **Struktur Proyek**
```js
PT.Loan-Market-Indonesia/
├── .env                   # File konfigurasi lingkungan
├── db.json                # Mock API data
├── postcss.config.cjs     # Konfigurasi PostCSS
├── tailwind.config.cjs    # Konfigurasi Tailwind CSS
├── vite.config.js         # Konfigurasi Vite
├── src/
│   ├── components/        # Folder untuk komponen UI
│   │   └── Cards
│   │     └── CardProduct.jsx
│   │     └── CardSummaryBank.jsx
│   │     └── CardSummaryInfo.jsx
│   │     └── CardWrapper.jsx
│   │     └── HeaderProductBank.jsx
│   │   └── Charts
│   │     └── BankChart.jsx
│   │     └── CircularProgress.jsx
│   │   └── Timelines
│   │     └── TimelineComponent.jsx
│   │   └── Navbar.jsx
│   │   └── Sidebar.jsx
│   │   └── Stepper.jsx
│   │   └── TabsProduct.jsx
│   ├── datas/             # Folder untuk data atau mock data tambahan
│   │   └── card-summary-data.js
│   │   └── sidebar-data.js
│   ├── hooks/             # Folder untuk custom hooks
│   │   └── useGet.js
│   ├── layouts/           # Folder untuk layout aplikasi
│   │   └── DashboardLayout.jsx
│   ├── pages/             # Folder untuk halaman aplikasi
│   │   ├── bank-products
│   │     └── edit
│   │       └── EditProduct.jsx
│   │     └── [id].jsx
│   │     └── BankProduct.jsx
│   │   ├── Dashboard.jsx
│   │   ├── EditApplication.jsx
│   ├── routes/            # Folder untuk konfigurasi routing
│   │   └── routeLists.jsx
│   ├── styles/            # Folder untuk file styling tambahan
│   │   ├── index.css    # Styling global
│   │   └── tailwind.css   # File entry untuk Tailwind
│   ├── utils/             # Folder untuk utilitas atau helper functions
│   │   └── helper.js
│   ├── App.jsx            # Komponen utama aplikasi
│   └── main.jsx           # File entry utama
```

Berikut adalah isi file untuk membantu Anda memulai:

### 1. File .env

```.env
VITE_SERVER_URL="http://localhost:3001"
```
### 2. File db.json

```json
{
  "products": [
    {
      "id": 1,
      "bank": "mandiri",
      "produk": "Bunga Special Tengah Imlek 2023",
      "rating": 3,
      "review": 3,
      "user": 220,
      "fix_rate": 3.88,
      "max_tenor": 12,
      "loan": "1",
      "jaminan": ["ruko", "rukan", "rumah", "apartemen"],
      "target": "karyawan, pengusaha",
      "komisi": 1
    },
    {
      "id": 2,
      "bank": "panin",
      "produk": "Panin KPR &KPR XTRA",
      "rating": 2,
      "review": 3,
      "user": 220,
      "fix_rate": 9.9,
      "max_tenor": 10,
      "loan": "85%",
      "jaminan": ["ruko", "rukan", "rumah", "apartemen"],
      "target": "karyawan",
      "komisi": 1
    },
    {
      "id": 3,
      "bank": "MNC",
      "produk": "MNC KPR Secondary",
      "rating": 3,
      "review": 19,
      "user": 220,
      "fix_rate": 3.88,
      "max_tenor": 12,
      "loan": "1",
      "jaminan": ["ruko", "rukan", "rumah", "apartemen"],
      "target": "karyawan, pengusaha",
      "komisi": 1
    },
    {
      "id": 4,
      "bank": "commonwealth",
      "produk": "KPR Primary",
      "rating": 3,
      "review": 9,
      "user": 220,
      "fix_rate": "-",
      "max_tenor": "-",
      "loan": "-",
      "jaminan": ["ruko", "rukan", "rumah", "apartemen"],
      "target": "karyawan, pengusaha",
      "komisi": 2.4
    },
    {
      "id": 5,
      "bank": "commonwealth",
      "produk": "KPR Secondary ",
      "rating": 3,
      "review": 9,
      "user": 220,
      "fix_rate": 2,
      "max_tenor": "-",
      "loan": "-",
      "jaminan": ["ruko", "rukan", "rumah", "apartemen"],
      "target": "karyawan, pengusaha",
      "komisi": 1
    },
    {
      "id": 6,
      "bank": "UOB",
      "produk": "KPR Primary",
      "rating": 0,
      "review": 0,
      "user": 220,
      "fix_rate": 3.99,
      "max_tenor": "-",
      "loan": "-",
      "jaminan": ["ruko", "rukan", "rumah", "apartemen"],
      "target": "Karyawan, Pengusaha & Professional",
      "komisi": 1
    },
    {
      "id": 7,
      "bank": "UOB",
      "produk": "KPR Secondary ",
      "rating": 0,
      "review": 0,
      "user": 220,
      "fix_rate": 1,
      "max_tenor": 1,
      "loan": "-",
      "jaminan": ["ruko", "rukan", "rumah", "apartemen"],
      "target": "Karyawan, Pengusaha & Professional",
      "komisi": 1
    },
    {
      "id": 8,
      "bank": "OCBC NISP",
      "produk": "KPR Kendali ",
      "rating": 0,
      "review": 0,
      "user": 220,
      "fix_rate": 6.75,
      "max_tenor": 10,
      "loan": "-",
      "jaminan": ["ruko", "rukan", "rumah", "apartemen"],
      "target": "Karyawan, Pengusaha & Professional",
      "komisi": 1
    },
    {
      "id": 9,
      "bank": "CIMB Niaga",
      "produk": "KPR Primary ",
      "rating": 0,
      "review": 0,
      "user": 220,
      "fix_rate": 1,
      "max_tenor": 1,
      "loan": "-",
      "jaminan": ["ruko", "rukan", "rumah", "apartemen"],
      "target": "Karyawan, Pengusaha & Professional",
      "komisi": 1
    },
    {
      "id": 10,
      "bank": "CIMB Niaga",
      "produk": "KPR Secondary ",
      "rating": 0,
      "review": 0,
      "user": 220,
      "fix_rate": 1,
      "max_tenor": 1,
      "loan": "-",
      "jaminan": ["ruko", "rukan", "rumah", "apartemen"],
      "target": "Karyawan, Pengusaha & Professional",
      "komisi": 1
    },
    {
      "id": 11,
      "bank": "CIMB Niaga",
      "produk": "KPR Extra ",
      "rating": 0,
      "review": 0,
      "user": 220,
      "fix_rate": 1,
      "max_tenor": 1,
      "loan": "-",
      "jaminan": ["ruko", "rukan", "rumah", "apartemen"],
      "target": "Karyawan, Pengusaha & Professional",
      "komisi": 1
    }
  ]
}

```
   **Jalankan JSON Server**
    untuk memulai Mock API: 
```bash
npx json-server --watch db.json --port 5000
```
  **Jalankan Projek Server**
    Mulai server development React: 
```bash
npm run server
```

### 3. File postcss.config.cjs

```Javascript
const flowbite = require('flowbite-react/tailwind');

module.exports = {
  content: [
    './index.html', // File HTML utama
    './src/**/*.{js,jsx,ts,tsx}', // Semua file React
    flowbite.content(), // Komponen Flowbite
  ],
  theme: {
    extend: {
      colors: {
        primary: '#17A9E2', // Warna kustom
        secondary: '#000000',
        sidebar: '#f9fafb',
      },
    },
  },
  plugins: [flowbite.plugin()], // Gunakan plugin Flowbite
};
```

### 4. postcss.config.cjs

```bash
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

```

### 5. File vite.config.js

```bash
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

## Lisensi
Proyek ini dirilis di bawah lisensi <a href="https://dafportabs.vercel.app">MIT.<a/>
