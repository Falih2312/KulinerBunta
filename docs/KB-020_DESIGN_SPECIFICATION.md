# KB-020_DESIGN_SPECIFICATION.md
# KulinerBunta.id — Sprint 1: Governance

---

## METADATA SPESIFIKASI
- **Document ID**: SPEC-KB020-001
- **Target Document**: KB-020_DOCUMENTATION_STANDARD.md
- **Specification Date**: 29 Juli 2026
- **Designer**: Lead System Architect
- **Baseline Dependencies**: KB-000 (LOCKED), KB-001 (LOCKED), KB-010 (LOCKED), KB-020 Architecture Analysis Report
- **Status**: SPECIFICATION COMPLETED

---

## 1. Struktur Bab KB-020
Dokumen `KB-020_DOCUMENTATION_STANDARD.md` wajib memuat struktur bab standar berikut:
1. Header Metadata Baku
2. Bab 1: Tujuan Standar Dokumentasi
3. Bab 2: Ruang Lingkup Format Dokumentasi
4. Bab 3: Standar Format Metadata Header (12 Atribut Baku)
5. Bab 4: Standar Format Markdown (GFM Syntax)
6. Bab 5: Standar Tipografi & Tata Letak Dokumen (Headings, Paragraphs, Lists, Rules)
7. Bab 6: Standar Elemen Visual (Tables, Code Blocks, Alerts, Mermaid Diagrams)
8. Bab 7: Standar Penamaan Caption, Tautan Berkas & Media
9. Bab 8: Standar Bahasa, Terminologi & Penulisan Status/Versi
10. Bab 9: Aturan Kepatuhan Wajib (*Mandatory Rules*) & Hal yang Dilarang (*Forbidden Rules*)

---

## 2. Metadata Wajib (12 Atribut Baku)
Setiap dokumen KB wajib memuat 12 atribut metadata berikut di bagian teratas berkas:
1. `Document ID`: ID unik dokumen (contoh: `KB-020`)
2. `Document Name`: Nama dokumen dalam huruf kapital (contoh: `DOCUMENTATION_STANDARD`)
3. `Category`: Kategori domain (contoh: `Governance`)
4. `Version`: Versi dokumen (contoh: `v1.0 LOCKED`)
5. `Status`: Status alur hidup dokumen (contoh: `LOCKED`)
6. `Owner`: Pemilik dokumen (Product Owner / CEO Djamaludin Musa, SKM)
7. `Reviewer`: Peninjau arsitektur (Lead System Architect)
8. `Approver`: Pengesah dokumen (Product Owner / CEO)
9. `Dependencies`: Referensi dokumen parent/terkait (contoh: `KB-000`, `KB-001`, `KB-010`)
10. `Change Impact`: Tingkat dampak perubahan (*High, Medium, Low*)
11. `Last Updated`: Tanggal pembaruan terakhir (format: `DD MMMM YYYY`)
12. `Lock / Approval Reference`: Referensi nomor laporan audit (contoh: `REV-KB010-001`)

---

## 3. Metadata Opsional
- `Lock Date`: Tanggal dokumen dikunci (Wajib jika status `LOCKED`).
- `Lock Authority`: Otoritas penguncian dokumen (Wajib jika status `LOCKED`).
- `Lock Reason`: Alasan penguncian dokumen (Wajib jika status `LOCKED`).

---

## 4. Standar Heading
- **H1 (`#`)**: Hanya digunakan 1 kali untuk Judul Utama Dokumen.
- **H2 (`##`)**: Digunakan untuk Judul Bab Utama.
- **H3 (`###`)**: Digunakan untuk Sub-Bab.
- **H4 (`####`)**: Digunakan untuk Seksi Khusus di dalam Sub-Bab.
- Dilarang keras melompati hierarki heading (misal: dari H1 langsung ke H3).

---

## 5. Standar Paragraph
- Paragraf ditulis dengan kalimat efektif, padat, dan profesional.
- Jarak antar paragraf menggunakan 1 baris kosong (*single empty line*).
- Dilarang menggunakan paragraf tanpa pemisah baris baku.

---

## 6. Standar Bullet List
- Menggunakan simbol minus (`-`) untuk daftar item tanpa urutan.
- Sub-item menggunakan pembuka 2 spasi indensi.
- Setiap poin harus ringkas dan tidak menggantung.

---

## 7. Standar Numbered List
- Menggunakan angka kuantitatif (`1.`, `2.`, `3.`) untuk urutan langkah, urutan kronologis, atau hierarki prioritas.
- Sub-langkah menggunakan huruf kecil (`a.`, `b.`, `c.`).

---

## 8. Standar Table
- Tabel ditulis menggunakan sintaks GFM Table baku dengan baris pemisah header (`| :--- | :--- |`).
- Pengaturan alinea kolom: rata kiri (`:---`), rata tengah (`:---:`), rata kanan (`---:`).
- Seluruh kolom tabel wajib memiliki judul header yang jelas.

---

## 9. Standar Code Block
- Menggunakan *fenced code block* dengan 3 backticks (```) dan mencantumkan pengenal bahasa secara eksplisit (contoh: ```javascript, ```json, ```markdown, ```sql, ```bash).
- Kode harus rapi dengan indensi 2 spasi.

---

## 10. Standar Block Quote
- Menggunakan simbol `>` untuk kutipan pernyataan resmi, prinsip filosofi, atau konsensus keputusan.

---

## 11. Standar GitHub Alert
Alerts wajib menggunakan sintaks resmi GitHub Markdown:
- `> [!NOTE]`: Informasi latar belakang atau konteks tambahan.
- `> [!TIP]`: Saran efisiensi dan rekomendasi terbaik.
- `> [!IMPORTANT]`: Aturan penting dan persyaratan wajib.
- `> [!WARNING]`: Peringatan batas arsitektur dan risiko perubahan.
- `> [!CAUTION]`: Larangan keras dan tindakan berpotensi bahaya.

---

## 12. Standar Mermaid Diagram
- Menggunakan *fenced code block* ```mermaid.
- Sintaks diagram yang didukung: `graph TD`, `graph LR`, `sequenceDiagram`, `stateDiagram-v2`.
- Semua node teks yang memuat karakter khusus wajib diapit tanda petik ganda (`"..."`).

---

## 13. Standar Horizontal Rule
- Menggunakan tiga tanda minus (`---`) sebagai pembatas antar bab utama.
- Wajib didahului dan diakhiri oleh 1 baris kosong.

---

## 14. Standar Penamaan Caption, Tautan Berkas & Media
- Tautan berkas lokal wajib menggunakan skema `file:///` absolut atau relatif terstruktur: `[NamaTeks](file:///path/to/file)`.
- Dilarang membungkus teks tautan dengan backticks (misal: [`file.py`](link) adalah INVALID, yang valid: [file.py](link)).
- Gambar wajib memuat teks alternatif caption resmi: `![Deskripsi Gambar](/path/to/image.png)`.

---

## 15. Standar Bahasa
- Dokumentasi wajib ditulis dalam **Bahasa Indonesia Baku & Profesional** (EYD/PUEBI).
- Istilah asing teknis yang belum memiliki padanan baku dapat ditulis dalam bahasa Asing dengan cetak miring (*italics*).

---

## 16. Standar Terminologi
- Menggunakan glosarium istilah baku proyek:
  - *Single Source of Truth* (SSOT)
  - *Document Lifecycle*
  - *Architecture Compliance Review*
  - *Change Request* (CR)
  - *Root Cause Analysis* (RCA)

---

## 17. Standar Penulisan Version
- Mengikuti format *Semantic Versioning*:
  - **Draft Phase**: `Draft v0.1`, `Draft v0.2`
  - **Approved Phase**: `v1.0 APPROVED`, `v1.1 APPROVED`
  - **Locked Phase**: `v1.0 LOCKED`, `v1.1 LOCKED`

---

## 18. Standar Penulisan Status
Status dokumen wajib menggunakan salah satu dari 6 status resmi `KB-010`:
- `DRAFT`
- `ARCHITECTURE REVIEW`
- `REVISION`
- `APPROVED`
- `LOCKED`
- `CHANGE REQUEST`

---

## 19. Hal yang Wajib (Mandatory Rules)
1. Setiap dokumen KB wajib memuat 12 atribut metadata header baku.
2. Setiap dokumen KB wajib mencantumkan referensi parent document (`KB-000` & `KB-001`).
3. Seluruh tabel wajib memiliki struktur header terformat GFM.
4. Seluruh diagram wajib menggunakan sintaks Mermaid JS baku.

---

## 20. Hal yang Dilarang (Forbidden Rules)
1. Dilarang menggunakan HTML inline tags di dalam Markdown dokumen KB.
2. Dilarang menggunakan format metadata di luar 12 atribut baku yang telah ditetapkan.
3. Dilarang mengedit atau menambah status dokumen di luar 6 status resmi `KB-010`.
4. Dilarang menyertakan keputusan bisnis, UI/UX, atau kode aplikasi pada dokumen `KB-020`.

---

## FINAL DECISION

### KEPUTUSAN DESAIN:
**DESIGN FROZEN**

### Alasan Teknis:
1. Seluruh 20 spesifikasi teknis desain penulisan dokumen telah didefinisikan secara eksplisit, lengkap, dan membeku (*frozen*).
2. Spesifikasi ini konsisten 100% dengan `KB-000`, `KB-001`, `KB-010`, dan laporan `KB-020 Architecture Analysis`.
3. Penulisan *Draft v0.1* `KB-020_DOCUMENTATION_STANDARD.md` siap dilakukan tanpa perubahan spesifikasi teknis lagi.

---
