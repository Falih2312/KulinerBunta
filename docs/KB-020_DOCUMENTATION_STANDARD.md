# KB-020_DOCUMENTATION_STANDARD.md
# KulinerBunta.id — Sprint 1: Governance

---
## METADATA DOKUMEN
- **Document ID**: KB-020
- **Document Name**: DOCUMENTATION_STANDARD
- **Category**: Governance
- **Version**: v1.0 LOCKED
- **Status**: LOCKED
- **Owner**: Product Owner / CEO (Djamaludin Musa, SKM)
- **Reviewer**: Lead System Architect
- **Approver**: Product Owner / CEO
- **Approval Date**: 30 Juli 2026
- **Approval Authority**: Product Owner / CEO (Djamaludin Musa, SKM)
- **Approval Reference**: REV-KB020-001 (KB-020_ARCHITECTURE_COMPLIANCE_REVIEW.md)
- **Lock Date**: 30 Juli 2026
- **Lock Authority**: Product Owner / CEO (Djamaludin Musa, SKM)
- **Lock Reference**: REV-KB020-001 (KB-020_ARCHITECTURE_COMPLIANCE_REVIEW.md)
- **Lock Reason**: Official Documentation Standard Baseline - Sprint 1 Governance Completed
- **Dependencies**: KB-000_PROJECT_FOUNDATION.md (Parent Root Document - LOCKED), KB-001_KNOWLEDGE_BASE_MASTER_INDEX.md (Master Index - LOCKED), KB-010_DOCUMENT_LIFECYCLE.md (Document Lifecycle - LOCKED)
- **Change Impact**: Medium (Documentation Standards Architecture)
- **Last Updated**: 30 Juli 2026

---

## 1. Tujuan
Dokumen `KB-020_DOCUMENTATION_STANDARD.md` bertujuan menetapkan standar teknis penulisan seluruh dokumen Knowledge Base (KB) dalam ekosistem proyek KulinerBunta.id. Dokumen ini memastikan bahwa setiap artefak dokumentasi memiliki struktur metadata yang seragam, format Markdown yang baku, tata letak visual yang konsisten, keterbacaan yang tinggi, serta mudah diaudit dan dipelihara dalam jangka panjang.

---

## 2. Ruang Lingkup
Standar ini berlaku mutlak untuk seluruh penulisan dokumen Knowledge Base proyek yang terdaftar pada `KB-001_KNOWLEDGE_BASE_MASTER_INDEX.md` (seri `KB-000` hingga `KB-999`). Ruang lingkup meliputi tata cara penulisan metadata, penggunaan sintaks GitHub Flavored Markdown (GFM), tipografi, alur bab, elemen visual (tabel, diagram, blok kode, alerts), penulisan tautan berkas, serta aturan kepatuhan dokumen.

---

## 3. Prinsip Dokumentasi
Seluruh penyusunan dokumen KB **Wajib** berlandaskan prinsip-prinsip berikut:
1. **Consistency**: Seluruh dokumen menggunakan format metadata, penamaan bab, dan elemen visual yang seragam.
2. **Readability**: Teks disusun menggunakan Bahasa Indonesia formal yang presisi, padat, dan jelas.
3. **Clarity**: Informasi teknis dan tata kelola disampaikan secara lugas tanpa ambiguitas.
4. **Auditability**: Setiap dokumen memiliki keterlacakan metadata dan riwayat status yang dapat diaudit.
5. **Maintainability**: Format dokumen terstruktur secara modular agar mudah diperbarui di masa mendatang.

---

## 4. Struktur Metadata (12 Atribut Baku)
Bagian paling atas dari setiap dokumen KB **Wajib** memuat blok metadata header dengan 12 atribut baku berikut:

```markdown
- Document ID: KB-XXX
- Document Name: NAMA_DOKUMEN_KAPITAL
- Category: Governance / Business / Technical
- Version: Draft v0.1 / v1.0 APPROVED / v1.0 LOCKED
- Status: DRAFT / ARCHITECTURE REVIEW / REVISION / APPROVED / LOCKED / CHANGE REQUEST
- Owner: Product Owner / CEO (Djamaludin Musa, SKM)
- Reviewer: Lead System Architect
- Approver: Product Owner / CEO
- Dependencies: KB-000_PROJECT_FOUNDATION.md (LOCKED), KB-001_KNOWLEDGE_BASE_MASTER_INDEX.md (LOCKED)
- Change Impact: High / Medium / Low
- Last Updated: DD MMMM YYYY
- Lock / Approval Reference: REV-KBXXX-001 (Laporan Audit terkait)
```

---

## 5. Aturan Penulisan Version
Penulisan versi dokumen pada atribut metadata **Wajib** mematuhi ketentuan berikut:
- **Draft Phase**: `Draft v0.1`, `Draft v0.2`, dst.
- **Approved Phase**: `v1.0 APPROVED`, `v1.1 APPROVED`, dst.
- **Locked Phase**: `v1.0 LOCKED`, `v1.1 LOCKED`, dst.

---

## 6. Aturan Penulisan Status
Nilai status pada metadata dokumen **Dilarang** diisi secara bebas dan **Wajib** menggunakan salah satu dari 6 status resmi yang diatur oleh `KB-010_DOCUMENT_LIFECYCLE.md`:
1. `DRAFT`
2. `ARCHITECTURE REVIEW`
3. `REVISION`
4. `APPROVED`
5. `LOCKED`
6. `CHANGE REQUEST`

---

## 7. Struktur Judul (Heading Standard)
Penulisan judul dan sub-judul **Wajib** mematuhi hierarki Markdown baku:
- **H1 (`#`)**: Digunakan tepat **1 kali** di awal berkas untuk Judul Dokumen (contoh: `# KB-020_DOCUMENTATION_STANDARD.md`).
- **H2 (`##`)**: Digunakan untuk Judul Bab Utama (contoh: `## 1. Tujuan`).
- **H3 (`###`)**: Digunakan untuk Sub-Bab di dalam Bab Utama (contoh: `### 4.1 Metadata Wajib`).
- **H4 (`####`)**: Digunakan untuk Seksi Khusus di dalam Sub-Bab.
- **Dilarang**: Melompati tingkatan heading (misal dari H1 langsung ke H3).

---

## 8. Struktur Bab
Setiap dokumen KB **Wajib** disusun dengan urutan bab yang logis:
1. Title H1 (`# KB-XXX_NAMA_DOKUMEN.md`)
2. Pembatas Horizontal Rule (`---`)
3. Metadata Header Dokumen
4. Pembatas Horizontal Rule (`---`)
5. Bab 1: Tujuan / Pendahuluan
6. Bab 2: Ruang Lingkup
7. Bab-Bab Utama Spesifikasi
8. Bab Penutup / Statement Persetujuan atau Penguncian (apabila tersedia)

---

## 9. Aturan Paragraph
- Paragraf **Wajib** ditulis dalam bentuk kalimat efektif yang padat dan profesional.
- Pemisah antar paragraf **Wajib** menggunakan tepat **1 baris kosong** (*single empty line*).
- **Dilarang** membuat teks paragraf tanpa pemisah baris yang jelas.

---

## 10. Bullet List Standard
- Menggunakan tanda minus (`-`) sebagai simbol bullet utama.
- Sub-bullet menggunakan indensi 2 spasi di bawah bullet utama.
- Setiap poin bullet **Wajib** diawali dengan huruf kapital.

---

## 11. Numbered List Standard
- Menggunakan angka arab berurutan (`1.`, `2.`, `3.`) untuk alur kronologis, langkah kerja, atau daftar berurutan.
- Sub-langkah **Direkomendasikan** menggunakan huruf kecil (`a.`, `b.`, `c.`).

---

## 12. Tabel (Table Formatting GFM)
- Tabel **Wajib** disusun menggunakan format GitHub Flavored Markdown (GFM).
- Rata alinea kolom diatur pada baris pemisah header:
  - Rata kiri: `| :--- |`
  - Rata tengah: `| :---: |`
  - Rata kanan: `| ---: |`
- Seluruh kolom **Wajib** memiliki judul header yang jelas.

---

## 13. Code Block Standard
- Blok kode program **Wajib** menggunakan *fenced code block* dengan 3 backticks (```) dan mencantumkan nama bahasa secara eksplisit:
  - Contoh: ```javascript, ```json, ```markdown, ```html, ```sql, ```bash.
- Indensi di dalam blok kode **Wajib** diatur seragam 2 spasi.

---

## 14. Block Quote Standard
- Menggunakan simbol `>` untuk menampilkan kutipan konsensus, filosofi, atau pernyataan resmi.

---

## 15. GitHub Alert Standard
Penyampaian peringatan dan catatan khusus **Wajib** mengadopsi sintaks resmi GitHub Alerts:
- `> [!NOTE]`: Informasi konteks atau latar belakang tambahan.
- `> [!TIP]`: Saran efisiensi dan rekomendasi terbaik.
- `> [!IMPORTANT]`: Aturan penting dan persyaratan wajib.
- `> [!WARNING]`: Peringatan batas arsitektur dan risiko perubahan.
- `> [!CAUTION]`: Peringatan keras dan tindakan berpotensi bahaya.

---

## 16. Mermaid Diagram Standard
- Visualisasi alur kerja, arsitektur, dan diagram status **Wajib** menggunakan *fenced code block* ```mermaid.
- Jenis diagram yang didukung: `graph TD`, `graph LR`, `sequenceDiagram`, `stateDiagram-v2`.
- Node teks yang memuat karakter khusus **Wajib** diapit tanda petik ganda (`"..."`).

---

## 17. Horizontal Rule Standard
- Menggunakan tiga tanda minus (`---`) sebagai garis pembatas antar bab utama.
- Garis pembatas **Wajib** didahului dan diakhiri oleh 1 baris kosong.

---

## 18. Caption & Internal Link Standard
- Tautan ke berkas lokal proyek **Wajib** menggunakan sintaks Markdown dengan URI scheme `file:///`:
  - Format Valid: `[Nama Teks Tautan](file:///e:/APLIKASI/docs/KB-000_PROJECT_FOUNDATION.md)`
- **Dilarang** membungkus teks tautan dengan backticks (misal: [`file.md`](link) adalah INVALID).
- Gambar atau diagram media **Wajib** menyertakan caption alt-text yang jelas: `![Deskripsi Gambar](path/to/image.png)`.

---

## 19. Bahasa
- Dokumen **Wajib** ditulis menggunakan **Bahasa Indonesia Baku & Profesional** yang menyelaraskan aturan Pedoman Umum Ejaan Bahasa Indonesia (PUEBI/EYD).
- Istilah asing teknis yang belum memiliki padanan baku **Wajib** ditulis dalam bahasa Asing dengan cetak miring (*italics*).

---

## 20. Terminologi
Seluruh penyusunan dokumen **Wajib** menggunakan istilah baku Knowledge Base:
- *Single Source of Truth (SSOT)*
- *Document Lifecycle*
- *Architecture Compliance Review*
- *Change Request (CR)*
- *Root Cause Analysis (RCA)*

---

## 21. Penulisan Referensi Internal KB
- Penunjukan dokumen KB lain **Wajib** mencantumkan ID Dokumen dan Judul lengkap:
  - Contoh: `KB-000_PROJECT_FOUNDATION.md` atau `KB-010_DOCUMENT_LIFECYCLE.md`.

---

## 22. Contoh Struktur Dokumen Template Baku

```markdown
# KB-XXX_NAMA_DOKUMEN.md
# KulinerBunta.id — Sprint X: Domain Name

---
## METADATA DOKUMEN
- **Document ID**: KB-XXX
- **Document Name**: NAMA_DOKUMEN
- **Category**: Governance / Business / Technical
- **Version**: Draft v0.1
- **Status**: DRAFT
- **Owner**: Product Owner / CEO (Djamaludin Musa, SKM)
- **Reviewer**: Lead System Architect
- **Approver**: Product Owner / CEO
- **Dependencies**: KB-000_PROJECT_FOUNDATION.md (LOCKED), KB-001_KNOWLEDGE_BASE_MASTER_INDEX.md (LOCKED)
- **Change Impact**: Medium
- **Last Updated**: DD MMMM YYYY
---

## 1. Tujuan
Penjelasan tujuan dokumen...

## 2. Ruang Lingkup
Penjelasan ruang lingkup...
```

---

## 23. Hal yang Wajib (Mandatory Rules)
1. Setiap dokumen KB **Wajib** memuat 12 atribut metadata header baku.
2. Setiap dokumen KB **Wajib** mencantumkan referensi parent document (`KB-000` & `KB-001`).
3. Seluruh tabel **Wajib** menggunakan format sintaks GFM baku.
4. Seluruh diagram visual **Wajib** menggunakan format Mermaid JS baku.

---

## 24. Hal yang Dilarang (Forbidden Rules)
1. **Dilarang** menggunakan tag inline HTML di dalam dokumen Markdown.
2. **Dilarang** mengedit atau menambah atribut metadata di luar 12 atribut baku.
3. **Dilarang** menggunakan status dokumen di luar 6 status resmi `KB-010`.
4. **Dilarang** memasukkan keputusan bisnis, UI/UX, atau kode aplikasi pada dokumen `KB-020`.

---

## 25. Traceability terhadap KB Parent
Dokumen `KB-020_DOCUMENTATION_STANDARD.md` menjaga keterlacakan (*traceability*) mutlak dengan tunduk sepenuhnya pada asas *Single Source of Truth* dari `KB-000_PROJECT_FOUNDATION.md`, terdaftar pada katalog `KB-001_KNOWLEDGE_BASE_MASTER_INDEX.md`, dan mengikuti alur status yang diatur oleh `KB-010_DOCUMENT_LIFECYCLE.md`.

---

## 26. Governance Rules
1. **Formatting Integrity**: Standar penulisan ini berlaku mutlak bagi seluruh dokumen KB tanpa pengecualian.
2. **Metadata Compliance**: Dokumen tanpa metadata header lengkap dinyatakan invalid.
3. **Parent Supremacy**: Aturan format dokumentasi tidak boleh bertentangan dengan keputusan arsitektur pada `KB-000`.
4. **Audit Readiness**: Seluruh dokumen yang ditulis **Wajib** siap diaudit terhadap standar `KB-020`.

---

## Approval Record

- **Approval Date**: 30 Juli 2026
- **Approved By**: Product Owner / CEO (Djamaludin Musa, SKM)
- **Approval Basis**:
  - Architecture Analysis Completed
  - Draft Completed
  - Draft Refinement Completed
  - Architecture Compliance Review: PASS (REV-KB020-001)

- **Approval Statement**:
  "Dokumen KB-020_DOCUMENTATION_STANDARD.md disetujui sebagai baseline resmi Documentation Standard untuk proyek KulinerBunta.id dan dinyatakan layak melanjutkan ke tahap Document Lock sesuai KB-010_DOCUMENT_LIFECYCLE."

---

## Lock Record

- **Lock Date**: 30 Juli 2026
- **Locked By**: Product Owner / CEO (Djamaludin Musa, SKM)
- **Lock Authority**: Product Owner / CEO (Djamaludin Musa, SKM)
- **Lock Basis**:
  - Architecture Analysis Completed
  - Draft Completed
  - Draft Refinement Completed
  - Architecture Compliance Review: PASS (REV-KB020-001)
  - Document Approval Completed

- **Lock Statement**:
  "Dokumen KB-020_DOCUMENTATION_STANDARD.md telah dikunci sebagai baseline resmi Documentation Standard proyek KulinerBunta.id. Perubahan terhadap dokumen ini setelah tahap Lock hanya dapat dilakukan melalui mekanisme Change Request (CR) sesuai KB-010_DOCUMENT_LIFECYCLE."

---
