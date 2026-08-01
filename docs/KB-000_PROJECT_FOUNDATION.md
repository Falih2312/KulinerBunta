# KB-000_PROJECT_FOUNDATION.md
# KulinerBunta.id — Sprint 0A: Foundation & Governance

---
## METADATA DOKUMEN
- **Document ID**: KB-000
- **Version**: v1.0 LOCKED
- **Status**: LOCKED
- **Owner**: Product Owner / CEO (Djamaludin Musa, SKM)
- **Reviewer**: Lead System Architect
- **Approver**: Product Owner / CEO
- **Lock Date**: 28 Juli 2026
- **Lock Authority**: Product Owner / CEO (Djamaludin Musa, SKM)
- **Lock Reason**: Official Foundation Baseline - Sprint 0A Completed
- **Dependencies**: None (Parent Root Document)
- **Change Impact**: High (Foundation Baseline Blueprint)
- **Last Updated**: 28 Juli 2026

---

## 1. Project Overview
KulinerBunta.id adalah platform digital ekosistem kuliner swasta/komersial di Kecamatan Bunta, Kabupaten Banggai, Sulawesi Tengah. Dokumen ini berfungsi sebagai dokumen induk tata kelola (*Foundation & Governance*) serta *Single Source of Truth (SSOT)* tertinggi yang mengatur standar tata kelola, workflows, dokumentasi, audit, dan pedoman rujukan proyek. Dokumen ini tidak memuat keputusan teknis, bisnis, maupun implementasi fitur spesifik.

---

## 2. Vision
Menjadi acuan standar tata kelola proyek sistem informasi yang profesional, terstruktur, mudah dipelihara, dan berkelanjutan dalam mendukung ekosistem digital kuliner lokal Bunta.

---

## 3. Mission
1. Menyediakan standar dokumentasi (*Documentation First*) yang konsisten sebagai rujukan resmi seluruh sprint.
2. Membentuk alur kelola persetujuan dokumen (*Approval Workflow*) dan penilaian dampak perubahan (*Change Impact Analysis*).
3. Menjamin keberlanjutan pengembangan proyek melalui asas *Zero Repeat Mistake* dan pembagian peran tata kelola yang tegas.

---

## 4. Project Philosophy
- **Governance Primacy**: Tata kelola dokumen dan aturan main berada di atas implementasi teknis.
- **Role Isolation**: Setiap komponen tata kelola dan dokumentasi dipisahkan secara tegas berdasarkan ranah tanggung jawabnya.
- **Empirical Standard**: Seluruh kemajuan proyek diukur secara objektif melalui *Definition of Done (DoD)* dan audit dokumentasi resmi.

---

## 5. Core Development Principles
1. **Documentation First**: Seluruh perancangan, perubahan, dan kebijakan wajib terdokumentasikan sebelum eksekusi teknis.
2. **Blueprint Before Coding**: Kode program tidak boleh ditulis tanpa persetujuan blueprint pada dokumen KB.
3. **Single Source of Truth (SSOT)**: Dokumen seri KB-XXX menjadi satu-satunya acuan kebenaran resmi proyek.
4. **Zero Repeat Mistake**: Setiap masalah/bug yang ditemukan harus menghasilkan perbaikan sistem agar tidak berulang.
5. **Simplicity Over Complexity**: Mengutamakan kesederhanaan arsitektur yang kuat daripada kompleksitas yang tidak diperlukan.
6. **Long-Term Maintainability**: Kode dan tata kelola dirancang untuk dapat dipelihara dalam jangka panjang.
7. **Continuous Improvement**: Evaluasi dan penyempurnaan berkesinambungan di setiap siklus sprint.
8. **Evaluation Before Next Sprint**: Evaluasi menyeluruh dilakukan di akhir sprint sebelum memasuki sprint berikutnya.
9. **Audit Before Release**: Audit kualitas dan dokumentasi wajib dilakukan sebelum rilis resmi.
10. **Quality Before Quantity**: Mengutamakan kualitas fungsionalitas dan kerapian daripada kuantitas fitur tanpa standar.
11. Setiap keputusan harus terdokumentasi.
12. Setiap perubahan harus memiliki alasan jelas.
13. Setiap bug harus menghasilkan perbaikan sistem.
14. Tidak boleh ada keputusan yang sama dibuat berulang.

---

## 6. Governance Structure
Sistem tata kelola proyek diatur dengan pembagian peran yang tegas:
- **Product Owner / CEO**: Penentu arah tata kelola proyek, penanggung jawab penetapan kebijakan, serta pemegang otoritas persetujuan akhir dokumen.
- **Lead System Architect**: Penanggung jawab validasi struktur dokumen KB-XXX, analisis dampak perubahan, dan kepatuhan arsitektur dokumentasi.
- **Technical Lead / Engineer**: Eksekutor pembangunan fitur teknis berdasarkan dokumen spesifikasi turunan (KB-100 s/d KB-800).
- **Quality Assurance & Auditor**: Penanggung jawab validasi *Definition of Done (DoD)* serta audit keselarasan dokumen.

---

## 7. Development Workflow
Seluruh pengembangan mengikuti siklus tata kelola *Sprint-Based Development*:
1. **Sprint Planning & Governance Review**: Meninjau dokumen KB-000 dan spesifikasi KB turunan.
2. **Prompt Preparation**: Menyusun prompt resmi yang terdaftar pada Prompt Library (`KB-PRM-XXX`).
3. **Implementation Phase**: Pembangunan modul sesuai blueprint dokumen KB spesifik.
4. **Testing & QA Verification**: Verifikasi empiris terhadap Kriteria Selesai (DoD).
5. **Audit & Review**: Audit kepatuhan dokumentasi dan pencatatan *Decision Log* & *Lessons Learned*.
6. **Sprint Sign-off**: Evaluasi resmi sebelum penguncian sprint.

---

## 8. Documentation Standard
- **Format Berkas**: Seluruh dokumentasi wajib menggunakan format Markdown (`.md`) dengan GitHub Flavored Markdown (GFM).
- **Struktur Metadata**: Setiap dokumen wajib memuat Header Metadata standar (Document ID, Version, Status, Owner, Reviewer, Approver, Lock Date, Lock Authority, Lock Reason, Dependencies, Change Impact, Last Updated).
- **Lokasi Penyimpanan**: Seluruh dokumentasi disimpan pada direktori `/docs/`.

---

## 9. Prompt Standard
Seluruh prompt pengembangan yang digunakan wajib mengikuti standar **Prompt Library**:
- **Format Penomoran**: `KB-PRM-XXX`
- **Atribut Wajib**: Nomor KB, Nama Prompt, Tujuan, Ruang Lingkup, Output yang Diharapkan, Versi, & Riwayat Perubahan.

---

## 10. Quality Assurance Standard
- **Verification Rule**: Setiap hasil pekerjaan wajib diverifikasi terhadap kriteria *Definition of Done (DoD)*.
- **Documentation Parity**: Kode program atau hasil teknis dinyatakan invalid jika tidak memiliki relevansi dengan dokumen acuan KB-XXX.

---

## 11. Audit Standard
Audit tata kelola dilakukan pada setiap akhir sprint oleh QA / Lead Architect untuk memastikan penamaan file, metadata dokumen, dan keterhubungan antar dokumen terpenuhi secara konsisten.

---

## 12. Evaluation Standard
Evaluasi sprint dilakukan menggunakan metrik kepatuhan dokumentasi, pencapaian kriteria DoD, serta ketiadaan bug berulang (*Zero Repeat Mistake*).

---

## 13. Versioning Standard
Pemaian versi dokumen mengacu pada standar *Semantic Versioning*:
- **vMAJOR.MINOR.PATCH** (Contoh: `v1.0.0`)
  - **MAJOR**: Perubahan fondasi atau struktur tata kelola proyek.
  - **MINOR**: Penambahan bab baru atau penyempurnaan alur kerja.
  - **PATCH**: Perbaikan ejaan, perapian format, atau penyesuaian minor.

---

## 14. Document Dependency
Bab ini mengatur hierarki dan keterikatan antar dokumen dalam ekosistem KulinerBunta.id:
- **Parent Document**: Dokumen induk tingkat tertinggi (`KB-000_PROJECT_FOUNDATION.md`).
- **Child Document**: Dokumen turunan yang membahas ranah spesifik (contoh: KB-110, KB-120, KB-130, KB-140, KB-200, dst.). Dokumen turunan tidak boleh bertentangan dengan Parent Document.
- **Referenced By**: Catatan dokumen turunan mana saja yang mengacu atau bergantung pada dokumen ini.
- **Dependency Rules**:
  1. Perubahan pada Parent Document wajib ditinjau dampaknya terhadap seluruh Child Document.
  2. Child Document tidak boleh berdiri sendiri tanpa mereferensikan Parent Document.

---

## 15. Change Impact Analysis
Setiap pengajuan perubahan pada dokumen KB wajib melalui analisis dampak perubahan (*Change Impact Analysis*) yang mencantumkan:
1. **Dokumen yang Terdampak**: Daftar ID dokumen lain yang terpengaruh oleh perubahan ini.
2. **Tingkat Dampak**: *High* (mempengaruhi arsitektur/tata kelola dasar), *Medium* (mempengaruhi modul turunan), atau *Low* (editorial/penjelasan).
3. **Kebutuhan Review Ulang**: Penentuan apakah dokumen terdampak memerlukan *Architecture Review* ulang.
4. **Kebutuhan Approval Ulang**: Penentuan apakah perubahan membutuhkan *Approval* ulang dari Product Owner / CEO.

---

## 16. Approval Workflow
Seluruh dokumen KB wajib melalui alur status persetujuan sebagai berikut:

```
Draft ──> Architecture Review ──> Revision ──> Approved ──> Locked ──> Reference
```

1. **Draft**: Dokumen sedang disusun dan belum dapat dijadikan acuan.
2. **Architecture Review**: Dokumen ditinjau oleh Lead System Architect.
3. **Revision**: Dokumen dikembalikan untuk diperbaiki berdasarkan temuan review.
4. **Approved**: Dokumen disetujui oleh Product Owner / CEO.
5. **Locked**: Dokumen dikunci sebagai rujukan resmi dan tidak boleh diubah tanpa Change Impact Analysis.
6. **Reference**: Dokumen aktif digunakan sebagai Single Source of Truth (SSOT).

---

## 17. Decision Log Standard
Setiap keputusan tata kelola wajib dicatat pada log keputusan yang memuat ID Keputusan (`DEC-XXX`), Tanggal, Konteks, Keputusan Ditetapkan, serta Dampaknya terhadap dokumen turunan.

---

## 18. Bug & Issue Management
Setiap kendala tata kelola atau penemuan ketidaksesuaian dokumen wajib dianalisis melalui *Root Cause Analysis (RCA)* dan diperbaiki pada prinsip dokumentasi agar tidak berulang (*Zero Repeat Mistake*).

---

## 19. Lessons Learned
Catatan pembelajaran tata kelola disimpan secara berkala pada `KB-900_DOCUMENTATION_LOGS.md` untuk perbaikan berkesinambungan pada sprint berikutnya.

---

## 20. Backlog Management
Item pekerjaan dokumentasi dan tata kelola diinventarisasi dan diprioritaskan sebelum pembukaan sprint berikutnya.

---

## 21. Technical Debt Management
Utang dokumentasi (*Documentation Debt*) atau ketidaklengkapan metadata wajib diinventarisasi dan diselesaikan sebelum rilis status *Locked*.

---

## 22. Definition of Done (DoD)
Suatu tugas dokumentasi atau sprint dinyatakan **SELESAI (DONE)** apabila:
1. Dokumen telah memenuhi struktur metadata lengkap.
2. Dokumen telah melalui alur *Approval Workflow* hingga status *Approved / Locked*.
3. Hasil analisis dampak perubahan (*Change Impact Analysis*) telah tercatat.
4. Tidak ada konflik antar dokumen turunan.

---

## 23. Folder Structure
Struktur direktori standar dokumentasi proyek KulinerBunta.id diatur sebagai berikut:

```
e:\APLIKASI\
├── docs/                               # Direktori Utama Dokumentasi Proyek (SSOT)
│   ├── KB-000_PROJECT_FOUNDATION.md    # Dokumen Induk Tata Kelola Proyek (Parent Root - LOCKED)
│   ├── KB-100_BUSINESS_BLUEPRINT.md    # Referensi Bisnis Utama
│   ├── KB-110_TECHNOLOGY_STACK.md      # (To Be Created)
│   ├── KB-120_BUSINESS_RULES.md        # (To Be Created)
│   ├── KB-130_PAYMENT_MODULE.md        # (To Be Created)
│   ├── KB-140_DELIVERY_MODULE.md       # (To Be Created)
│   ├── KB-200_UI_UX_SPECIFICATION.md   # Referensi UI/UX
│   ├── KB-300_DATABASE_SCHEMA.md       # Referensi Skema Database
│   ├── KB-400_BACKEND_SPECIFICATION.md # Referensi Spesifikasi Backend
│   ├── KB-500_FRONTEND_SPECIFICATION.md# Referensi Spesifikasi Frontend
│   ├── KB-600_TESTING_QA_STANDARD.md   # Referensi Standar QA
│   ├── KB-700_DEPLOYMENT_GUIDE.md      # Referensi Deployment
│   ├── KB-800_MAINTENANCE_MANUAL.md    # Referensi Pemeliharaan
│   └── KB-900_DOCUMENTATION_LOGS.md    # Decision Log & Lessons Learned
│
└── prompts/                            # Prompt Library Resmi Proyek
    ├── KB-PRM-001_FOUNDATION_SETUP.md
    └── KB-PRM-002_BLUEPRINT_GEN.md
```

---

## 24. Referensi Dokumen Turunan
Keputusan teknis, bisnis, dan modul spesifik yang dipisahkan dari dokumen ini dikelola pada dokumen turunan yang akan dibuat pada sprint berikutnya:
- Keputusan teknologi dikelola pada dokumen `KB-110_TECHNOLOGY_STACK.md` *(To Be Created)*.
- Aturan bisnis, komisi, dan bagi hasil dikelola pada dokumen `KB-120_BUSINESS_RULES.md` *(To Be Created)*.
- Modul pembayaran (*Payment Gateway*, QRIS, COD) dikelola pada dokumen `KB-130_PAYMENT_MODULE.md` *(To Be Created)*.
- Modul pengantaran (*Tracking Kurir*, GPS, Milestone) dikelola pada dokumen `KB-140_DELIVERY_MODULE.md` *(To Be Created)*.

---

## 25. Development Roadmap
- **Sprint 0A (Selesai)**: Foundation & Governance (`KB-000_PROJECT_FOUNDATION.md`).
- **Sprint 0B (Dapat Dimulai)**: Technology Stack & Business Rules (`KB-110` & `KB-120`).
- **Sprint 0C**: Module Specifications (`KB-130` & `KB-140`).
- **Sprint 1**: UI/UX & Design System (`KB-200` series).
- **Sprint 2**: Database & Backend Architecture (`KB-300` & `KB-400` series).
- **Sprint 3**: Frontend PWA Implementation (`KB-500` series).
- **Sprint 4**: Testing, QA & Audit (`KB-600` series).

---

## 26. Open Questions / Product Owner Decision

Bagian ini khusus mencatat pertanyaan tata kelola, proses approval, dan dokumentasi yang memerlukan keputusan resmi dari **Product Owner / CEO Djamaludin Musa, SKM**:

| ID Question | Topik / Aspek | Deskripsi Permasalahan Tata Kelola | Status Decision |
| :--- | :--- | :--- | :--- |
| **OPN-001** | Frekuensi Audit Dokumentasi | Apakah audit kelengkapan dokumen KB-XXX dilakukan di setiap akhir Sprint atau setiap siklus rilis Major? | *PENDING PO DECISION* |
| **OPN-002** | Otentikasi Approval Workflow | Apakah persetujuan dokumen status *Approved* cukup melalui berita acara digital atau tanda tangan digital tertanam pada metadata dokumen? | *PENDING PO DECISION* |
| **OPN-003** | Pembatasan Waktu Review | Berapa batas waktu maksimum bagi Lead System Architect untuk menyelesaikan *Architecture Review* sebelum dokumen masuk ke tahap *Revision/Approved*? | *PENDING PO DECISION* |
| **OPN-004** | Pengelolaan Prompt Deprecated | Bagaimana prosedur penghapusan atau penandaan prompt lama yang sudah tidak berlaku (*Deprecated*) dalam *Prompt Library*? | *PENDING PO DECISION* |

---
