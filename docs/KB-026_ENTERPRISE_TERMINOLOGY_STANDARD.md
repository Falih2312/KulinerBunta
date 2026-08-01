# KB-026_ENTERPRISE_TERMINOLOGY_STANDARD.md
# KulinerBunta.id — Enterprise Architecture Terminology Standard & Controlled Vocabulary

---
## METADATA DOKUMEN
- **Document ID**: KB-026
- **Document Name**: ENTERPRISE_TERMINOLOGY_STANDARD
- **Category**: Governance & Project Standards
- **Version**: v1.0 LOCKED
- **Status**: LOCKED
- **Owner**: Product Owner / CEO (Djamaludin Musa, SKM)
- **Reviewer**: Chief Enterprise Architect
- **Approver**: Product Owner / CEO (Djamaludin Musa, SKM)
- **Approval Date**: 30 Juli 2026
- **Approval Authority**: Product Owner / CEO (Djamaludin Musa, SKM)
- **Approval Reference**: WO-KB-026 (Enterprise Architecture Terminology Standard & Controlled Vocabulary)
- **Lock Date**: 30 Juli 2026
- **Lock Authority**: Product Owner / CEO (Djamaludin Musa, SKM)
- **Lock Reference**: WO-KB-026 (Enterprise Architecture Terminology Standard & Controlled Vocabulary)
- **Lock Reason**: Official Enterprise Architecture Terminology Standard & Controlled Vocabulary Established
- **Dependencies**: KB-000_PROJECT_FOUNDATION.md (v1.0 LOCKED), KB-001_KNOWLEDGE_BASE_MASTER_INDEX.md (v1.0 LOCKED), KB-005_KNOWLEDGE_BASE_GOVERNANCE_MAP.md (v1.0 LOCKED), KB-010_DOCUMENT_LIFECYCLE.md (v1.0 LOCKED), KB-020_DOCUMENTATION_STANDARD.md (v1.0 LOCKED), KB-025_ENTERPRISE_ADR_STANDARD.md (v1.0 LOCKED), KBWS-001_DOCUMENT_DEVELOPMENT_STANDARD.md (v1.0 LOCKED), KB-100_BUSINESS_BLUEPRINT.md (v1.0 LOCKED), KB-110_TECHNOLOGY_ARCHITECTURE.md (v1.0 LOCKED), KB-200_SOLUTION_ARCHITECTURE.md (v1.0 LOCKED), KB-300_ARCHITECTURE_DECISION_GOVERNANCE.md (v1.0 LOCKED), KB-310_ARCHITECTURE_DECISION_ROADMAP.md (v1.0 LOCKED), ADR-001_ARCHITECTURE_STYLE_DECISION.md (v1.0 LOCKED), ADR-002_PROGRAMMING_LANGUAGE_ENGINE_DECISION.md (v1.0 LOCKED)
- **Change Impact**: High (Mandatory Authoritative Vocabulary Standard across All KB and ADR Documents)
- **Last Updated**: 30 Juli 2026

---

## 1. Purpose & Scope
Dokumen `KB-026_ENTERPRISE_TERMINOLOGY_STANDARD.md` menetapkan kosakata terkontrol baku (*Controlled Vocabulary*) dan kamus istilah kanonikal (*Canonical Glossary*) bagi seluruh dokumen Knowledge Base (`KB`) dan Catatan Keputusan Arsitektur (`ADR`) platform **KulinerBunta.id**. Dokumen ini menjadi referensi tunggal otoritatif untuk meniadakan pergeseran makna istilah (*terminology drift*), ambiguitas kata, dan penggunaan sinonim liar di seluruh repositori arsitektur enterprise.

---

## 2. Controlled Vocabulary & Canonical Glossary

Istilah teknis dan arsitektural baku wajib digunakan sesuai definisi kanonikal resmi berikut:

| Istilah Kanonikal | Definisi Kanonikal Resmi | Ruang Lingkup Usage | Aturan Penggunaan & Contoh Baku |
| :--- | :--- | :--- | :--- |
| **Enterprise Architecture (EA)** | Kerangka kerja konseptual yang menyelaraskan strategi bisnis, infrastruktur teknologi, solusi aplikasi, dan tata kelola keputusan. | Induk Tata Kelola | Digunakan untuk mengacu pada seluruh sistem repositori `KB` & `ADR`. |
| **Knowledge Base (KB)** | Repositori dokumentasi resmi berstandar baku yang menyimpan seluruh pengetahuan konstitusi, bisnis, dan teknis proyek. | Dokumentasi Induk | Ditulis dengan prefiks `KB-XXX`. Contoh: [`KB-100`](file:///e:/APLIKASI/docs/KB-100_BUSINESS_BLUEPRINT.md). |
| **Architecture Decision Record (ADR)**| Dokumen resmi yang merekam satu keputusan arsitektur penting lengkap dengan konteks, kriteria, bukti, dan dampaknya. | Keputusan Arsitektur | Ditulis dengan prefiks `ADR-XXX`. Contoh: [`ADR-001`](file:///e:/APLIKASI/docs/ADR-001_ARCHITECTURE_STYLE_DECISION.md). |
| **Modular Monolith Architecture** | Gaya arsitektur aplikasi di mana seluruh modul bisnis dibungkus terisolasi dalam satu unit pengerapan biner tunggal. | Arsitektur Aplikasi | Istilah baku untuk acuan `ADR-001`. Dilarang disingkat menjadi "ModMono". |
| **Non-Functional Requirement (NFR)**| Spesifikasi kualitas teknis sistem seperti kinerja, keandalan, ketersediaan, dan keamanan (acuan `KB-110`). | Spesifikasi Teknis | Mengacu pada target kuantitatif `KB-110`. Contoh: Latency < 500ms. |
| **Decision Boundary** | Batas isolasi lingkup keputusan arsitektur yang menolak kebocoran produk, vendor, atau implementasi teknis. | Isolasi ADR | Wajib didefinisikan pada Bab 7 di setiap dokumen ADR. |
| **Proof of Concept (POC)** | Uji kelayakan teknis empiris yang menghasilkan data kuantitatif objektif untuk mendukung keputusan akhir ADR. | Evaluasi Bukti | Digunakan pada tahap analisis keputusan teknis sebelum penetapan produk. |
| **Single Source of Truth (SSOT)** | Prinsip bahwa hanya ada satu dokumen resmi yang diakui sebagai acuan kebenaran mutlak untuk suatu domain. | Tata Kelola Baseline | Dokumen berstatus `LOCKED` berlaku sebagai SSOT resmi repositori. |

---

## 3. Approved Synonyms & Prohibited Terminology

Untuk menjaga konsistensi istilah, repositori menetapkan pemetaan sinonim yang diizinkan (*Approved Synonyms*) dan istilah yang **DILARANG HARAM** digunakan (*Prohibited Terminology*):

| Prohibited / Ambiguous Term | Istilah Kanonikal Pengganti | Alasan Pelarangan & Dampak Risiko Semantic |
| :--- | :--- | :--- |
| ❌ *Microservices / Micro-service* | **Modular Monolith Architecture** | Bertentangan dengan keputusan arsitektur baku `ADR-001 Baseline LOCKED`. |
| ❌ *Backend Core / Service Backend* | **Domain 2 — Backend Application Engine** | Tidak presisi dengan taksonomi 16 Decision Domains `KB-200`. |
| ❌ *Database Engine (sebelum ADR-003)* | **Category Conceptual Storage Engine** | Menghindari bias vendor produk basis data sebelum penetapan `ADR-003`. |
| ❌ *Drafting / In-Progress* | **Draft v0.1 / Draft v0.2** | Format versi status alur hidup wajib presisi sesuai `KB-010`. |
| ❌ *Fast Response / Speed* | **Response Latency < 500ms** | Menggunakan istilah kualitatif kabur; wajib acuan angka NFR `KB-110`. |
| ❌ *Server Machine / VPS / EC2* | **Application Execution Runtime / Infrastructure** | Mencegah penyebutan spesifik penyedia cloud atau jenis server fisik. |

---

## 4. Repository Naming Convention Standard

Ketentuan penulisan nama dokumen, bab, berkas, dan identifier teknis:

1. **Penamaan Dokumen Markdown**:
   - `KB-XXX_NAMA_DOKUMEN_DALAM_CAPITAL.md` (Contoh: `KB-026_ENTERPRISE_TERMINOLOGY_STANDARD.md`)
   - `ADR-XXX_NAMA_KEPUTUSAN_DALAM_CAPITAL.md` (Contoh: `ADR-002_PROGRAMMING_LANGUAGE_ENGINE_DECISION.md`)
2. **Penamaan Header Bab**:
   - Nomor Bab Arab diawali titik dan spasi: `## 1. Title`, `## 2. Subtitle`.
3. **Huruf Kapital (Capitalization Standard)**:
   - Nama dokumen, istilah kanonikal, dan status alur hidup (`LOCKED`, `APPROVED`, `DRAFT`) wajib menggunakan huruf kapital baku (*Title Case / Upper Case*).

---

## 5. Approved Acronym & Abbreviation Register

Daftar singkatan resmi yang diizinkan dalam repositori:

| Akronim / Singkatan | Kepanjangan Resmi Kanonikal | Domain Usage |
| :---: | :--- | :--- |
| **EA** | Enterprise Architecture | Governance |
| **KB** | Knowledge Base | Repository Taxonomy |
| **ADR** | Architecture Decision Record | Decision Governance |
| **NFR** | Non-Functional Requirement | Technology Architecture |
| **POC** | Proof of Concept | Decision Evidence |
| **TCO** | Total Cost of Ownership | Business Architecture |
| **MTTR** | Mean Time to Recovery | Technology Architecture (< 2 jam) |
| **ACID** | Atomicity, Consistency, Isolation, Durability | Database Integrity |
| **LTS** | Long-Term Support | Technology Maintainability |
| **SSOT** | Single Source of Truth | Enterprise Governance |

---

## 6. Terminology Review & Governance Rules

Setiap dokumen baru atau revisi wajib melalui verifikasi semantik (*Semantic Consistency Audit*):

1. **Rule-01 (Canonical Enforcement)**: Setiap istilah teknis wajib merujuk pada kamus kanonikal Bab 2.
2. **Rule-02 (Prohibited Elimination)**: Dokumen yang memuat istilah terlarang (*Prohibited Terms*) dinyatakan **FAIL Quality Gate**.
3. **Rule-03 (Neutrality Safeguard)**: Dilarang menggunakan nama merk produk teknis pada draf inisialisasi ADR sebelum uji POC resmi.
4. **Rule-04 (Glossary Linkage)**: Setiap referensi istilah induk wajib menyertakan link markdown ke berkas baseline LOCKED terkait.

---

## 7. Revision History

| Version | Date | Author / Role | Description of Changes |
| :--- | :--- | :--- | :--- |
| **v1.0 APPROVED** | 30 Juli 2026 | Product Owner / CEO | Penetapan resmi Enterprise Architecture Terminology Standard & Controlled Vocabulary (`WO-KB-026`). |
| **v1.0 LOCKED** | 30 Juli 2026 | Product Owner / CEO | Penguncian resmi standar kosakata terkontrol baku bagi seluruh repositori KulinerBunta.id. |

---

## 8. Governance Compliance Statement
Dokumen `KB-026_ENTERPRISE_TERMINOLOGY_STANDARD.md` ini disusun dengan mematuhi secara mutlak seluruh ketentuan *Enterprise Governance Baseline v1.0*, *Business Architecture Baseline v1.0*, *Technology Architecture Baseline v1.0*, *Solution Architecture Baseline v1.0*, *Architecture Decision Governance Baseline v1.0*, *Architecture Decision Roadmap v1.0*, dan *ADR-001/002 Baseline v1.0*:
- **Kedudukan Hukum**: Tunduk pada `KB-000`, `KB-100`, `KB-110`, `KB-200`, `KB-300`, `KB-310`, `ADR-001`, `ADR-002`, dan `KB-025` (Seluruhnya **v1.0 LOCKED**).
- **Pendaftaran Katalog**: Terdaftar pada registri `KB-001_KNOWLEDGE_BASE_MASTER_INDEX.md` (v1.0 LOCKED) pada domain Governance `KB-026`.
- **Kepatuhan Format**: Mengadopsi 12 atribut metadata header baku `KB-020_DOCUMENTATION_STANDARD.md` (v1.0 LOCKED).

---

## 9. Self Validation

Audit mandiri kualitas dokumen *v1.0 LOCKED* terhadap kriteria *Quality Gates* repositori:

| Validation Criteria | Result | Notes |
| :--- | :---: | :--- |
| **Vocabulary Completeness Check**| **PASS** | Memuat kamus kanonikal lengkap, sinonim terizin, & daftar istilah terlarang. |
| **Naming Convention Standard** | **PASS** | Format penulisan berkas, header, & singkatan didefinisikan presisi. |
| **Master Index Registration** | **PASS** | `KB-026` terdaftar resmi sebagai `LOCKED` pada [`KB-001`](file:///e:/APLIKASI/docs/KB-001_KNOWLEDGE_BASE_MASTER_INDEX.md). |
| **Traceability Framework Check**| **PASS** | Terhubung utuh ke `KB-000` s.d `KB-025` & `ADR-001/002`. |
| **Overall Quality Gate** | **PASS** | **KB-026 v1.0 LOCKED Officially Established.** |

---

## Lock Record

- **Lock Date**: 30 Juli 2026
- **Locked By**: Product Owner / CEO (Djamaludin Musa, SKM)
- **Lock Authority**: Product Owner / CEO (Djamaludin Musa, SKM)
- **Lock Basis**:
  - Enterprise Architecture Terminology Standard & Controlled Vocabulary Established (WO-KB-026)

- **Lock Statement**:
  "Dokumen KB-026_ENTERPRISE_TERMINOLOGY_STANDARD.md telah dikunci secara permanen sebagai Standar Terminology Resmi (Enterprise Architecture Terminology Standard & Controlled Vocabulary) proyek KulinerBunta.id. Perubahan terhadap dokumen ini setelah tahap Lock hanya dapat dilakukan melalui mekanisme Change Request (CR) resmi sesuai KB-010_DOCUMENT_LIFECYCLE dan KB-300_ARCHITECTURE_DECISION_GOVERNANCE."

---
